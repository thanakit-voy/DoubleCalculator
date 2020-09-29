<template>
  <div class="Container">
    <Calculator
      v-for="calculator in calculators"
      :key="calculator.id"
      :calculator="calculator"
      class="Calculator-wrapper"
    ></Calculator>
    <Calculator name="Calculator B" class="Calculator-wrapper"></Calculator>
  </div>
</template>

<script>
import Calculator from "../components/Calculator";
import calculators from "../data/calculators";

export default {
  name: "Calculators",
  components: {
    Calculator,
  },
  data() {
    return {
      calculators: calculators,
    };
  },
};
</script>
