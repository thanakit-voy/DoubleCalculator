<template>
<div class="HeadBar">
    {{ title }}
</div>
</template>

<script>
export default {
    name: "HeadBar",
    data() {
        return {
            title: "Double Calculator",
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/design/HeadBar.scss";
</style>
