<template>
  <section>
    <button @click="returnNow()">start</button>
    <h1>{{title}}</h1>
    <p>{{now}}</p>
    <hr>
    <router-link to="/other">go to ohter</router-link>
    <router-link to="/axiosSamplePage">go to axios</router-link>
  </section>
  <!-- <Tutorial /> -->
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => {
    return {
      title: 'sssss',
      now: '',
      val:''
    }
  },
  methods: {
    returnNow: function(){
      setInterval(this.timer,1000)
    },
    timer: function(){
      this.val++;
      // console.log(this.val);
      this.now = this.val
    }
  }
}
</script>


<style lang="scss" scoped >
  section{
    text-align: center;
  }
</style>
