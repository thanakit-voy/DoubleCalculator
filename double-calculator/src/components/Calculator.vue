<template>
  <div class="Calculator">
    <h3>Calculator A</h3>
    <div class="Calculator-cover">
      <CalculatorDisplay></CalculatorDisplay>
      <CalculatorKeyboard></CalculatorKeyboard>
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
};
</script>

<style lang="scss">
@import "@/design/Calculator.scss";
</style>
