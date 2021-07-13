<x-scolcours-layout :bg="$theme->color">
	<x-slot name="header">
		<h1 class="text-3xl">{{ $article->name }}</h1>
	</x-slot>
	
	<div id="exercises-wrapper" class="space-y-10">
		@foreach($exercices as $exercice)
			<x-exercise
					:exercice="$exercice"
					:nombre="$loop->iteration"
					:link="true"
			/>
		@endforeach
	</div>
</x-scolcours-layout>