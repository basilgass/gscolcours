<!--
name: étude de fonction rationnelle
description: Etude de fonction rationnelle
categories: 2M
-->
<article class="typo"
		 x-data="AlpineEtudeDeFonction()"
		 x-init="checkInput()">
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
		<div x-katex.left="etudeDisplay"></div>
		
		<h3>ensemble de définition</h3>
		<div x-katex.left="etudeED"></div>
		<h3>étude de signe</h3>
		<h3>asymptote(s) verticale(s)</h3>
		<template x-for="(av, index) in etudeAV" :key="`av-index-${index}`">
			<div x-katex.left="av"></div>
		</template>
		<h3>asymptote horizontale ou oblique</h3>
		<div x-katex.left="etudeAOH"></div>
		
		<div x-show="etudeDelta!==''">
		<h3>position relative</h3>
		<div x-katex.left="etudeDelta"></div>
		</div>
		<h3>dérivée</h3>
		<div x-katex.left="etudeDerivative" @click="console.log($event.target.closest('.alpine-katex').dataset.tex)"></div>
		<h3>croissance</h3>
		<h3>graphe</h3>
		<h3>tex</h3>
	</div>
	
	<script>
		function AlpineEtudeDeFonction(){
			return {
				fx: '3x-5/x+7',
				check: false,
				N: null,
				D: null,
				erreur: '',
				zeroes: {
					numerator: [],
					denominator: []
				},
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
							this.etudeAnalyse();
							return
						}catch{
							this.erreur =  'Fonction non résolue'
							return
						}

					}
					this.erreur = 'Il ne s\'agit pas d\'une fonction rationnelle';
				},
				etudeAnalyse() {
					// TODO: toute cette analyse doit se trouver dans un endroit de Pi.rational - pas de calculs à faire ici, si ce n'est pour l'écriture !
					if (this.check) {
						this.etudeDisplay =  `f(x) = \\frac{ ${this.N.tex} }{ ${this.D.tex} }`
						this.zeroes.numerator = this.N.getZeroes()
						this.zeroes.denominator = this.D.getZeroes()

						this.etudeED = this.zeroes.denominator[0]!==false?
							`ED_f = \\mathbb{R}\\setminus\\left\\{ ${this.zeroes.denominator.map(x=>x.tex).join(';')} \\right\\}`
							:`ED_f = \\mathbb{R}`
						
						// TODO: déterminer s'il s'agit de +- ou -+  infini
						this.etudeAV = []

						for(let zero of this.zeroes.denominator){
							if(zero!==false) {
								this.etudeAV.push(
									`\\lim_{x\\to ${zero.tex} }\\ f(x) = \\left[ \\frac{ ${this.N.evaluate({x: zero}).tex} }{ 0 } \\right] = \\pm \\infty \\implies \\text{AV: }x = ${zero.tex} `
								)
							}
						}
						// TODO: modifier dans factors de Pi.Polynom => un polynome du 1er ou zero-ème degré à un seul facteur.
						console.log(this.N.factors.map(x=>x.tex))
						
						const euclidian = this.N.euclidian(this.D),
							degree = euclidian.quotient.degree('x')

						if(degree===1){
							this.etudeAOH = `\\text{AO: } y = ${euclidian.quotient.tex} `
						}else if(degree===0){
							this.etudeAOH = `\\text{AH: } y = ${euclidian.quotient.tex} `
						}

						// TODO: creer l'étude de signe si nécessaire
						if(euclidian.reminder.isZero()) {
							this.etudeDelta = ''
						}else {
							this.etudeDelta = `\\delta(x) = \\frac{ ${euclidian.reminder.tex} }{ ${this.D.tex} }`
						}
						
						const dN = this.N.derivative(),
							dD = this.D.derivative()

						// TODO: reduite la dérivee a l'aide de PI.rational ?
						this.etudeDerivative = `f'(x) = \\frac{ ${dN.clone().multiply(this.D).subtract(dD.clone().multiply(this.N)).tex} }{ ${this.D.pow(2).tex } }`
						
						// TODO: creer l'étude de signe de la dérivée
						
						// TODO: afficher le graphique
					}
				},
				etudeDisplay: '',
				etudeED: '',
				etudeAV: [],
				etudeAOH: '',
				etudeDelta: '',
				etudeDerivative: '',
				etudeTex: []
			}
		}
	</script>
</article>