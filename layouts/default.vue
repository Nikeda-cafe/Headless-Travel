<template>
  <div>
    <div class="mt-5 mb-5 d text-center">
      <!-- <nuxt-logo></nuxt-logo> -->
    </div>
    <nuxt />
  </div>
</template>

<script>
import NuxtLogo from "../components/NuxtLogo.vue";
export default {
  components: {
    NuxtLogo
  },

}
</script>

<style lang="scss" scoped>
.d{
  width: 34%;
  margin: 0 auto;
}
</style>
