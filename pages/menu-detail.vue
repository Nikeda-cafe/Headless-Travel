<template>
  <div>
    <p>{{body}}</p>
    <img :src="src" alt="">
    <p @click="showId()">{{id}}</p>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      id: 'click'
    }
  },
  methods: {
    showId(){
      this.id = this.$route.query.menuId
    }
  },
  async asyncData({ query,$config,$axios }){
    const result = await $axios.$get(
      `${$config.apiUrl}/menu/${query.menuId}`,
      {
        headers: {'X-API-KEY': '691867be-4a35-4006-90c1-9b0856070900'},
      }
    )
    return {
      body:result.body,
      src:result.image.url
    }
  }
}
</script>
