<template>
    <div>
        <LayoutHeader />

        <nuxt />
    </div>

</template>

<script>
import NuxtLogo from "../components/NuxtLogo.vue";
import LayoutHeader from "../components/LayoutHeader.vue";
export default {
  components: {
    NuxtLogo,
    LayoutHeader
},

}
</script>

<style lang="scss" scoped>
.d{
  width: 34%;
  margin: 0 auto;
}
</style>
