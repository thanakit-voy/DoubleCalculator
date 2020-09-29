<template>
  <div class="Container">
    <Calculator class="Calculator-wrapper"></Calculator>
    <Calculator class="Calculator-wrapper"></Calculator>
  </div>
</template>

<script>
import Calculator from "../components/Calculator";

export default {
  name: "Calculators",
  components: {
    Calculator,
  },
};
</script>
