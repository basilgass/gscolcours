<form wire:submit.prevent="update" x-data="{}" class="bg-white rounded-xl p-3 border border-gray-300">
	@csrf
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-semibold">
			exercice
		</h2>
		<a class="hover:text-blue-700" href="{{$exercice->url}}">
			<i class="bi bi-eye"></i> voir
		</a>
	</div>
	
	<x-form.input name="title" wire:model.lazy="exercice.title"/>
	<x-form.textarea name="body" rows="10" wire:model.lazy="exercice.body"></x-form.textarea>
	<x-form.button>mettre à jour</x-form.button>
	
{{--TODO: enable markdown preview in exerecices editing --}}
	<x-markdown>{{ $exercice->body }}</x-markdown>
</form>
	
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
