<template>
<div class="CalculatorDisplay">
    <div class="Result">{{ result }}</div>
    <div v-if="formulas.length > 0" class="Formula">
        <div v-for="item in formulas" :key="item.id">
            <span v-if="item.type != 'operator'" class="Digit">{{
          item.value
        }}</span>
            <span v-if="item.type == 'operator'" class="Operator">{{
          item.symbol
        }}</span>
        </div>
    </div>
    <div v-if="formulas.length == 0" class="Formula">
        <span class="digit">
            0
        </span>
    </div>
</div>
</template>

<script>
export default {
    name: "CalculatorDisplay",
    props: {
        formulas: {
            type: Array,
            default: () => [],
        },
        result: {
            type: String,
            default: "0",
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/design/CalculatorDisplay.scss";
</style>
