require('./bootstrap');

require('alpinejs');

/* Alpine loading and directives */
import Alpine from 'alpinejs'

Alpine.directive('katex', (el, {value, modifiers, expression}, {Alpine, effect, evaluateLater}) => {
	// value = x-katex:value
	// modifiers = x-katex.modifiers
	// expression = x-katex="3x-4"
	// Alpine, effect, cleanup, evaluate, ...)

	const katexOptions = {
		displayMode: modifiers.includes('display') || !modifiers.includes('inline'),
		throwOnError: modifiers.includes('error')
	}

	// let tex = evaluate(expression);
	let getTex = evaluateLater(expression);

	effect(() => {
		// katex.render(evaluate(expression), el, katexOptions)
		getTex(tex => {
			katex.render(tex, el, katexOptions)
		})
	})
});

window.Alpine = Alpine
Alpine.start()
/* Alpine loading done */