<div x-data="" x-init="
$refs['markdown-output'].innerHTML = markdown.render($refs.markdown.innerHTML.replace(/\\\[|\\\]/g, '$$').replace(/\\\(|\\\)/g, '$'));

console.log($refs.markdown.innerHTML)
console.log($refs.markdown.innerHTML.replace(/\\\[|\\\]/g, '$$').replace(/\\\(|\\\)/g, '$'));
">
	<div class="hidden" x-ref="markdown">{{$slot}}</div>
	<div {{$attributes->class('typo')}} x-ref="markdown-output"></div>
	
</div>