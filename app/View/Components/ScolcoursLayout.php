<?php

namespace App\View\Components;

use App\Models\Theme;
use Illuminate\View\Component;

class ScolcoursLayout extends Component {
	public Bool $fullpage;
	public Theme $theme;

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */

	public function __construct(Bool $fullpage = false, Theme $theme = null) {
		$this->fullpage = $fullpage;
		$this->theme     = $theme;
	}

	public function render() {
		return view( 'layouts.scolcours' );
	}
}