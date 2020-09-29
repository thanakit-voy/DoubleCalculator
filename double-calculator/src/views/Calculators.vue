<template>
<div class="Container">
    <Calculator name="Calculator A" class="Calculator-wrapper"></Calculator>
    <Calculator name="Calculator B" class="Calculator-wrapper"></Calculator>
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
