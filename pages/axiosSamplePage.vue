<template>
  <div>
      <p>{{res.body}}</p>
      <img :src="res.image.url" alt="">
      <!-- <li>{{menuItems[0].body}}</li> -->
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">MenuId</span>
        </div>
        <input type="text" class="form-control" name="menu_id" v-model="menuId">
      </div>
      <button style="margin-top:20px" type="button" class="btn btn-outline-success" @click="getAxios()">axios</button>

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
  }

  // async asyncData({ $config }) {
  //   const menu = await axios.get(
  //     `${$config.apiUrl}/menu?limit=3&filters=flag[equals]true`,
  //     {
  //       headers: {'X-API-KEY': $config.apiKey},
  //     }
  //   )
  //   console.log(menu.data.contents);
  //   return {
  //     menuItems: menu.data.contents,
  //   }
  // },
}
</script>
