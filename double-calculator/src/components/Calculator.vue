<template>
<div class="Calculator">
    <h3>{{ name }}</h3>
    <div class="Calculator-cover">
        <CalculatorDisplay v-if="result" :formulas="formulas" :result="result"></CalculatorDisplay>
        <CalculatorDisplay v-if="!result" :formulas="formulas" result="Calculating..."></CalculatorDisplay>
        <CalculatorKeyboard @clicked="btnClick" @onResult="getResult" :result="result"></CalculatorKeyboard>
    </div>
</div>
</template>

<script>
import CalculatorKeyboard from "../components/CalculatorKeyboard.vue";
import CalculatorDisplay from "../components/CalculatorDisplay.vue";
import * as axios from "axios";

export default {
    name: "Calculator",
    components: {
        CalculatorKeyboard,
        CalculatorDisplay,
    },
    props: {
        name: {
            type: String,
            default: "Calculator",
        },
    },
    data() {
        return {
            formulas: [],
            expression: "",
            result: "0",
        };
    },
    methods: {
        btnClick(data) {
            this.formulas = data.formulas;
            this.expression = data.expression;
            this.result = "0";
        },
        async getResult(data) {
            this.result = null;
            let result = await axios.get(
                "http://api.mathjs.org/v4/?expr=" + encodeURIComponent(data.expression)
            );
            this.result = result.data.toString();
        },
    },
};
</script>

<style lang="scss">
@import "@/design/Calculator.scss";
</style>
