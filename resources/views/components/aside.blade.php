<aside
    x-show="asideMenu===true"
    @click.outside="asideMenu=false"
    x-transition:enter="transition ease-in-out duration-300"
    x-transition:enter-start="transform -translate-x-full"
    x-transition:enter-end="transform translate-x-0"
    x-transition:leave="transition ease-in-out duration-300"
    x-transition:leave-start="transform translate-x-0"
    x-transition:leave-end="transform -translate-x-full"
    class="fixed top-0 left-0 w-full sm:w-60 bg-black min-h-screen text-white">
    <div class="space-y-1 py-2 text-sm">
        <div class="relative">
            <i
                @click="asideMenu=false"
                class="absolute top-0 right-4 text-lg  text-gray-500 hover:text-white transition duration-300 bi bi-x-circle cursor-pointer"></i>
            <h3 class="text-lg mt-5 px-4">ScolCours</h3>
        </div>

        <a href="{{route('home')}}"
           class="block
            transition duration-300
            hover:translate-x-2
            px-4 py-1">accueil</a>
        <hr/>
        @foreach(cache()->get('themes') as $theme)
            <a href="{{route('articles.index', $theme->slug)}}"
               class="block
            transition duration-300
            hover:translate-x-2
            px-4 py-1">{{$theme->name}}</a>
        @endforeach
        <hr/>
    </div>
</aside>
