<div class="form-input mx-3"
	 x-data="{
			polynom: new Pi.Polynom('{{$question->answer}}'),
			check() {
				resultat = false;
				try {
					const checkPolynom = new Pi.Polynom(this.userInput)
					
					// Not the same polynom
					if(!this.polynom.isEqual(checkPolynom)){
						resultat =  false;
					}else{
						// With options
						if(this.checker_options.includes('factor')){
							resultat =  this.polynom.isFactorized(this.userInput)
						} else if (this.checker_options.includes('dev')) {
							// TODO: Must check if it's entirely developped, ordered (by letter) and reduced
							resultat = !this.polynom.isFactorized(this.userInput)
						}else{
							resultat = true;
						}
					}
				}catch{}
				this.reponses[this.questionId] = resultat?1:0
				$wire.correctAnswer(this.userInput, resultat);
			}
		}"
>
	<input
			placeholder=" "
			x-model="userInput"
			@keyup.enter="check()"
			:class="{'success':reponses[questionId]}"
	>
	<label>Réponse</label>
</div>