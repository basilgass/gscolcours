<div class="form-input mx-3"
	 x-data="{
	'userInput': '{{$pivotAnswer}}',
	'correct': {{($pivotCorrect)?'true':'false'}},
	'answer': '{{$question->answer}}',
	'option': '{{$question->checker_options}}',
	check() {
		// Exact numeric answer
		if(+this.option===0){
			if(+this.userInput===+this.answer){
				this.questionIsCorrect = true
				$wire.correctAnswer(this.userInput, true);
				return true
			}
		}else{
			if( Math.abs(this.userInput-this.answer)<= (0.00000000000001 + (+this.option))){
			this.questionIsCorrect = true
				$wire.correctAnswer(this.userInput, true);
				return true
			}
		}
		
		this.questionIsCorrect = false
		$wire.correctAnswer(this.userInput, false);
		return false
	}
}"
	 x-init="questionIsCorrect = correct"
>
	<input
			placeholder=" "
			x-model="userInput"
			@keyup.enter="correct = check()"
			:class="{'success':correct}"
	>
	<label>Réponse</label>
</div>