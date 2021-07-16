@props([
	'question'=>null,
])

<div class="form-input mx-3"
	 x-data="{
	'userInput': '',
	'show': false,
	'correct': false,
	'answer': '{{$question->answer}}',
	check() {
		// Exact numeric answer
		
		if(+this.option===0){
			if(+this.userInput===+this.answer){
				return true
			}
		}else{
			const max = +this.answer+(+this.option),
					min = +this.answer-this.option
			if(+this.userInput<=max && +this.userInput>=min){
				return true
			}
		}
		
		return false
	}
}"
>
	<div class="relative">
		<button class="border-b-2" @click="show=!show">Sélectionner</button>
		<div x-show="show" class="w-44 shadow bg-white rounded border absolute top-6 left-0 z-50">
			@foreach(explode(';', $question->checker_options) as $opt)
				<div class="w-full py-3 px-2 hover:bg-gray-200">{{$opt}}</div>
				@endforeach
		</div>
	</div>
	<input
			placeholder=" "
			x-model="userInput"
			@input="correct = check()"
			:class="{'success':correct}"
	>
	<label>Réponse</label>
</div>