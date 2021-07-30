<?php

namespace App\Http\Livewire;

use App\Models\Exercise;
use App\Models\Question;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class InteractiveExercise extends Component {
	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public Exercise $exercice ;

	public function mount(Exercise $exercice): void {
		$this->exercice    = $exercice;
}
	public function render(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application {
		return view( 'livewire.Interactive-exercise' );
	}

}