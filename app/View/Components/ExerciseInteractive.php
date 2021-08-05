<?php

namespace App\View\Components;

use App\Models\Exercise;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\Component;

class ExerciseInteractive extends Component {
	public Exercise $exercise;

	public function __construct(Exercise $exercise) {
		$this->exercise = $exercise;
	}

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public function render() {

		// Check if the questions from the exercise has been initiate..
		$this->checkPivot();

		return view( 'components.exercise-interactive' , [
			'exercice' => $this->exercise,
			'reponses' => $this->getReponses()
		]);
	}

	private function checkPivot() {
		if(Auth::check()) {
			foreach ( $this->exercise->questions as $question ) {
				if ( ! $question->users()->find( Auth::id() )?->exists ) {
					// Create the default pivot data.
					$question->users()
					         ->attach( Auth::id(), [
						         'answer'   => '',
						         'correct'  => false,
						         'attempts' => 0
					         ] );
				}
			}
		}
	}

	private function getReponses(){
		if(Auth::check()) {
			return $this->exercise->questions
				->filter(fn($q)=>$q->checker!=='sans')
				->map( fn( $q )
					=> $q->users()->find( Auth::id() )->pivot->correct ? 1 : 0
				)->join( ',' );
		}else{
			return $this->exercise->questions
				->filter(fn($q)=>$q->checker!=='sans')
				->map( fn( $q ) => 0 )
				->join( ',' );
		}
	}
}