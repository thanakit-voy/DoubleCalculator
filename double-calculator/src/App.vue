<template>
<div id="app">
    <HeadBar></HeadBar>
    <router-view></router-view>
</div>
</template>

<script>
import HeadBar from "./components/HeadBar.vue";

export default {
    name: "App",
    components: {
        HeadBar,
    },
};
</script>

<style lang="scss">
@import "@/design/index.scss";
</style>
