<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<x-scolcours.breadcrumbs :theme="$theme" :article="$article"/>
	
	<div id="exercises-wrapper" class="space-y-10">
		@foreach($exercices as $exercice)
			<x-exercise-interactive :exercise="$exercice"/>
			
		@endforeach
	</div>
</x-scolcours-layout>