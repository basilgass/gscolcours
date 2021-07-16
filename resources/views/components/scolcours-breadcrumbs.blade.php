<div class="mb-5 flex space-x-2">
	<a href="{{route('home')}}" class="hover:text-blue-600">
		<i class="bi bi-house-door"></i>
	</a>
	<span>/</span>
	<a href="{{route('theme', $theme->slug)}}"
	   class="@if($article->exists)
			   hover:underline hover:text-blue-600
			   @else
			   text-gray-400 pointer-events-none
			   @endif
			   ">
		{{$theme->name}}
	</a>
	@if($article->exists)
		<span>/</span>
		<a href="{{route('article', [$theme->slug, $article->slug])}}"
		   class="text-gray-400 pointer-events-none">
			{{$article->name}}
		</a>
	@endif
</div>