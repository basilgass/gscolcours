<footer class="bg-gray-700 text-white
            fixed bottom-0 left-0
            w-full h-16 overflow-hidden
            transition transition-all duration-500"
        x-data="{footerBig:false}"
        :class="{'h-10':!footerBig, 'h-64':footerBig}"
>
    <div>
        <div class="absolute right-5 top-2 text-gray-500
        hover:text-gray-200 hover:font-semibold
        transition-all duration-300 cursor-pointer z-50"
             :class="{'rotate-180':footerBig}"
             @click="footerBig=!footerBig">
            <i class="bi bi-chevron-up text-xl"></i>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 py-5 overflow-hidden transition transition-all duration-1000"
             :class="{'py-2':!footerBig, 'py-5':footerBig}">
            <div class="px-5">
                <h3 class="text-lg mb-3">ScolCours</h3>
                <p>Scolcours est né de mon envie d'aider les élèves à aborder la dure vie des mathématiques.</p>
            </div>
            <div>
                <h3 class="text-lg mb-3 ">Contenu</h3>
                <p>WIP</p>
            </div>
            <div>
                <h3 class="text-lg mb-3 ">Contact</h3>
                <p>par email par exemple</p>

                <h3 class="text-lg mb-3 mt-5">License</h3>
                <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                    <img alt="Contrat Creative Commons" style="border-width:0"
                         src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"/>
                </a>
                <br/>Ce(tte) création est mise à disposition selon les termes de la <a rel="license"
                                                                                       href="http://creativecommons.org/licenses/by-sa/4.0/">Licence
                    Creative Commons Paternité - Partage des Conditions Initiales à l&#39;Identique 4.0
                    International</a>.
            </div>
        </div>
    </div>
</footer>
