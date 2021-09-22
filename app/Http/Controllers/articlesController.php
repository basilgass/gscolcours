<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Exercise;
use App\Models\Illustration;
use App\Models\Theme;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class articlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function index(Theme $theme)
    {
        // Show all articles from this theme
        return view('themes.articles', ['theme' => $theme]);
    }

    /**
     * Display the specified resource.
     *
     * @param Article $article
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function show(Theme $theme, Article $article)
    {
        return view('themes.article', [
            'theme' => $theme,
            'article' => $article
        ]);
    }

	public function create( Theme $theme ) {
		return view('articles.create', ["theme"=>$theme]);
	}
    public function store(Request $request)
    {
		$this->validate($request, [
    		"name"=>['min:2', 'required'],
		    "slug"=>['min:2', 'required'],
		    "description"=>['min:2', 'required'],
		    "illustration"=>['image']
	    ]);

    	$article = Article::create([
    		"theme_id"=>$request->theme_id,
		    "name"=>$request->name,
		    "slug"=>$request->slug,
		    "description" => $request->description
	    ]);

		if($request->file('illustration')) {
			$url = \Storage::disk('illustrations')->put($article->id.'', $request->file('illustration'));
			$article->illustrations()->attach( Illustration::create( [
				'url' => $url,
				'description'=>'',
				'type'=>'image'
			] ) );
		}
    	return redirect()->route('articles.show', [$article->theme,$article]);

    }

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param Exercise $exercise
	 *
	 * @return Response
	 */
	public function edit( Article $article) {
		return view('articles.edit', ['theme'=>$article->theme,'article'=>$article]);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param Request  $request
	 * @param Exercise $exercise
	 *
	 * @return Response
	 */
	public function update( Request $request, Article $article ) {
		$this->validate($request, [
			"name"=>['min:2', 'required'],
			"slug"=>['min:2', 'required'],
			"description"=>['min:2', 'required'],
			"illustration"=>['image']
		]);

		$article->update([
			'name'=>$request->name,
			'description' => $request->description,
			'slug'=>$request->slug
		]);

		// update the image
		// TODO : allow image update

		$article->save();

		return redirect(route('articles.show', [$article->theme,$article]));
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param Exercise $exercise
	 *
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function destroy( Article $article ) {
		$theme = $article->theme;
		$article->delete();
		return redirect(route('articles.index', $theme));
	}
}
