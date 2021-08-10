<div x-data="" x-init="
$refs['markdown-output'].innerHTML = markdown.render($refs.markdown.innerHTML)
">
	<div class="hidden" x-ref="markdown">{{$slot}}</div>
	<div {{$attributes}} x-ref="markdown-output"></div>
</div>