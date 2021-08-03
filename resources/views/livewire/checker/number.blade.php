<div class="form-input mx-3"
	 x-data="{
		check() {
			// Exact numeric answer
			let resultat = false;
			if(this.options.length===0 || +this.options[0]===0){
				if(+this.userInput===+this.answer){
					resultat = true
				}
			}else{
				if( Math.abs(this.userInput-this.answer)<= (0.00000000000001 + (+this.options[0]))){
					resultat = true
				}
			}
			
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