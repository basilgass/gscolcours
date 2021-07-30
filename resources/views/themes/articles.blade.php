<x-scolcours-layout :theme="$theme">
	<x-slot name="header">{{$theme->name}}</x-slot>
	
	<x-scolcours.breadcrumbs :theme="$theme"/>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		@foreach($theme->articles as $article)
			<article class="h-full flex flex-col
				border rounded-lg px-2 bg-white
				hover:rounded-2xl hover:shadow-lg duration-300
				">
				<a
						class="text-lg font-semibold my-3"
						href="/{{$theme->slug}}/{{$article->slug}}">
					{{$article->name}}
				</a>
				<p class="flex-1">{{$article->description}}</p>
				<footer class="my-3">
					<a class="cursor-pointer px-2 py-1 text-sm rounded border"
					   href="/{{$theme->slug}}/{{$article->slug}}">
						Aller...
					</a>
				</footer>
			</article>
			
		@endforeach
	</div>
</x-scolcours-layout>