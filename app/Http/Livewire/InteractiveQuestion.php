<?php

namespace App\Http\Livewire;

use App\Models\Question;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class InteractiveQuestion extends Component {
	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */

	public int $questionId;
	public Question $question;
	public bool $interactive;
	public string $pivotAnswer;
	public bool $pivotCorrect;
	public int $pivotAttempts;

	public function mount( int $questionId, Question $question, $interactive = false ) {
		$this->questionId = $questionId;
		$this->question     = $question;
		$this->$interactive = $interactive;

		// Get the current answer value
		$this->pivotAnswer = '';
		$this->pivotCorrect = false;
		$this->pivotAttempts = 0;

		if ( Auth::check() ) {
			$pivot = $this->question->users()->find( Auth::id() )->pivot;

			$this->pivotAnswer = $pivot->answer;
			$this->pivotCorrect = $pivot->correct;
			$this->pivotAttempts = $pivot->attempts;
		}
	}

	public function render() {
		return view( 'livewire.interactive-question' );
	}

	public function correctAnswer( string $answer, bool $correct ) {
		if ( Auth::check() ) {
			if(!$this->question->users()->find( Auth::id() )->pivot->correct) {
				$this->question->users()
				               ->updateExistingPivot( Auth::user()->id,
					               [
						               'answer'   => $answer,
						               'correct'  => $correct,
						               'attempts' => $this->pivotAttempts + 1
					               ]
				               );
			}
			$this->pivotAnswer = $answer;
			$this->pivotCorrect = $correct;
			$this->pivotAttempts = $this->pivotAttempts+1;

			// Send an event to parent
//			$this->emitUp('answerUpdated');
		}
	}
}