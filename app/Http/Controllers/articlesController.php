<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Theme;

class articlesController extends Controller {
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
	 */
	public function index(Theme $theme) {
		// Show all articles from this theme
		return view('themes.articles', ['theme'=>$theme]);
	}


	/**
	 * Display the specified resource.
	 *
	 * @param Article $article
	 *
	 * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
	 */
	public function show( Theme $theme, Article $article ) {
		return view('themes.article', [
			'theme'=>$theme,
			'article'=>$article
		]);
	}

	public function exercice( Theme $theme, Article $article, $exercice ) {
		return view ('themes.exercice', [
			'theme'=>$theme,
			'article'=>$article,
			'exercice'=>"themes/{$theme->slug}/{$article->slug}/exercices/{$exercice}"
		]);
	}
}