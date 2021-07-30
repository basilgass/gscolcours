<div class="question-wrapper"
	 id="question-{{$question->id}}"
	 x-data="{}"
>
	<div class="flex">
		
		<div class="w-full
			border border-blue-100 bg-blue-50
			p-2 mt-6
			rounded"
			 x-data=""
		>
			<div class="flex flex-col space-y-7">
				<h3 class="h3">Modifier la question</h3>
				<div class="form-input">
					<input x-ref="position" @keyup.enter="$refs.body.focus()"
						   wire:model.defer="question.position" placeholder=" ">
					<label>Position</label>
				</div>
				
				<div class="form-input w-full">
					<input x-ref="body" @keyup.enter="$refs.question.focus()"
						   wire:model.defer="question.body" placeholder=" ">
					<label>question</label>
				</div>
				
				<div class="form-input w-full">
					<input x-ref="question" @keyup.enter="$refs.checker.focus()"
						   wire:model.defer="question.answer" placeholder=" ">
					<label>réponse souhaitée</label>
				</div>
				<div>
					<input x-ref="checker" @keyup.enter="$refs.checker_options.focus()"
						   class="input" wire:model.defer="question.checker">
					<input x-ref="checker_options" @keyup.enter="$wire.update()"
						   class="input" wire:model.defer="question.checker_options">
				</div>
			</div>
			<div class="w-full flex justify-end space-x-2 mt-2">
				<button wire:click="destroy" class="px-3 py-1 border border-red-600 bg-red-500 text-white text-xs rounded">Supprimer</button>
				
				<button wire:click="update" class="px-3 py-1 border border-blue-600 bg-blue-500 text-white text-xs rounded">Mettre à jour</button>
			</div>
		</div>
		
	</div>
</div>