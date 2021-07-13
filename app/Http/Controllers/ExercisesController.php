<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Exercise;
use App\Models\Theme;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ExercisesController extends Controller {

	public function index(Theme $theme, Article $article) {
		return view('themes.exercices', [
			'theme'=>$theme,
			'article'=>$article,
			'exercices'=>$article->exercises
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create() {
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param Request $request
	 *
	 * @return Response
	 */
	public function store( Request $request ) {
		//
	}

	/**
	 * Display the specified resource.
	 *
	 *
	 * @param Theme    $theme
	 * @param Article  $article
	 * @param Exercise $exercise
	 *
	 * @return Application|Factory|View
	 */
	public function show(Theme $theme, Article $article, Exercise $exercise ) {
		return view('themes.exercice', [
			'theme'=>$theme,
			'article'=>$article,
			'exercice'=>$exercise
		]);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param Exercise $exercise
	 *
	 * @return Response
	 */
	public function edit( Exercise $exercise ) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param Request  $request
	 * @param Exercise $exercise
	 *
	 * @return Response
	 */
	public function update( Request $request, Exercise $exercise ) {
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param Exercise $exercise
	 *
	 * @return Response
	 */
	public function destroy( Exercise $exercise ) {
		//
	}

}