<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<x-scolcours.breadcrumbs :theme="$theme" :article="$article"/>
	
	<livewire:interactive-exercise :exercice="$exercice"/>

</x-scolcours-layout>