<div x-data="algebre_factorisation()" x-init="generate()">
    <div class="flex">
        <div x-katex="question.tex + '='"></div>
        <input class="input flex-1 text-xl font-thin"
                      @input="validate($event.target.value)"
                      x-model="answer"
                      @keyup.enter="generate()"
        />
            <button
                @click="generate()" class="btn disabled:cursor-not-allowed"
                :class="{'btn-success':correct}"
                :disabled="correct===false"
            >Suivant</button>
    </div>

</div>

<script>
    function algebre_factorisation() {
        return {
            question: '',
            answer: '',
            correct: true,
            generate() {
                if(!this.correct){return}

                let P = new Pi.Polynom().rndSimple(1, true),
                    Q = new Pi.Polynom().rndSimple(1, true)

                this.question = P.clone().multiply(Q)
                this.answer = ''
                this.correct = false
            },
            validate(value) {
                this.correct = this.question.isFactorized(value)
            }
        }
    }
</script>
