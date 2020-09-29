<template>
<div class="Calculator">
    <h3>{{ name }}</h3>
    <div class="Calculator-cover">
        <CalculatorDisplay :formulas="formulas" :result="result"></CalculatorDisplay>
        <CalculatorKeyboard @clicked="btnClick" @onResult="getResult"></CalculatorKeyboard>
    </div>
</div>
</template>

<script>
import CalculatorKeyboard from "../components/CalculatorKeyboard.vue";
import CalculatorDisplay from "../components/CalculatorDisplay.vue";

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
        },
        getResult(data) {
            console.log("getResult", data);
        },
    },
};
</script>

<style lang="scss">
@import "@/design/Calculator.scss";
</style>
