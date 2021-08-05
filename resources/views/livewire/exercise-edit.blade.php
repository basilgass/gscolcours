<article x-data="{}" class="bg-white rounded p-3">
	
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-semibold">
			exercice
		</h2>
		
		<a class="hover:text-blue-700" href="{{$exercice->url}}"><i class="bi bi-eye"></i> voir</a>
	</div>
	
	<div id="exercise-title">
		<div class="form-input mt-5">
			<input class="w-full"
				   placeholder=" "
				   wire:model.defer="exercice.title">
			<label>titre de l'exercice</label>
		</div>
	</div>
	
	<div id="exercise-body" class="my-4">
		<div class="form-textarea">
				<textarea class="w-full"
						  rows="5"
						  wire:model.defer="exercice.body"></textarea>
		</div>
	</div>
	
	<div id="exercise-admin-board">
		<div class="flex justify-end w-full">
			<button wire:click="update" class="border px-3 py-2">mettre à jour</button>
		</div>
	</div>
	
	<div id="questions-wrapper"
		 class="py-10 space-y-2"
	>
		<h2 class="h2">Questions</h2>
		@forelse($exercice->questions as $question)
			<div class="w-full">
				
				<livewire:question-edit
						:question="$question"
						:key="'question-'.time()"
				/>
				
			</div>
		@empty
			Il n'y a pas de question dans cet exercice !
		@endforelse
		
		<div class="border p-5">
			<button wire:click="ajouterQuestion">Ajouter une question</button>
		</div>
	</div>
</article>