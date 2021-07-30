<div class="form-input mx-3"
	 x-data="{
	'userInput': '{{$pivotAnswer}}',
	'correct': {{($pivotCorrect)?'true':'false'}},
	'answer': {{$question->answer}},
	'buttonText': 'sélectionner',
	'show': false,
	check(ev, idx) {
		// Close the menu
		this.show=false;
		
		// Update the answer
		let item = ev.target.classList.contains('checker-option-item')?
		ev.target
		:ev.target.closest('checker-option-item')
		
		this.buttonText = item.innerHTML
		
		// Check the choices value
		const reponse = +this.answer===idx;
		
		this.questionIsCorrect = reponse;
		console.log(this.questionIsCorrect);
		$wire.correctAnswer(idx, reponse);
		return reponse
	}
}"
	 x-init=" questionIsCorrect = correct"
>
	<div class="relative w-44">
		<button class="w-full text-left
		border-b-2 hover:border-blue-400
		px-2 py-1"
				@click="show=!show"
				x-html="buttonText"
				:class="{'bg-green-50 border-b-green-500':correct}"
		></button>
		<div x-show="show" x-cloak class="w-44 shadow bg-white rounded border absolute top-10 z-50">
			@foreach(explode(';', $question->checker_options) as $opt)
				<div class="w-full py-3 px-4 hover:bg-gray-200 cursor-pointer checker-option-item"
					 @click="correct = check($event, {{$loop->index}})"
				>{{$opt}}</div>
			@endforeach
		</div>
	</div>
</div>