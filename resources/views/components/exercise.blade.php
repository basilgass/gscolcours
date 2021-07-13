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
					 :class="{'border-gray-200': !correct, 'border-green-500': correct}"
					 x-data="{
								userInput: '',
								correct: false,
								reponse: new Pi.Polynom('{{$question->answer}}'),
								check() {
									try {
										const checkPolynom = new Pi.Polynom(this.userInput)
										if(!this.reponse.isEqual(checkPolynom)){return false;}
										return this.reponse.isFactorized(this.userInput)
									} catch {
										return false
									}
								}
							}"
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
						<div class="form-input mx-3">
							<input
									placeholder=" "
									x-model="userInput"
									@input="correct = check()"
									:class="{'success':correct}"
							>
							<label>Réponse</label>
						</div>
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