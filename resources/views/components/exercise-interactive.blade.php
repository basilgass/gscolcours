<article x-data="{
			'interactive': false,
			'nombreReponseCorrect': 0,
			'finished': false,
			'reponses': [{{$reponses}}], // réponses obtenues actuellement
			points(){
				const pts = this.reponses.reduce((sum, x)=>sum+=x)
				this.finished = pts === this.reponses.length
				
				return pts
				}
			}"
		 x-init="finished = points()===reponses.length"
		 class="bg-white rounded-xl px-3 pt-3 pb-1"
		 :class="{
			 'border-2 border-green-600': finished,
			 'border border-gray-200': !finished
		 }"
>
	<div class="flex items-center justify-between">
		<div class="flex items-baseline space-x-2">
			<h2 class="text-lg font-semibold">
				exercice {{$exercise->id}}
			</h2>
			
			<div x-text="'( ' + points() + ' / ' + reponses.length + ' )'"></div>
		</div>
		<div>
			<button class="text-sm px-4 py-2 font-thin hover:{{$exercice->textColor}}"
					@click="interactive=!interactive">
				<i class="bi bi-check2-circle"></i>répondre
			</button>
			
			@if(auth()->user()?->role==='admin')
				<a href="{{route('edit exercise', ['theme'=>$exercice->article->theme, 'article'=>$exercice->article, 'exercise'=>$exercice->id])}}"
				   class="text-sm px-4 py-2 font-thin hover:{{$exercice->article->theme->textColor}}"
				>
					<i class="bi bi-check2-circle"></i>éditer
				</a>
			@endif
		</div>
	</div>
	<div>
	
	</div>
	
	<div>
		<div id="exercise-title" wire:ignore>
			<h3 class="exercise-title text-lg">{{$exercice->title}}</h3>
		</div>
		
		<div id="exercise-body" class="my-4 prose" wire:ignore>
			@markdown($exercice->body)
		</div>
		
		<div id="questions-wrapper"
			 class="mb-4"
			 :class="interactive?'space-y-10':'space-y-2'"
		>
			@php($n=0)
			@forelse($exercice->questions as $question)
				
				<div class="w-full">
					<livewire:interactive-question
							:questionId="$n"
							:question="$question"
							:key="'question-'.time()"
					/>
				</div>
				@php($n = $question->checker==='sans'?$n:$n+1)
			
			@empty
				Il n'y a pas de question dans cet exercice !
			@endforelse
		
		</div>
	</div>
	
	<div class="flex items-center justify-between text-xs text-gray-500">
		<div>dernière mise à jour {{$exercice->updated_at->diffForHumans()}}</div>
	</div>
</article>