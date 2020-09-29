<template>
<div class="CalculationHistory">
    <CalculationSearch @onInput="resultFilter" @onOption="optionFilter"></CalculationSearch>
    <CalculationResults :results="filteredResults" @clear="clear"></CalculationResults>
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
    data() {
        return {
            filteredResults: [],
            options: 0,
            search: "",
        };
    },
    props: {
        results: {
            type: Array,
            default: () => [],
        },
    },
    // created() {
    //     this.filteredResults = this.$props.results;
    // },
    watch: {
        results(newValue) {
            this.filteredResults = newValue;
            this.filter();
        },
    },
    methods: {
        clear() {
            this.$emit("clear");
        },
        resultFilter(value) {
            this.search = value;
            this.filter();
        },
        optionFilter(value) {
            this.options = value;
            this.filter();
        },
        filter() {
            if (this.options != 0) {
                this.filteredResults = this.$props.results.filter((elm) => {
                    return elm.calculatorId == this.options;
                });
            } else {
                this.filteredResults = this.$props.results;
            }

            if (this.search) {
                this.filteredResults = this.filteredResults.filter((elm) => {
                    return (
                        elm.result.includes(this.search) || elm.date.startsWith(this.search)
                    );
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/design/CalculationHistory.scss";
</style>
