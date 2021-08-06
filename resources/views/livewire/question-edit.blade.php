<div class="question-wrapper"
	 id="question-{{$question->id}}"
	 x-data="{
	 	checkers: [
	 		{'label': 'texte', 'checker': 'text'},
	 		{'label': 'nombre', 'checker': 'number'},
	 		{'label': 'fraction', 'checker': 'fraction'},
	 		{'label': 'choix', 'checker': 'choices'},
	 		{'label': 'polynôme', 'checker': 'polynom'},
	 		{'label': 'mot', 'checker': 'string'},
	 	],
	 	updateTitle() {
	 		let arr = this.checkers.filter(x=>x.checker===this.checker)
	 		return arr.length===1?arr[0].label:'?'
	 	},
	 	checker: @entangle('question.checker')
	 	}">
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
				
				<div class=" w-full">
					<label>question</label>
					<textarea rows="5" x-ref="body" class="w-full"
						   wire:model.defer="question.body" placeholder=" "></textarea>
					
				</div>
				
				<div class="form-input w-full">
					<input x-ref="question" @keyup.enter="$refs.checker.focus()"
						   wire:model.defer="question.answer" placeholder=" ">
					<label>réponse souhaitée</label>
				</div>
				
				<div class="w-full">
					<div class="w-full flex">
						<template x-for="(item, id) of checkers" :key="'tabbtn'+id">
							<button class="flex-1 text-center py-3 bg-white"
									@click="checker=item.checker"
								 :class="{
								 'border': item.checker!==checker,
								 'border-t border-l border-r': item.checker===checker
								 }"
									x-text="item.label"></button>
						</template>
					</div>
					
					
					<div class="tab-wrapper w-full bg-white px-3 pt-5 pb-1">
						<h3 class="h3" x-text="updateTitle()"></h3>
						
						<div x-show="checker==='choices'">
							Texte supplémentaire
						<textarea
								x-ref="checker_text"
								class="input w-full"
								rows="5"
								wire:model.defer="question.checker_text"
						></textarea>
						</div>
						
						<labe> Options
							<input class="input" wire:model.defer="question.checker_options"></labe>
						
						<div x-show="checker==='text'">
						</div>
						
						<div x-show="checker==='number'">
						</div>
						
						<div x-show="checker==='fraction'">
							<button @click="$wire.set('question.checker_options', 'reduced')" >Fraction réduite</button>
						</div>
						
						<div x-show="checker==='choices'">
							<button @click="$wire.set('question.checker_text', 'vrai\nfaux')" >Vrai / Faux</button>
							
						</div>
						
						<div x-show="checker==='polynom'">
							<button @click="$wire.set('question.checker_options', 'factor')" >polynôme factorisé</button>
							<button @click="$wire.set('question.checker_options', 'developed')" >polynôme développé</button>
						</div>
						
						<div x-show="checker==='string'">
						</div>
					</div>
					
					
				</div>
			</div>
			<div class="w-full flex justify-between space-x-2 mt-2">
				<div class="flex-1">
					@if (session()->has('questionUpdated'))
						<div class="text-green-800">
							{{ session('questionUpdated') }}
						</div>
					@endif
				</div>
				<div>
					<button wire:click="destroy" class="px-3 py-1 border border-red-600 bg-red-500 text-white text-xs rounded">Supprimer</button>
					
					<button wire:click="update" class="px-3 py-1 border border-blue-600 bg-blue-500 text-white text-xs rounded">Mettre à jour</button>
				</div>
			</div>
		</div>
		
	</div>
</div>