<?php

use App\Models\Theme;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThemesTable extends Migration {
	public function up() {
		Schema::create( 'themes', function ( Blueprint $table ) {
			$table->bigIncrements( 'id' );
			$table->string( 'slug' )->unique();
			$table->string( 'name' );
			$table->string( 'color' );
			$table->string('icon');
			$table->timestamps();
		} );

		// This table is specific and should not be modified.
		Theme::create( [
			'slug'  => 'algebre',
			'name'  => 'algèbre',
			'color' => 'bg-blue-500',
			'icon' => 'calculator'
		] );
		Theme::create( [
			'slug'  => 'analyse',
			'name'  => 'analyse',
			'color' => 'bg-amber-500',
			'icon' => 'graph-up'
		] );
		Theme::create( [
			'slug'  => 'geometrie',
			'name'  => 'géométrie',
			'color' => 'bg-purple-500',
			'icon' => 'triangle'
		] );
		Theme::create( [
			'slug'  => 'statistiques',
			'name'  => 'statistiques',
			'color' => 'bg-cyan-500',
			'icon' => 'percent'
		] );
		Theme::create( [
				'slug'  => 'jeux',
				'name'  => 'jeux',
				'color' => 'bg-orange-500',
				'icon' => 'controller'
			]
		);
		Theme::create( [
				'slug'  => 'tools',
				'name'  => 'boîte à outils',
				'color' => 'bg-pink-200',
				'icon' => 'wrench'
			]
		);

		// Save it as cache.
		cache()->forget( 'themes');
	}

	public function down() {
		Schema::dropIfExists( 'themes' );
	}
}