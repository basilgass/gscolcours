<div class="question-wrapper"
	 id="question-{{$question->id}}"
	 x-data="{
	 	questionId: {{$questionId}},
		 userInput: '{{$pivotAnswer}}',
		 answer: '{{$question->answer}}',
		 options: '{{$question->checker_options}}'.split(';'),
     }"
>
	<div class="flex"
		 :class="{
					 'border-gray-200': !reponses[questionId] && interactive,
					 'border-green-500': reponses[questionId] && interactive,
					}">
		
		<!-- Numbering -->
		<div class="font-semibold px-3 w-16"
			:class="{
				'text-green-600': reponses[questionId]
			}">
			{{$question->position}}.
			<i x-show="reponses[questionId]" class="bi bi-check inline text-xs"></i>
		</div>
		
		<!-- Body -->
		<div class="flex-1">
			{{$question->body}}
		</div>
		
	</div>
	
	<!-- Answer question wrapper -->
	<div class="mt-2 mb-4 ml-10"
		 x-show="interactive"
		 x-transition
		 x-cloak>
		<div class="flex border pb-2 py-4 rounded pt-6"
			 :class="{
				'bg-gray-50 border-gray-100': !reponses[questionId],
				'bg-green-50 border-green-100': reponses[questionId],
			}"
		>
			@include('livewire.checker.'.$question->checker)
		</div>
	</div>
	
</div>
