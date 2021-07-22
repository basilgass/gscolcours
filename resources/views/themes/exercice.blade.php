<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<x-scolcours-breadcrumbs :theme="$theme" :article="$article"/>
	
	<x-exercise :exercice="$exercice" :interactive="true"/>
	
	
</x-scolcours-layout>