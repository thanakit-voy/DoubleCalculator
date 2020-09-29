<template>
<button class="CalculatorKey" @click="btnClick">
    {{ button.symbol }}
</button>
</template>

<script>
export default {
    name: "CalculatorKeyboard",
    props: {
        button: {
            type: Object,
            default: () => {},
        },
    },
    methods: {
        btnClick() {
            this.$emit("clicked", this.$props.button);
        },
    },
};
</script>

<style lang="scss">
@import "@/design/CalculatorKey.scss";
</style>
