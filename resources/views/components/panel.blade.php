@props(['header','button'])
<div {{ $attributes(['class' => 'bg-white border border-gray-200 p-6 rounded-xl']) }}>
    @if(isset($header))
        <div class="-mt-4 flex justify-between">
            <h3 class="h3 flex-1">
                {{$header}}
            </h3>

            @if(isset($button))
                {{-- TODO: autmatic button display for various possibilites ?--}}
                <div class="flex-0">
                    {{$button}}
                </div>
            @endif


        </div>
        <hr class="text-gray-500 mt-2 mb-4"/>
        @endif
	{{ $slot }}
</div>
