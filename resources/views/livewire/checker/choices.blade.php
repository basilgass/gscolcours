@php(
	$questionOptions = preg_split('/\R/', $question->checker_text)
)
<div class="form-input mx-3"
	 x-data="{
	'buttonText': '{{is_numeric($pivotAnswer)?$questionOptions[$pivotAnswer]:'sélectionner'}}',
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
		const resultat = +this.answer===idx;
		this.reponses[this.questionId] = resultat?1:0
		$wire.correctAnswer(idx, resultat);
	}
}"
	 x-init="questionIsCorrect = reponses[questionId]"
>
	<div class="relative w-44">
		<button class="w-full text-left
		border-b-2 hover:border-blue-400
		px-2 py-1"
				@click="show=!show"
				x-html="buttonText"
				:class="{'bg-green-50 border-b-green-500':reponses[questionId]}"
		></button>
		<div x-show="show" x-cloak class="w-44 shadow bg-white rounded border absolute top-10 z-50">
			@foreach($questionOptions as $opt)
				<div class="w-full py-3 px-4 hover:bg-gray-200 cursor-pointer checker-option-item"
					 @click="check($event, {{$loop->index}})"
					 wire:ignore
				>{{$opt}}</div>
			@endforeach
		</div>
	</div>
</div>