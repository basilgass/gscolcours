<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	
	<title>{{ config('app.name', 'ScolCours') }}</title>
	
	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
	
	<!-- KaTeX -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css" integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
		  crossorigin="anonymous">
	
	<!-- The loading of KaTeX is deferred to speed up page rendering -->
	<script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.js" integrity="sha384-YNHdsYkH6gMx9y3mRkmcJ2mFUjTd0qNQQvY9VYZgQd7DcN7env35GzlmFaZ23JGp"
			crossorigin="anonymous"></script>
	
	<!-- To automatically render math in text elements, include the auto-render extension: -->
	<script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/contrib/auto-render.min.js" integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl"
			crossorigin="anonymous"></script>
	<script>
		document.addEventListener("DOMContentLoaded", function () {
			katexAutoRender(document.body)
		});
	</script>
	
	<!-- PI bundle -->
	<script src="{{ asset('js/pi.bundle.js') }}"></script>
	
	<!-- Scripts -->
	<script src="{{ asset('js/app.js') }}" defer></script>
	
	<!-- Styles -->
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">
	
	<!-- Livewire styles -->
	@livewireStyles

</head>
<body class="font-sans antialiased">
<div class="min-h-screen bg-gray-100">
	
	<!-- Page Heading -->
	@if(isset($header))
		<header class="scolcours-{{$theme->exists?$theme->slug:'main'}} shadow">
			<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8
			text-white
			flex justify-between">
					<div class="text-3xl">{{ $header }}</div>

				<div>
				@auth
					<button x-data="{open: false}" @click="open=!open" class="relative">
						{{Auth::user()->name}}
						<div x-show="open" x-cloak class="w-40
						flex flex-col text-left space-y-1 py-2
						absolute top-5 -right-1 bg-white text-gray-800 border-gray-200 rounded shadow-lg"
						x-transition>
							<a class="hover:bg-gray-100 px-3 py-2"
							href="{{route('profile')}}">
								profile
							</a>
							
							<form
								class="hover:bg-gray-100 px-3 py-2"
								method="POST" action="{{ route('logout') }}">
								@csrf
								
								<a href="{{route('logout')}}"
								   @click.prevent="$event.target.closest('form').submit()">
									se déconnecter
								</a>
							</form>
						</div>
					</button>
				@else
						<a href="{{route('login')}}">Se connecter</a>
					@endauth
				</div>
				
			</div>
		</header>
	@endif

<!-- Page Content -->
	@if($fullpage)
		<main class="container mx-auto">
			{{ $slot }}
		</main>
	@else
		<main class="container mx-auto pt-1 min-h-screen">
			{{ $slot }}
		</main>
	@endif
</div>

<!-- Adding the livewire scripts -->
@livewireScripts
</body>
</html>
