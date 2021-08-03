<?php

namespace App\Http\Livewire;

use App\Models\Exercise;
use App\Models\Question;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class InteractiveExercise extends Component {
	protected $listeners = ['answerUpdated'];


	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public Exercise $exercice ;
	public int $numberOfCorrectAnswers;
	public bool $exerciseDone;

	public function mount(Exercise $exercice): void {
		$this->exercice    = $exercice;
		$this->countCorrectAnswers();
}
	public function render(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Contracts\Foundation\Application {
		return view( 'livewire.Interactive-exercise' );
	}

	public function countCorrectAnswers(): void {
		$this->numberOfCorrectAnswers = 0;
		foreach ($this->exercice->questions as $question){
			if ( ! $question->users()->find( Auth::id() )?->exists ) {
				// Create the default pivot data.
				$question->users()
				               ->attach( Auth::id(), [
					               'answer'   => '',
					               'correct'  => false,
					               'attempts' => 0
				               ] );
			}

			if($question->users()->find(Auth::id())->pivot->correct){
				$this->numberOfCorrectAnswers++;
			}
		}

		$this->exerciseDone = $this->numberOfCorrectAnswers === $this->exercice->questions()->count();
	}

	public function answerUpdated() {
		$this->countCorrectAnswers();
	}
}