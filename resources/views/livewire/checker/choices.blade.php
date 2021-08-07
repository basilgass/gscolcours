@php(
	$questionOptions = preg_split('/\R/', $question->checker_options)
)
<div class="w-full grid grid-cols-2 md:grid-cols-4 gap-4"
	 wire:ignore
	 x-data="{
	check(ev) {
		// Check the choices value
		if(this.userInput!==''){
			const resultat = +this.answer===+this.userInput;
			this.reponses[this.questionId] = resultat?1:0
			$wire.correctAnswer(+this.userInput, resultat);
		}
	}
}"
>
	@foreach($questionOptions as $opt)
		<div class="py-3 px-4
		border  rounded-lg
		text-center
		hover:shadow
		cursor-pointer checker-option-item"
			 :class="{
				'bg-gray-200 border-gray-300 hover:bg-gray-300 hover:border-gray-400': userInput==='' || +userInput!=={{$loop->index}},
				'bg-red-200 border-red-300 hover:bg-red-300 hover:border-red-400': userInput!=='' && +userInput==={{$loop->index}} && +userInput!==+answer,
				'bg-green-200 border-green-300 hover:bg-green-300 hover:border-green-400': userInput!=='' && +userInput==={{$loop->index}} && +userInput===+answer,
			 }"
			 @click="	userInput={{$loop->index}};
			 			check($event)
					"
		>{{$opt}}</div>
	@endforeach
</div>