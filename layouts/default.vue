<template>
    <div>
        <LayoutHeader />
        <nuxt />
        <LayoutFooter />
    </div>

</template>

<script>
import NuxtLogo from "../components/NuxtLogo.vue";
import LayoutHeader from "../components/LayoutHeader.vue";
import LayoutFooter from "../components/LayoutFooter.vue";
export default {
    components: {
        NuxtLogo,
        LayoutHeader,
        LayoutFooter
    },
}
</script>

<style lang="scss" scoped>
.d{
  width: 34%;
  margin: 0 auto;
}
</style>
