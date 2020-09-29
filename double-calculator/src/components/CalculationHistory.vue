<template>
<div class="CalculationHistory">
    <CalculationSearch></CalculationSearch>
    <CalculationResults :results="results" @clear="clear"></CalculationResults>
</div>
</template>

<script>
import CalculationSearch from "../components/CalculationSearch.vue";
import CalculationResults from "../components/CalculationResults.vue";
export default {
    name: "CalculationHistory",
    components: {
        CalculationSearch,
        CalculationResults,
    },
    props: {
        results: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        clear() {
            this.$emit("clear");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/design/CalculationHistory.scss";
</style>
