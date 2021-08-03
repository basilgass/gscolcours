<article x-data="{
			'interactive': false,
			'nombreReponseCorrect': 0,
			'finished': false,
			'reponses': [{{$reponses}}]
			}"
		 class="bg-white rounded-xl px-3 pt-3 pb-1"
		 :class="{
			 'border-2 border-green-600': finished,
			 'border border-gray-200': !finished
		 }"
>
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-semibold">
			exercice <span x-text="finished"></span>
		</h2>
		<div>
			<button class="text-sm px-4 py-2 font-thin hover:{{$exercice->textColor}}"
					@click="interactive=!interactive">
				<i class="bi bi-check2-circle"></i>répondre
			</button>
			
			@if(auth()->user()?->role==='admin')
				<a href="{{route('edit exercise', ['theme'=>$exercice->article->theme, 'article'=>$exercice->article, 'exercise'=>$exercice->id])}}"
				   class="text-sm px-4 py-2 font-thin hover:{{$exercice->textColor}}"
				>
					<i class="bi bi-check2-circle"></i>éditer
				</a>
			@endif
		</div>
	</div>
	<div>
		<span x-text="reponses.reduce((sum, x)=>sum+=x)"></span> / {{$exercice->questions->count()}}
	</div>
	
	<div>
		<div id="exercise-title">
			<h3 class="exercise-title text-lg">{{$exercice->title}}</h3>
		</div>
		
		<div id="exercise-body" class="my-4">
			<p>{{$exercice->body}}</p>
		</div>
		
		
		<div id="questions-wrapper"
			 class="py-10"
			 :class="interactive?'space-y-10':'space-y-2'"
		>
			@forelse($exercice->questions as $question)
				
				<div class="w-full">
					<livewire:interactive-question
							:questionId="$loop->index"
							:question="$question"
							:key="'question-'.time()"
					/>
				</div>
			
			@empty
				Il n'y a pas de question dans cet exercice !
			@endforelse
		
		</div>
	</div>
	
	<div class="flex items-center justify-between text-xs text-gray-500">
		<div>dernière mise à jour {{$exercice->updated_at->diffForHumans()}}</div>
	</div>
</article>