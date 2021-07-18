<?php

namespace App\View\Components;

use App\Models\Article;
use App\Models\Theme;
use Illuminate\Support\Facades\URL;
use Illuminate\View\Component;

class ScolcoursBreadcrumbs extends Component {
	public Theme $theme;
	public Article|null $article;

	public function __construct(Theme $theme, Article|null $article=null) {
		$this->theme = $theme;
		$this->article = $article;
	}
	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public function render() {

		$breadcrumbs = [];
		// $breadcrumbs['name'] = '/url'
		if($this->theme->exists){
			$breadcrumbs[$this->theme->name] = '/'.$this->theme->slug;
		}
		if($this->article!==null and $this->article->exists){
			$breadcrumbs[$this->article->name] = '/'.$this->theme->slug.'/'.$this->article->slug;
		}
		$segments = explode('/', request()->path());
		if($segments>2){
			$n = count($segments);
			for($i=2; $i<$n; $i++){
				$breadcrumbs[$segments[$i]] = end($breadcrumbs).'/'.$segments[$i];
			}
		}

		return view( 'components.scolcours-breadcrumbs',
			[
				'breadcrumbs'=>$breadcrumbs
			]
		);
	}
}