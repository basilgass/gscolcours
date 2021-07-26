<?php

namespace App\Http\Livewire;

use App\Models\Question;
use Livewire\Component;

class InteractiveQuestion extends Component {
	/**
	 * Get the view / contents that represent the component.
	 *
	 * @return \Illuminate\View\View|string
	 */
	public Question $question;

	public function mount( Question $question ) {
		$this->question = $question;
	}
	public function render() {
		if($this->question->checker==='number'){
			return view( 'livewire.checker.number' );
		}elseif ($this->question->checker==='choices'){
			return view( 'livewire.checker.choices' );
		}elseif ($this->question->checker==='polynom'){
			return view( 'livewire.checker.polynom' );
		}

		return view( 'livewire.checker.string' );
	}
}