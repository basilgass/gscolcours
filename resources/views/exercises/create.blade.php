<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<h1 class="h1">Nouvel exercice</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-2"
		 x-data="createExercise()"
	>
		<form
				method="POST"
				action="/exercices/store"
				class="bg-white border border-gray-100 rounded-xl p-2">
			@csrf
			<input type="hidden" value="{{$article->id}}" name="article">
			
			<div class="form-input w-full">
				<input placeholder=" " x-model="title" name="title">
				<label>Titre</label>
			</div>
			
			<div class="form-textarea">
				<textarea name="body" id="exercise-body" cols="30" rows="10"
						  class="w-full"
						  x-model="body"
						  @input.debounce.300ms="katexAutoRender(document.getElementById('exercice-preview'))"
				></textarea>
			</div>
			
			<button class="border rounded-full px-3 py-2 bg-blue-600 text-white" type="submit">AJOUTER</button>
		</form>
		
		<div class="typo">
			<h2 x-text="title"></h2>
			
			<p x-text="body" id="exercice-preview"></p>
			
			<ol class="questions list-decimal list-inside">
				<template x-for="(item, index) in questions" :key="'donnee-question-'+index">
					<div class="list-item">
						<span x-text="item.question"></span>
						(<span x-text="item.reponse"></span>) -
						<span x-text="item.checker"></span>
						(<span x-text="item.checker_options"></span>)
					</div>
				</template>
			</ol>
		</div>
		<script>
			function createExercise() {
				return {
					open: false,
					theme: '',
					title: '',
					body: '',
					questions: [],
					addQuestion(ev) {
						this.questions.push({
								question: this.$refs.question.value,
								reponse: this.$refs.reponse.value,
								checker: this.$refs.checker.value,
								checker_options: this.$refs.checker_options.value
							}
						)

						// Reset question and answer
						this.$refs.question.value = ''
						this.$refs.reponse.value = ''
						this.$refs.question.focus()
					}
				}
			}
		</script>
	</div>
</x-scolcours-layout>