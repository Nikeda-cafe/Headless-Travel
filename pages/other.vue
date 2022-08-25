<template>
  <div>
    <h1 class="text-right">{{title}}</h1>
    <p class="text-green-400">{{message}}</p>
    <hr>
    <router-link to="/">top</router-link>
    <div id="flag" style="font-size:180px">
      <flag iso="gb" />
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      title: 'other',
      message: 'other page'
    }
  }
}
</script>

<style lang="sass" scoped>
  #flag
    text-align: center
</style>

