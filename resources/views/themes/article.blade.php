<x-scolcours-layout :theme="$theme" >
	<x-slot name="header">{{ $article->name }}</x-slot>
	
	<x-scolcours.breadcrumbs :theme="$theme" :article="$article"/>

@if(count($article->exercises)>0)
		<div>
			<a href="{{url()->current()}}/exercices">Il y a des exercices</a>
		</div>
	@endif
	
	<div class="article-wrapper bg-white border border-gray-200 rounded-xl py-5 px-3">
		@includeIf($article->view)
	</div>
	
</x-scolcours-layout>