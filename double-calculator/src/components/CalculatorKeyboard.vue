<template>
<div class="CalculatorKeyboard">
    <CalculatorKey label="C" value="C"></CalculatorKey>
    <CalculatorKey label="÷" value="/"></CalculatorKey>
    <CalculatorKey label="×" value="*"></CalculatorKey>
    <CalculatorKey label="-" value="-"></CalculatorKey>
    <CalculatorKey label="7" value="7"></CalculatorKey>
    <CalculatorKey label="8" value="8"></CalculatorKey>
    <CalculatorKey label="9" value="9"></CalculatorKey>
    <CalculatorKey label="+" value="+" class="row-2"></CalculatorKey>
    <CalculatorKey label="4" value="4"></CalculatorKey>
    <CalculatorKey label="5" value="5"></CalculatorKey>
    <CalculatorKey label="6" value="6"></CalculatorKey>
    <CalculatorKey label="1" value="1"></CalculatorKey>
    <CalculatorKey label="2" value="2"></CalculatorKey>
    <CalculatorKey label="3" value="3"></CalculatorKey>
    <CalculatorKey label="=" value="=" class="row-2"> </CalculatorKey>
    <CalculatorKey label="0" value="0" class="col-2"></CalculatorKey>
    <CalculatorKey label="." value="."></CalculatorKey>
</div>
</template>

<script>
import CalculatorKey from "../components/CalculatorKey.vue";

export default {
    name: "CalculatorKeyboard",
    components: {
        CalculatorKey,
    },
};
</script>

<style lang="scss">
@import "@/design/CalculatorKeyboard.scss";
</style>
