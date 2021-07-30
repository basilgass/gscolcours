<?php

namespace App\Http\Livewire;

use App\Models\Exercise;
use App\Models\Question;
use Livewire\Component;

class ExerciseEdit extends Component {
	public Exercise $exercice;

	protected $listeners = ['questionDeleted' => 'updateExercise', 'updateExercise'];

	protected $rules = [
		'exercice.title' => '',
		'exercice.body' => 'required|min:6'
	];

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public function mount( Exercise $exercice ) {
		$this->exercice = $exercice;
	}

	public function render() {
		return view( 'livewire.exercise-edit' );
	}

	public function update( ) {
		$this->validate();
		$this->exercice->save();
	}

	public function ajouterQuestion() {
		Question::create([
			'exercise_id' => $this->exercice->id,
			'position'=>count($this->exercice->questions)+1,
			'body'=> ' ? ',
			'answer'=> '0',
			'checker'=>'number',
			'checker_options'=>''
		])->exercise()->associate($this->exercice);

		$this->updateExercise();
	}

	public function updateExercise() {
		$this->exercice->refresh();

		// Reformat all exercises position using the order....
		foreach($this->exercice->questions as $i=>$question){
			$question->position = $i+1;
			$question->save();
		}
	}
}