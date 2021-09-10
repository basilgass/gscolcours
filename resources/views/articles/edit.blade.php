<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{$theme->name}}</x-slot>
	
	<form class="border border-gray-200 p-6 rounded-xl bg-white mb-10"
		  action="{{route('update article', $article)}}" method="POST"
		  enctype="multipart/form-data"
	>
		@csrf
		@method('PATCH')
		<div class="h3 cursor-pointer" @click="addArticle=!addArticle">Ajouter un article</div>
		<x-form.input name="name" value="{{$article->name}}"/>
		<x-form.input name="slug" value="{{$article->slug}}"/>
		<x-form.textarea name="description">{{$article->description}}</x-form.textarea>
		<x-form.input name="illustration" type="file"></x-form.input>
		<input name="theme_id" type="hidden" value="{{$theme->id}}">
		
		<x-form.button>Mettre à jour</x-form.button>
	</form>
</x-scolcours-layout>