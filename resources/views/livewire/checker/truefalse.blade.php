<div class="form-input mx-3"
	 x-data="{
	check(reponse) {
		// Check the choices value
		const resultat = +this.answer===+this.userInput
		this.reponses[this.questionId] = resultat?1:0
		$wire.correctAnswer(this.userInput, resultat)
	}
}"
>
	<div class="flex space-x-4">
		<button class="border hover:bg-gray-200 px-5 py-3 rounded"
				:class="{
				'bg-red-400 border-red-600': +userInput===1 && reponses[questionId]===0,
				'bg-green-400 border-green-600': +userInput===1 && reponses[questionId]===1
				}"
				@click="userInput=1; check()"
		>vrai</button>
		<button class="border hover:bg-gray-200 px-5 py-3 rounded"
				:class="{
				'bg-red-400 border-red-600': userInput!=='' && +userInput===0 && reponses[questionId]===0,
				'bg-green-400 border-green-600': userInput!=='' && +userInput===0 && reponses[questionId]===1
				}"
				@click="userInput=0; check()"
		>faux</button>
	</div>
</div>