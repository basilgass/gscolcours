@props([
	'question'=>null,
])

<div class="form-input mx-3"
	 x-data="{
	'userInput': '',
	'correct': false,
	'answer': '{{$question->answer}}',
	'option': '{{$question->checker_options}}',
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
	<input
			placeholder=" "
			x-model="userInput"
			@input="correct = check()"
			:class="{'success':correct}"
	>
	<label>Réponse</label>
</div>