<div x-data="algebre_ensembles_venn()" x-init="generate()">
    <p>Déterminer <span x-katex="question"></span></p>
    <x-math.venn3 name="exemple"></x-math.venn3>
    <button
        @click="generate()" class="btn disabled:cursor-not-allowed"
        :class="{'btn-success':correct}"
        :disabled="correct===false"
    >Suivant
    </button>
</div>

<div class="mt-10" x-data="algebre_ensembles_numerique()" x-init="generate()">
    <div>Dans un ensemble
        <span x-katex="'E=\\lbrace 0;1;2;3;4;5;6;7;8;9\\rbrace'"></span>, on a les sous-ensembles:
        <div>
            <template x-for="(item, index) in question.items" :key="'ensemble-item-' + index">
                <p x-katex="item"></p>
            </template>
        </div>
    </div>
    <div>
        Déterminer <span x-katex="question.tex"></span>
    </div>
    <input class="input flex-1 text-xl font-thin"
           @input="validate($event.target.value)"
           x-model="answer"
           @keyup.enter="generate()"
    />
    <button
        @click="generate()" class="btn disabled:cursor-not-allowed"
        :class="{'btn-success':correct}"
        :disabled="correct===false"
    >Suivant
    </button>
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
        return new Pi.Logicalset(setRaw)
    }

    function algebre_ensembles_venn() {
        return {
            question: '',
            answer: '',
            correct: true,
            generate() {
                const V = genererUnEnsemble()

                // Create the question and the answer
                this.question = V.tex
                this.answer = V.vennABC()
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
                const V = genererUnEnsemble(4)
                const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                const A = Pi.Numeric.randomArray(numArray, Pi.Numeric.randomInt(3, 8)).sort()
                const B = Pi.Numeric.randomArray(numArray, Pi.Numeric.randomInt(3, 8)).sort()
                const C = Pi.Numeric.randomArray(numArray, Pi.Numeric.randomInt(3, 8)).sort()
                const items = [
                    `A=\\lbrace ${A} \\rbrace`,
                    `B=\\lbrace ${B} \\rbrace`,
                    `C=\\lbrace ${C} \\rbrace`
                ]



                // Create the question and the answer
                this.question = {tex: V.tex, items}
                this.expectedAnswer = V.evaluate(A,B,C).join(',')

                if(this.expectedAnswer===''){}

                this.correct = false
            },
            validate(value) {
                this.correct =  this.expectedAnswer===this.answer.replace('/\s/g', '').split(',').map(x=>+x).sort().join(',')
            }
        }
    }
</script>
