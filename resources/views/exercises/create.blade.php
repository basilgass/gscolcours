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
				></textarea>
			</div>
			
			<button type="submit">AJOUTER</button>
			
			<h3 class="mb-5">Ajouter une ou des questions</h3>
			
			<div id="questions-wrapper" class="space-y-6">
				<div class="form-input w-full"
					 @keyup.enter="$refs.reponse.focus()">
					<input x-ref="question" placeholder=" ">
					<label>question</label>
				</div>
				
				<div class="form-input w-full">
					<input x-ref="reponse" placeholder=" "
						   @keyup.enter="$refs.checker.focus()"
					>
					<label>réponse attendue</label>
				</div>
				
				<div class="w-full form-input">
					vérification
					<select x-ref="checker">
						<option value="number">Nombre</option>
						<option value="choices">Choix</option>
						<option value="polynom">polynôme</option>
						<option value="string">texte</option>
					</select>
				</div>
				
				<div class="form-input w-full">
					<input x-ref="checker_options" placeholder=" "
						   @keyup.enter="addQuestion($event)"
					>
					<label>options de vérification</label>
				</div>
				
				<div class="text-right">
					<div @click="addQuestion($event)"
							class="px-2 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50">ajouter une question
					</div>
				</div>
				
				<h3>questions</h3>
				<template x-for="(item, index) in questions" :key="'inputs-question-'+index">
					<div>
						<div @click="questions.splice(index,1)">DEL</div>
						<input name="questions[]" x-model="item.question">
						<input name="reponses[]" x-model="item.reponse">
						<select name="checker[]" x-model="item.checker">
							<option value="number">Nombre</option>
							<option value="choices">Choix</option>
							<option value="polynom">polynôme</option>
							<option value="string">texte</option>
						</select>
						<input name="checker_options[]" x-model="item.checker_options">
					</div>
				</template>
			</div>
		</form>
		
		<div class="typo">
			<h2 x-text="title"></h2>
			
			<p x-text="body"></p>
			
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