<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<x-scolcours.breadcrumbs :theme="$theme" :article="$article"/>
	
	<x-exercise-interactive :exercise="$exercice"/>

</x-scolcours-layout>