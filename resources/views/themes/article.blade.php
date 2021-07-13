<x-scolcours-layout :bg="$theme->color" >
	<x-slot name="header">
		<h1 class="text-3xl">{{ $article->name }}</h1>
	</x-slot>
	
	@includeIf($article->view)
	

</x-scolcours-layout>