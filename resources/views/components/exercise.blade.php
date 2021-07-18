@props([
	'exercice'=>null,
	'nombre'=>false,
	'interactive'=>false,
	'link'=>false
])
<article>
	<div class="flex items-center">
		<h2 class="text-lg font-semibold">
			Exercice {{$nombre}}
		</h2>
		@if($link)
			<a class="text-sm px-4 py-2 font-thin hover:{{$exercice->textColor}}" href="{{$exercice->url}}">
				<i class="bi bi-check2-circle"></i>
				Répondre
			</a>
		@endif
	</div>
	<div class="exercise-body">
		{{$exercice->body}}
	</div>
	
	
	@if($interactive)
		<div class="space-y-10 py-10">
			@foreach($exercice->questions as $question)
				<div class="w-full border rounded-xl"
					 x-data="{correct: false}"
					 :class="{'border-gray-200': !correct, 'border-green-500': correct}"
				>
					<div class="flex items-center">
						<div class="font-semibold rounded-l-xl mr-2 px-3 py-6"
							 :class="{'bg-gray-100': !correct, 'bg-green-50': correct}"
						>
							{{$loop->iteration}}.
						</div>
						<div class="flex-1">
							{{$question->body}}
						</div>
						
						@if($question->checker==='number')
							<x-checker.number :question="$question"/>
						@elseif($question->checker==='choices')
							<x-checker.choices :question="$question"/>
						@elseif($question->checker==='polynom')
							<x-checker.polynom :question="$question"/>
						@else
							SOMETHING ELSE
						@endif
						
					</div>
				</div>
			@endforeach
		</div>
	@else
		@if(count($exercice->questions)>1)
			<div class="grid grid-cols-3 list-decimal list-inside">
				@foreach($exercice->questions as $question)
					<div class="list-item">{{$question->body}}</div>
				@endforeach
			</div>
		@else
			<div>
				{{$exercice->questions[0]->body}}
			</div>
		@endif
	
	@endif
</article>