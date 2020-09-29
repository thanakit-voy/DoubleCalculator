<template>
  <div v-if="calculator" class="Calculator">
    <h3>{{ calculator.name }}</h3>
    <div class="Calculator-cover">
      <CalculatorDisplay
        v-if="result"
        :formulas="formulas"
        :result="result"
      ></CalculatorDisplay>
      <CalculatorDisplay
        v-if="!result"
        :formulas="formulas"
        result="Calculating..."
      ></CalculatorDisplay>
      <CalculatorKeyboard
        @clicked="btnClick"
        @onResult="getResult"
        :result="result"
      ></CalculatorKeyboard>
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
    calculator: {
      type: Object,
      default: () => {},
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
      let now = new Date();
      let calculation = {
        calculatorId: this.$props.calculator.id,
        expression: this.expression,
        result: this.result,
        date: `${now.getDate()}/${now.getMonth()}/${now.getFullYear() +
          543} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
      };
      this.$emit("onResult", calculation);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/design/Calculator.scss";
</style>
