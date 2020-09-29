<template>
<div class="CalculationElement">
    <div class="Name-wrapper">
        <span class="Name">
            {{
          this.calculators.find((elm) => elm.id === data.calculatorId).name
        }}</span>
        <span class="Date">{{ data.date }}</span>
    </div>
    <div class="Result-wrapper">
        <div class="Result">{{ data.result }}</div>
        <div class="Formula">
            <div v-for="fml in data.formulas" :key="fml.id">
                <span v-if="fml.type != 'operator'" class="Digit">{{
            fml.value
          }}</span>
                <span v-if="fml.type == 'operator'" class="Operator">{{
            fml.symbol
          }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Calculators from "../data/calculators";

export default {
    name: "CalculationHistory",
    props: {
        data: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            calculators: Calculators,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/design/CalculationElement.scss";
</style>
