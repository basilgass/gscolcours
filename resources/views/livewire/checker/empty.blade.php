<div
		class="w-full"
	 x-data="{
	 	open: false,
		check() {
			this.reponses[this.questionId] = 1
			$wire.correctAnswer('1', true)
		}
	}"
>
	<div class="w-full flex justify-between">
		<button class="btn" @click="open=!open"> <i class="bi bi-eye"></i> Voir la réponse</button>
		<button class="btn"
				@click="check()"
				:class="{'success':reponses[questionId]}"
		>Valider la réponse
		</button>
	</div>
	
	<div x-show="open">
		<div class="prose">
			<x-markdown>{{$question->checker_text}}</x-markdown>
		</div>
	</div>

</div>