<!--
name: Dérivées d'exponentielles
description: Calculs de dérivée d'éxponentielle en utilisant les règles du plus fort et de Bernoulli-L'Hospital
categories: 3m
-->
<article class="typo" x-data="deriveeExponentielle">
	<p x-katex.display="exp">
	
	</p>
	<script>
		function deriveeExponentielle(){
			return {
				exp(){
					let polynomE = new Pi.Polynom().rndSimple(),
						polynomF = new Pi.Polynom().rndSimple(),
						inf = Pi.Numeric.randomBool()?-1:1,
						result;
					
					if(Pi.Numeric.randomBool()) {
						if (polynomE.monomByDegree().coefficient.sign() === -1) {
							result = polynomF.monomByDegree().coefficient.sign() === 1 ? '0_+' : '0_-'
						} else {
							result = polynomF.monomByDegree().coefficient.sign() === 1 ? '+\\infty' : '-\\infty'
						}

						return '\\lim_{x \\to +\\infty}\\,\\frac{\\mathrm{e} ^{' + polynomE.tex + '}}{' + polynomF.tex + '} = ' + result
					}else{
						if (polynomE.monomByDegree().coefficient.sign() === 1) {
							result = polynomF.monomByDegree().coefficient.sign() === -1 ? '0_+' : '0_-'
						} else {
							result = polynomF.monomByDegree().coefficient.sign() === -1 ? '+\\infty' : '-\\infty'
						}

						return '\\lim_{x \\to -\\infty}\\,\\frac{\\mathrm{e} ^{' + polynomE.tex + '}}{' + polynomF.tex + '} = ' + result

					}
				}
			}
		}
	</script>
</article>