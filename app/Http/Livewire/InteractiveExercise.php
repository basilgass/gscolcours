<?php

namespace App\Http\Livewire;

use App\Models\Exercise;
use Livewire\Component;

class InteractiveExercise extends Component {
	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public Exercise $exercice ;
	public bool $interactive;

	public function mount(Exercise $exercice, bool $interactive = false): void {
		$this->exercice    = $exercice;
		$this->interactive = $interactive;
}
	public function render(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application {
		return view( 'livewire.Interactive-exercise' );
	}

	public function toggleInteractive(): void {
		$this->interactive = !$this->interactive;
	}
}