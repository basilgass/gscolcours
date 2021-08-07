<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<x-scolcours.breadcrumbs :theme="$theme" :article="$article"/>
	
	@if(auth()->user()?->role==='admin')
		<div class="flex justify-end">
			<a href="{{route('new exercise', ['theme'=>$article->theme, 'article'=>$article])}}"
				 class="text-sm px-4 py-2 font-thin hover:{{$theme->textColor}}"
			>
				<i class="bi bi-plus-circle"></i> nouvel exercice
			</a>
		</div>
	@endif
	
	<div id="exercises-wrapper" class="space-y-10">
		@foreach($exercices as $exercice)
			<x-exercise-interactive :exercise="$exercice"/>
		@endforeach
	</div>
</x-scolcours-layout>