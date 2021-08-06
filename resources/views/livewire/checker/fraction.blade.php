<div class="form-input mx-3"
	 x-data="{
		fraction: new Pi.Fraction( '{{$question->answer}}'),
		userFraction: '',
		message: '',
		check() {
			// Exact numeric answer
			let resultat = false;

			try{
				let Q = new Pi.Fraction(this.userInput)
				// The fraction must be equal
				if(Q.isEqual(this.fraction)){
					resultat = this.checker_options.includes('reduced')?Q.isReduced():true
					this.message = resultat?'':'fraction à réduire !'
					
				}
			}catch{console.log('Erreur dans la fraction')}

			this.reponses[this.questionId] = resultat?1:0
			$wire.correctAnswer(this.userInput, resultat);
		},
		liveUpdate() {
			try{
				let Q = new Pi.Fraction(userInput)
				return Q.tex
			}catch{
				return '\\color{red}\\text{fraction non reconnue}'
			}
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
	<p class="text-xs text-red-600" x-text="message"></p>
	<p x-katex="liveUpdate"></p>
</div>