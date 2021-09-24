<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{ $article->name }}</x-slot>

	<x-scolcours.breadcrumbs :theme="$theme" :article="$article"/>

	@can('admin')
		<x-panel>
            <x-slot name="header">Modifier l'exercice</x-slot>

            <form method="POST"
                  action="{{route('articles.destroy', [$article->id])}}"
                  @submit="if(!confirm('are you sure')){$event.preventDefault()}"
            >
                @csrf
                @method('DELETE')
                <div class="grid grid-cols-3 gap-2">
                    <a class="btn-form" href="{{route('exercises.create', [$article->theme->slug, $article->slug])}}">Ajouter un exercice</a>
                    <a class="btn-form" href="{{route('articles.edit', $article)}}" >modifier</a>
                    <button type="submit" class="btn-form">supprimer</button>
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
		<div class="article-wrapper mt-10">
			@includeIf($article->view)
		</div>
	@endif

</x-scolcours-layout>
