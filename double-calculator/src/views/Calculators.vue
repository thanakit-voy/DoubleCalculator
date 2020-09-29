<template>
<div>
    <div v-if="ready" class="Container">
        <Calculator v-for="calculator in calculators" :key="calculator.id" :calculator="calculator" @onResult="addCalculation" class="Calculator-wrapper"></Calculator>
        <CalculationHistory :results="results" @clear="clearCalculation"></CalculationHistory>
    </div>
    <div v-if="!ready">Loading database...</div>
</div>
</template>

<script>
import Calculator from "../components/Calculator";
import CalculationHistory from "../components/CalculationHistory";
import calculators from "../data/calculators";
import Keys from "../data/keys";
import {
    calculations
} from "../shared/calculation-mixins";

export default {
    name: "Calculators",
    components: {
        Calculator,
        CalculationHistory,
    },
    mixins: [calculations],
    data() {
        return {
            calculators: calculators,
            keys: Keys,
            db: null,
            ready: false,
            results: [],
        };
    },
    async created() {
        this.db = await this.openDB();
        this.ready = true;
        await this.loadCalculation();
    },
    methods: {
        async addCalculation(calculation) {
            await this.createCalculation(calculation);
            await this.loadCalculation();
        },
        async loadCalculation() {
            let rawResult = await this.getCalculation();
            rawResult.forEach((result, index) => {
                let formulas = [];
                for (let i = 0; i < result.expression.length; i++) {
                    let formula = {
                        id: `${index}-${i}`,
                    };
                    if (
                        result.expression[i] === "." ||
                        Number.isInteger(Number(result.expression[i]))
                    ) {
                        formula.type = "digit";
                        if (formula.value) {
                            formula.value += result.expression[i];
                        } else {
                            formula.value = result.expression[i];
                        }
                    } else {
                        formula = this.keys.find(
                            (elm) => elm.value === result.expression[i]
                        );
                    }
                    formulas.push(formula);
                }
                rawResult[index].formulas = formulas;
            });
            this.results = rawResult.reverse();
        },
        async clearCalculation() {
            await Promise.all(
                this.results.map((elm) => this.deleteCalculation(elm.id))
            );
            await this.loadCalculation();
        },
    },
};
</script>
