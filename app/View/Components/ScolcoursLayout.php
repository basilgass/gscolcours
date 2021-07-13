<?php

namespace App\View\Components;

use Illuminate\View\Component;

class ScolcoursLayout extends Component {
	public Bool $fullpage;
	public string $bgColor;

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */

	public function __construct(Bool $fullpage = false, string $bg = 'bg-gray-100') {
		$this->fullpage = $fullpage;
		$this->bgColor = $bg;
	}

	public function render() {
		return view( 'layouts.scolcours' );
	}
}