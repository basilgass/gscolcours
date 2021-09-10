<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<x-scolcours.breadcrumbs :theme="$theme" :article="$article"/>
	
	@can('admin')
		<x-panel>
			<h3 class="h3">Modifier l'exercice</h3>
			
			<form method="POST" action="{{route('delete article', [$article])}}">@csrf
				<div class="grid grid-cols-3 gap-2">
					@method('DELETE')
					<a class="btn-form" href="{{route('new exercise', [$article->theme->slug, $article->slug])}}">Ajouter un exercice</a>
					<a class="btn-form" href="{{route('edit article', $article)}}" >modifier</a>
					<submit class="btn-form">supprimer</submit>
			</div>
			</form>
		</x-panel>
		
	@endcan
	
	@if(count($article->exercises)>0)
		<h2 class="text-lg lead">Exercices</h2>
		<div class="my-5">
			<a class="btn primary" href="{{url()->current()}}/exercices">Tous</a>
		</div>
	@endif
	
	<h2 class="h2">{{$article->name}}</h2>
	<x-markdown>{{$article->description}}</x-markdown>
	@if($article->illustrations()->count()>0)
		<img src="{{asset('illustrations/'.$article->illustrations->first()->url)}}">
	@endif
	
	@if(View::exists($article->view))
		<div class="article-wrapper bg-white border border-gray-200 rounded-xl py-5 px-3">
			@includeIf($article->view)
		</div>
	@endif

</x-scolcours-layout>