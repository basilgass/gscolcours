<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Exercise;
use App\Models\Question;
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
	 * @return Application|Factory|View
	 */
	public function create(Theme $theme, Article $article) {
		return view('exercises.create',[
				'theme'=>$theme,
				'article'=>$article
		]);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param Request $request
	 *
	 * @return Response
	 */
	public function store( Request $request ) {
		// Validate the form ?

		$exercice = Exercise::create([
			"article_id" => $request->article,
			"title" =>$request->title,
			"body" =>$request->body,
		]);

		$n = count($request->questions);
		if($n>0) {
			for ( $i = 0; $i < $n; $i ++ ) {
				Question::create( [
					'exercise_id'     => $exercice->id,
					'body'            => $request->questions[ $i ] ?? '',
					'answer'          => $request->reponses[ $i ] ?? '',
					'checker'         => $request->checker[ $i ],
					'checker_options' => $request->checker_options[ $i ] ?? ''
				] )->exercise()->associate( $exercice );
			}
		}

		return redirect()->back();
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
	public function edit( Theme $theme, Article $article, Exercise $exercise ) {
		return view('exercises.edit', [
			'theme' => $theme,
			'article' => $article,
			'exercice' =>$exercise
		]);
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