<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<x-scolcours.breadcrumbs :theme="$theme" :article="$article"/>
	
	<div id="exercises-wrapper" class="space-y-10">
		@foreach($exercices as $exercice)
			<div class="bg-white border border-gray-200 rounded-xl px-2 py-3">
			<livewire:interactive-exercise
					:exercice="$exercice"
			/>
			</div>
		@endforeach
	</div>
</x-scolcours-layout>