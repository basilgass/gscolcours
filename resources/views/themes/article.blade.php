<x-scolcours-layout :theme="$theme" >
	<x-slot name="header">
		<h1 class="text-3xl">{{ $article->name }}</h1>
	</x-slot>
	
	<x-scolcours-breadcrumbs :theme="$theme" :article="$article"/>
	@includeIf($article->view)
	
</x-scolcours-layout>