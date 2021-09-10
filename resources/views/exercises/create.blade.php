<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<h1 class="h1">Nouvel exercice</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-2"
		 x-data="{
					open: false,
					theme: '',
					title: '',
					body: '',
					questions: []
				}"
	>
		<form
				method="POST"
				action="/exercices/store"
				class="bg-white border border-gray-300 rounded-xl p-2">
			@csrf
			<input type="hidden" value="{{$article->id}}" name="article">
			
			<x-form.input name="title" x-model="title"></x-form.input>
			<x-form.textarea name="body" id="exercise-body"
							 rows="10"
							 @input.debounce.300ms="katexAutoRender(document.getElementById('exercice-preview'))"
							 x-model="body"></x-form.textarea>

			<x-form.button>Ajouter</x-form.button>
		</form>
		
		<div class="typo bg-white rounded-xl border border-gray-300">
			<h2 x-text="title"></h2>
			
			<p x-text="body" id="exercice-preview"></p>
		</div>
	</div>
</x-scolcours-layout>