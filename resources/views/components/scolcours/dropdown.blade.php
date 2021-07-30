@props([
	'trigger' => 'sélectionner'
])

<div class="dropdown-wrapper relative"

>
	<!-- Trigger button -->
	<div class="hover:bg-gray-200" @click="open=!open" x-html="trigger"></div>
	
	<!-- Menu -->
	<div class="bg-white absolute top-2 -right-1 py-2 px-3 z-50 w-40 space-y-2"
		 x-show="open"
		 x-cloak
		 @click.outside="open=false"
		 @click="trigger = $event.target.innerHTML"
		 x-transition:enter="transition ease-out duration-200"
		 x-transition:enter-start="transform opacity-0 scale-95"
		 x-transition:enter-end="transform opacity-100 scale-100"
		 x-transition:leave="transition ease-in duration-75"
		 x-transition:leave-start="transform opacity-100 scale-100"
		 x-transition:leave-end="transform opacity-0 scale-95"
	>
		{{$slot}}
	</div>
</div>