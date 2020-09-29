<template>
<div class="CalculationSearch">
    Results
    <input style="flex:1" type="text" placeholder="Search by result, date" />
    <select name="searchOptions" id="searchOptions">
        <option value="0">All</option>
        <option v-for="item in calculators" :value="item.id" :key="item.id">{{
        item.name
      }}</option>
    </select>
</div>
</template>

<script>
import Calculators from "../data/calculators";

export default {
    name: "CalculationSearch",
    data() {
        return {
            calculators: Calculators
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/design/CalculationSearch.scss";
</style>
