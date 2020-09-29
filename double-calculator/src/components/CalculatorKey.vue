<template>
<button class="CalculatorKey">
    {{ label }}
</button>
</template>

<script>
export default {
    name: "CalculatorKeyboard",
    props: {
        label: {
            type: String,
            default: "",
        },
        value: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss">
@import "@/design/CalculatorKey.scss";
</style>
