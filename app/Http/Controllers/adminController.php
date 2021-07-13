<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Theme;
use Carbon\Carbon;

class adminController extends Controller {
	public function index() {
		//
	}

	public function updateArticles() {
		$files = collect( [] );
		foreach ( Theme::all() as $theme ) {
			$files->add(
				collect( \Storage::disk( 'themes' )
				                 ->files( $theme->slug ) )
					->map( function ( $filepath, $key ) use ( $theme ) {
						// Get slug name, based on file name
						$slug = basename( $filepath, '.blade.php' );

						// Get an article.
						$article       = Article::where( 'slug', $slug )->first();

						// Get timestamp, to determine if the file is newer than data in the database
						$fileTimestamp = \Storage::disk( 'themes' )->getTimestamp( $filepath );

						if ( $article === null or $article->updated_at->lt( new Carbon( $fileTimestamp ) ) ) {
							$meta = $this->_parseFile( $filepath, \Storage::disk( 'themes' ) );

							$article = Article::updateOrCreate( [
								"theme_id" => $theme->id,
								"slug"     => $slug,
							], [
								"name"        => $meta['name'],
								"description" => $meta['description']
							] );

							// add the categories if given
							// remove before all categories.
//								$article->categories()->detach();
//
//								foreach ( explode( ',', $meta['categories'] ) as $category ) {
//									$category = trim( $category );
//									if ( $category !== '' ) {
//										$article->categories()->attach( Category::firstOrCreate( [
//											"slug" => $category
//										],
//											[
//												"name" => $category
//											] ) );
//									}
//								}
						}

						return $article;
					}
					)
			);
		}
	}

	private function _parseFile( $filepath, $disk ) {
		// The identifier
		$slug = basename( $filepath, '.blade.php' );

		// The file content.
		$content = $disk->get( $filepath );

		// Extract the header value.
		preg_match( '/<!--(.*)-->/sU', $content, $content );

		// Map it to a nice key value pair.
		$meta = [
			'name'        => $slug,
			'description' => '',
			'categories'  => ''
		];

		// Something where found ?
		if ( count( $content ) > 0 ) {
			// Make it as an array
			$content = preg_split( '~\R~', $content[1] );


			$currentMetaKey = '';
			foreach ( $content as $item ) {
				$keyvalue = explode( ':', $item );

				if ( count( $keyvalue ) >= 2 and isset( $meta[ $keyvalue[0] ] ) ) {
					$currentMetaKey          = trim( $keyvalue[0] );
					$meta[ $currentMetaKey ] = trim( $keyvalue[1] );
				} elseif ( $currentMetaKey !== '' ) {
					$meta[ $currentMetaKey ] .= trim( $item );
				}
			}
		}

		return $meta;
	}
}