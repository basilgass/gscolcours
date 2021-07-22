require('./bootstrap');

require('alpinejs');
const AsciiMathParser = require('./asciimath2tex')
window.asciimath2tex = new AsciiMathParser();

/* Alpine loading and directives */
import Alpine from 'alpinejs'

Alpine.directive('katex', (el, {value, modifiers, expression}, {Alpine, effect, evaluateLater}) => {
	// value = x-katex:value
	// modifiers = x-katex.modifiers
	// expression = x-katex="3x-4"
	// Alpine, effect, cleanup, evaluate, ...)

	const katexOptions = {
		displayMode: modifiers.includes('display') || !modifiers.includes('inline'),
		throwOnError: modifiers.includes('error'),
	}

	el.classList.add('alpine-katex')

	if(modifiers.includes('left')){
		el.classList.add('katex-left')
	}
	// let tex = evaluate(expression);
	let getTex = evaluateLater(expression);

	effect(() => {
		// katex.render(evaluate(expression), el, katexOptions)
		getTex(tex => {
			el.dataset.tex = tex

			return katex.render(
				modifiers.includes('ascii')?asciimath2tex.parse(tex):tex,
				el,
				katexOptions)
		})
	})
});

window.Alpine = Alpine
Alpine.start()
/* Alpine loading done */