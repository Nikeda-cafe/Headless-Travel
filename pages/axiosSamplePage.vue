<template>
  <div>
      <h1 class="text-center mb-3">記事を取得</h1>
      <p>{{res.body}}</p>
      <img :src="res.image.url" alt="">
      <!-- <li>{{menuItems[0].body}}</li> -->
      <div class="input-group w-3/4 m-auto">
        <div class="input-group-prepend">
          <span class="input-group-text">MenuId</span>
        </div>
        <input type="text" class="form-control" name="menu_id" v-model="menuId">
      </div>
      <div class=" text-center">
        <button
          type="button"
          class="border-none px-2 py-1 rounded-md bg-green-200 m-auto mt-4 mb-4"
          @click="getAxios()"
        >
          axios
        </button>
      </div>

  </div>
</template>

<script>
// import axios from 'axios'
export default {
  // data: function(){
  //   return {
  //     res:'',
  //     id: this.$route.params.id
  //   }
  // },
  // methods: {
  //   async getAxios(){
  //     const res = await this.$axios.$get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     console.log(res);
  //     this.res = res.time.updated;
  //   }
  // }

  data: function(){
    return {
      res:{
        body:'',
        image:{
          url:''
        }
      },
      id: this.$route.params.id,
      menuId:'',
      src: ''
    }
  },
  methods: {
    getAxios(){
      this.$router.push({
        path: "menu-detail",
        query: { menuId: this.menuId }
      });
    }
  },

  async asyncData({ query,$config,$axios }){
    const result = await $axios.$get(
      `${$config.apiUrl}/menu/`,
      {
        headers: {'X-API-KEY': '691867be-4a35-4006-90c1-9b0856070900'},
      }
    )
    return console.log(result)

  }
}
</script>
