require('./bootstrap');
require('alpinejs');
const md = require('markdown-it')({html:true});
window.markdown = md;

const AsciiMathParser = require('./asciimath2tex')
window.asciimath2tex = new AsciiMathParser();

/* Alpine loading and directives */
import Alpine from 'alpinejs'

Alpine.directive('katex',
	(el, {value, modifiers, expression},
	 {Alpine, effect, evaluateLater}) => {
		// value = x-katex:value
		// modifiers = x-katex.modifiers
		// expression = x-katex="3x-4"
		// Alpine, effect, cleanup, evaluate, ...)

		const katexOptions = {
			displayMode: modifiers.includes('display') || !modifiers.includes('inline'),
			throwOnError: modifiers.includes('error'),
		}

		el.classList.add('alpine-katex')

		if (modifiers.includes('left')) {
			el.classList.add('katex-left')
		}

		let getTex = evaluateLater(expression);

		effect(() => {
			// katex.render(evaluate(expression), el, katexOptions)
			getTex(tex => {
				el.dataset.tex = tex

				return katex.render(
					modifiers.includes('ascii') ? asciimath2tex.parse(tex) : tex,
					el,
					katexOptions)
			})
		})
	});

window.Alpine = Alpine
Alpine.start()
/* Alpine loading done */


/* Function app wide */
window.katexAutoRender = function (el) {
	renderMathInElement(el, {
		// customised options
		// • auto-render specific keys, e.g.:
		delimiters: [
			{left: '$$', right: '$$', display: true},
			{left: '$', right: '$', display: false},
			{left: '\\(', right: '\\)', display: false},
			{left: '\\[', right: '\\]', display: true}
		],
		// • rendering keys, e.g.:
		throwOnError: false
	});

}
