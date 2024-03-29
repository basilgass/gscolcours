<div class="question-wrapper"
	 id="question-{{$question->id}}"
	 x-data="{
	 	 questionId: {{$questionId}},
		 userInput: '{{$pivotAnswer}}',
		 answer: '{{$question->answer}}',
		 checker_text: `{{$question->checker_text}}`,
		 checker_options: `{{$question->checker_options}}`.split(';'),
     }"
>
	<div class="flex">
		<!-- Numbering -->
		@if($question->checker!=='sans')
		<div class="font-semibold px-3 w-16"
			 :class="{
				'text-green-600': reponses[questionId]
			}">
			{{$questionId+1}}.
			<i x-show="reponses[questionId]" class="bi bi-check inline text-xs"></i>
		</div>
		@endif
		
		<!-- Body -->
		<div class="flex-1 prose mardown-me" wire:ignore>
			<x-markdown>{{$question->body}}</x-markdown>
		</div>
	</div>

	<!-- Answer question wrapper -->
	@if($question->checker!=='sans')
	<div class="mt-4 mb-2 ml-10"
		 x-show="interactive"
		 x-transition
		 x-cloak>
		
		<div class="flex border p-4 rounded"
			 :class="{
				'bg-gray-50 border-gray-100': !reponses[questionId],
				'bg-green-50 border-green-100': reponses[questionId],
			}"
		>
			@include('livewire.checker.'.$question->checker)
		</div>
		</div>
		@endif

</div>
