<div x-data="algebre_ensembles()" x-init="generate()">
    <p>Déterminer <span x-katex="question"></span></p>
    <x-math.venn3 name="exemple"></x-math.venn3>
    <button
        @click="generate()" class="btn disabled:cursor-not-allowed"
        :class="{'btn-success':correct}"
        :disabled="correct===false"
    >Suivant
    </button>
</div>

<script>
    function algebre_ensembles() {
        return {
            question: '',
            answer: '',
            correct: true,
            generate() {
                // Must generate items
                let data = [], n = 10, vSet = ['A', 'B', 'C'], op = ['|', '&', '-']

                while(n>0){
                    let rnd = Pi.Numeric.randomArray(vSet, 2)

                    // Check if the subitem is not too big !
                    if(rnd[0].length>6 || rnd[1].length>6){continue}
                    rnd[0] = (Pi.Numeric.randomBool(0.1)?'!':'')+rnd[0]
                    rnd[1] = (Pi.Numeric.randomBool(0.1)?'!':'')+rnd[1]

                    // Do not allow double negate
                    if(rnd[0].split('!').length>2 || rnd[1].split('!').length>2){continue;}

                    // Check if the new set is empty or not
                    const tmpSet = `${rnd[0]}${Pi.Numeric.randomItem(op)}${rnd[1]}`
                    if(new Pi.Logicalset(tmpSet).vennABC().length===0){continue}

                    // All check passes!
                    vSet.push(`(${tmpSet})`)
                    n--
                }

                // Make each couple unique.
                vSet = Pi.Numeric.shuffleArray([...new Set(vSet)])
                let setRaw = vSet[0] + Pi.Numeric.randomItem(op) + vSet[1]
                if(Pi.Numeric.randomBool(0.1)){setRaw += Pi.Numeric.randomItem(op) + vSet[2]}

                // Crate a Logical set
                let V = new Pi.Logicalset(setRaw)

                // Create the question and the answer
                this.question = V.tex
                this.answer = V.vennABC()
            },
            validate(value) {
                this.correct = false;
            }
        }
    }
</script>
