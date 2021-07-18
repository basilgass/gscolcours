@props([
	'question'=>null,
])

<div class="form-input mx-3"
	 x-data="{
	'userInput': '',
	'buttonText': 'sélectionner',
	'show': false,
	'correct': false,
	'answer': {{$question->answer}},
	check(ev, idx) {
		// Close the menu
		this.show=false;
		
		// Update the answer
		let item
		if(ev.target.classList.contains('checker-option-item')){
			item =ev.target;
		}else{
			item = ev.target.parentNode
			
			while(!item.classList.contains('checker-option-item')){
				item = item.parentNode
			}
		}
		
		this.buttonText = item.innerHTML
		
		// Check the choices value
		return this.answer===idx
	}
}"
>
	<div class="relative w-44">
		<button class="w-full text-left
		border-b-2 hover:border-blue-400
		px-2 py-1"
				@click="show=!show"
				x-html="buttonText"
				:class="{'bg-green-50 border-b-green-500':correct}"
		></button>
		<div x-show="show" class="w-44 shadow bg-white rounded border absolute top-10 z-50">
			@foreach(explode(';', $question->checker_options) as $opt)
				<div class="w-full py-3 px-4 hover:bg-gray-200 cursor-pointer checker-option-item"
					@click="correct = check($event, {{$loop->index}})"
				>{{$opt}}</div>
				@endforeach
		</div>
	</div>
</div>