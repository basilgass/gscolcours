<!--
name: étude de fonction rationnelle
description: Etude de fonction rationnelle
categories: 2M
-->
<article class="typo" x-data="{
	fx: '3x-5/x+7',
	check: false,
	N: null,
	D: null,
	erreur: '',
	checkInput() {
		let polynoms = this.fx.split('/')
			
		this.check = false
		this.N = null
		this.D = null
		this.erreur = ''
		if(polynoms.length===2){
			try{
				this.N = new Pi.Polynom(polynoms[0])
				this.D = new Pi.Polynom(polynoms[1])
				this.check = true
				return
			}catch{
				this.erreur =  'Fonction non résolue'
				return
			}
			
		}
		this.erreur = 'Il ne s\'agit pas d\'une fonction rationnelle';
	},
	etudeDisplay() {
		if(this.check){
			return `f(x) = \\frac{ ${this.N.tex} }{ ${this.D.tex} }`
		}else{
			return ''
		}
	}
}">
	<h1>étude de fonction rationnelle</h1>
	<div class="flex align-middle">
		<label class="">
			\(f(x) = \)
			<input
					class="input"
					placeholder="Equation"
					x-model="fx"
					@input="checkInput()"
			/>
			<p class="text-red-500" x-text="erreur"></p>
		</label>
	</div>
	<div x-show="check" x-transition class="space-y-5">
		<div x-katex.display="etudeDisplay()"></div>
		
		<h3>ensemble de définition</h3>
		<h3>étude de signe</h3>
		<h3>asymptote(s) verticale(s)</h3>
		<h3>asymptote horizontale ou oblique</h3>
		<h3>position relative</h3>
		<h3>dérivée</h3>
		<h3>croissance</h3>
		<h3>graphe</h3>
		<h3>tex</h3>
	</div>
</article>