<?php

namespace App\Http\Livewire;

use App\Models\Question;
use Livewire\Component;

class QuestionEdit extends Component {
	protected $rules = [
		'question.position'=>'required|min:1|numeric',
		'question.body'=>'required|min:2',
		'question.answer'=>'required|min:1',
		'question.checker'=>'required|min:1',
		'question.checker_text'=>'',
		'question.checker_options'=>''
	];

	public Question $question;


	public function mount( Question $question ) {
		$this->question = $question;
	}

	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public function render() {
		return view( 'livewire.question-edit' );
	}

	public function update() {
		$this->validate();
		$this->question->save();
		$this->emit('updateExercise');
	}

	public function destroy() {
		$this->question->delete();
		$this->emit('questionDeleted');
	}
}