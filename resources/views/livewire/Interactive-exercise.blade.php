<article>
	<div class="flex items-center">
		<h2 class="text-lg font-semibold">
			Exercice
		</h2>
			<button class="text-sm px-4 py-2 font-thin hover:{{$exercice->textColor}}" wire:click="toggleInteractive">
				<i class="bi bi-check2-circle"></i>Répondre
			</button>
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
						
						<livewire:interactive-question :question="$question"/>
					
					</div>
				</div>
			@endforeach
		</div>
		<script>
			renderMathInElement(document.body, {
				// customised options
				// • auto-render specific keys, e.g.:
				delimiters: [
					{left: '$$', right: '$$', display: true},
					{left: '$', right: '$', display: false},
					{left: '\\(', right: '\\)', display: false},
					{left: '\\[', right: '\\]', display: true}
				],
				// • rendering keys, e.g.:
				throwOnError: false
			});
		</script>
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