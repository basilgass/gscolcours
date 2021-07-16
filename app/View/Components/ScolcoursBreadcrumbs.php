<?php

namespace App\View\Components;

use App\Models\Article;
use App\Models\Theme;
use Illuminate\View\Component;

class ScolcoursBreadcrumbs extends Component {
	public Theme $theme;
	public Article $article;

	public function __construct(Theme $theme, Article $article=null) {
		$this->theme = $theme;
		$this->article = $article;
	}
	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public function render() {
		return view( 'components.scolcours-breadcrumbs' );
	}
}