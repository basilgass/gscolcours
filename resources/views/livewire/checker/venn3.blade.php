<div class="mx-3"
	 x-data="{
		check() {
			let resultat = this.userInput.trim()===this.answer;
			
			this.reponses[this.questionId] = resultat?1:0
			$wire.correctAnswer(this.userInput, resultat);
		}
	}"
>
	<x-math.venn3
			answer="{{$question->answer}}"
			:name="$question->id"
			x-init="$watch('interactive', ()=>{$nextTick(()=>updateGeom())})"
	>
		<div class="flex justiy-between">
			<button class="btn" @click="check()" >Valider</button>
		</div>
	</x-math.venn3>
</div>