<x-scolcours-layout :bg="$theme->color">
	<x-slot name="header">
		<h1 class="text-3xl">{{ $article->name }}</h1>
	</x-slot>
	
	<x-exercise :exercice="$exercice" :interactive="true"/>
	
	
</x-scolcours-layout>