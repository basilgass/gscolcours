<div class="form-input mx-3"
	 x-data="{
								userInput: '',
								correct: false,
								answer: new Pi.Polynom('{{$question->answer}}'),
								option: '{{$question->checker_options}}'.split(';'),
								check() {
									try {
										const checkPolynom = new Pi.Polynom(this.userInput)
										if(!this.answer.isEqual(checkPolynom)){return false;}
										
										if(this.option.includes('factor')){
											return this.answer.isFactorized(this.userInput)
										} else if (this.option.includes('dev')) {
											// TODO: Must check if it's entirely developped, ordered (by letter) and reduced
											return !this.answer.isFactorized(this.userInput)
										}else{
											return true;
										}
									} catch {
										return false
									}
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