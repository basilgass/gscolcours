<div class="form-input mx-3"
	 x-data="{
		check() {
			let resultat = this.userInput.trim()===this.answer;
			
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