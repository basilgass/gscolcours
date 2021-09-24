<div x-data="algebre_ensembles_venn()" x-init="generate()">
    <x-panel>
        <div>
            Déterminer <span class="ml-4" x-katex.inline="question"></span>
            <x-form.input name="donnée" x-model="userQuestion" @input="generate()">Hello world</x-form.input>

        </div>
        <x-math.venn3 name="exemple"></x-math.venn3>
        <button
            @click="generate()" class="btn disabled:cursor-not-allowed"
            :class="{'btn-success':correct}"
            :disabled="correct===false"
        >Valider
        </button>
    </x-panel>
</div>

<div class="mt-10" x-data="algebre_ensembles_numerique()" x-init="generate()">
    <x-panel>
        <div>Dans un ensemble
            <span class="mx-2" x-katex.inline="'E=\\lbrace 0;1;2;3;4;5;6;7;8;9\\rbrace'"></span>, on a les sous-ensembles:
            <div class="grid grid-cols-1 md:grid-cols-3 my-5">
                <template x-for="(item, index) in question.items" :key="'ensemble-item-' + index">
                    <span x-katex.inline="item"></span>
                </template>
            </div>
        </div>
        <div>
            Déterminer <span class="ml-4" x-katex.inline="question.tex"></span>
        </div>

        <div class="mt-4">
            <input class="input flex-1 text-xl font-thin"
                  @input="validate($event.target.value)"
                  x-model="answer"
                   x-ref="inputAnswer"
                  @keyup.enter="generate()"
            />
            <button
                @click="generate()" class="btn disabled:cursor-not-allowed"
                :class="{'btn-success':correct}"
                :disabled="correct===false"
            >Suivant
            </button>
        </div>
    </x-panel>
</div>
<script>
    function genererUnEnsemble(deep=6) {
        // Must generate items
        let data = [], n = 10, vSet = ['A', 'B', 'C'], op = ['|', '&', '-']

        while (n > 0) {
            let rnd = Pi.Numeric.randomArray(vSet, 2)

            // Check if the subitem is not too big !
            if (rnd[0].length > deep || rnd[1].length > deep) {continue}

            // Add a negative system
            rnd[0] = (Pi.Numeric.randomBool(0.1) ? '!' : '') + rnd[0]
            rnd[1] = (Pi.Numeric.randomBool(0.1) ? '!' : '') + rnd[1]

            // Do not allow double negate
            if (rnd[0].split('!').length > 2 || rnd[1].split('!').length > 2) {
                continue;
            }

            // Check if the new set is empty or not
            const tmpSet = `${rnd[0]}${Pi.Numeric.randomItem(op)}${rnd[1]}`
            if (new Pi.Logicalset(tmpSet).vennABC().length === 0) {
                continue
            }

            // All check passes!
            vSet.push(`(${tmpSet})`)
            n--
        }

        // Make each couple unique.
        vSet = Pi.Numeric.shuffleArray([...new Set(vSet)])
        let setRaw = vSet[0] + Pi.Numeric.randomItem(op) + vSet[1]
        if (Pi.Numeric.randomBool(0.1)) {
            setRaw += Pi.Numeric.randomItem(op) + vSet[2]
        }

        // Crate a Logical set
        return setRaw
    }

    function algebre_ensembles_venn() {
        return {
            userQuestion: '',
            question: '',
            answer: '',
            correct: true,
            generate() {
                let V
                try {
                    V = new Pi.Logicalset(this.userQuestion)
                    // Create the question and the answer
                    this.question = V.tex
                    this.answer = V.vennABC()
                }catch(e){
                    const raw = genererUnEnsemble()
                    this.userQuestion = raw
                    V = new Pi.Logicalset(raw)
                    // Create the question and the answer
                    this.question = V.tex
                    this.answer = V.vennABC()
                }
            },
            validate(value) {
                this.correct = false;
            }
        }
    }

    function algebre_ensembles_numerique() {
        return {
            question: '',
            answer: '',
            expectedAnswer: '',
            correct: true,
            generate() {
                const V = new Pi.Logicalset(genererUnEnsemble(4))

                const E = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                const A = Pi.Numeric.randomArray(E, Pi.Numeric.randomInt(2, 5)).sort()
                const B = Pi.Numeric.randomArray(E, Pi.Numeric.randomInt(2, 5)).sort()
                const C = Pi.Numeric.randomArray(E, Pi.Numeric.randomInt(2, 5)).sort()
                const items = [
                    `A=\\lbrace ${A} \\rbrace`,
                    `B=\\lbrace ${B} \\rbrace`,
                    `C=\\lbrace ${C} \\rbrace`
                ]

                // Create the question and the answer
                this.question = {tex: V.tex, items}
                this.expectedAnswer = V.evaluate({A, B, C}, E).join(',')

                this.correct = false
                this.$refs.inputAnswer.focus()
                this.answer=''
                if(this.expectedAnswer===''){
                    this.generate()
                }
            },
            validate(value) {
                this.correct =  this.expectedAnswer===this.answer.replace('/\s/g', '').split(',').map(x=>+x).sort().join(',')
            }
        }
    }
</script>
