<template>
<div class="CalculationResults">
    <div class="CalculationResult-wrapper">
        <CalculationElement v-for="result in results" :key="result.id" :data="result"></CalculationElement>
    </div>

    <div class="CalculationResults-button">
        <button class="Clear-button" @click="clearButtonClick">Clear</button>
    </div>
</div>
</template>

<script>
import CalculationElement from "./CalculationElement.vue";

export default {
    name: "CalculationResults",
    components: {
        CalculationElement,
    },
    props: {
        results: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        clearButtonClick() {
            this.$emit("clear");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/design/CalculationResults.scss";
</style>
