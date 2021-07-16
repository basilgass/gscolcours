<x-scolcours-layout :fullpage="true">
	<h1 class="text-center py-10">
		<div class="text-4xl">Gymnase</div>
		<div class="text-sm">powered by Scolcours</div>
		</h1>
	
	<div class="mt-10">
		<div class="bg-white border rounded-3xl
		grid grid-cols-2 md:grid-cols-3
		gap-6 p-6">
			@foreach($themes as $theme)
			<a class="text-center text-lg font-thin whitespace-nowrap
			rounded border py-24
			scolcours-{{$theme->slug}} text-white
			cursor-pointer
			transform hover:scale-105 {{$loop->index%2===0?'rotate-1':'-rotate-1'}} hover:rotate-0 duration-300"
			href="/{{$theme->slug}}">
				<i class="bi bi-{{$theme->icon}} mr-2"></i>
				{{$theme->name}}
			</a>
			@endforeach
		</div>
	</div>
</x-scolcours-layout>