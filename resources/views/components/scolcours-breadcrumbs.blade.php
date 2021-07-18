<div class="mb-5 flex space-x-2">
	<a href="{{route('home')}}" class="hover:text-blue-600">
		<i class="bi bi-house-door"></i>
	</a>
	
	@foreach($breadcrumbs as $name=>$url)
		<span>/</span>
		<a href="{{$url}}"
		   class="@if(!$loop->last)
				   hover:underline hover:text-blue-600
@else
				   text-gray-400 pointer-events-none
@endif
				   ">
			{{$name}}
		</a>
	@endforeach
	
</div>