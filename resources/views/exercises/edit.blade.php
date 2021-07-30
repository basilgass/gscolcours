<x-scolcours-layout :theme="$exercice->article->theme">
	<x-slot name="header">{{ $exercice->article->name }}</x-slot>
	
	<x-scolcours.breadcrumbs :theme="$exercice->article->theme" :article="$exercice->article"/>
	
	<livewire:exercise-edit :exercice="$exercice"/>
	
</x-scolcours-layout>