<template>
  <div>
    <v-btn
        elevation="2"
        outlined
        class="m-4"
    >button</v-btn>
    <ul>
      <li v-for="item in this.viewLists" :key="item.id">
        <a :href="item.url" target="_blank">
            <div>{{ item.title }}</div>
        </a>
      </li>
    </ul>
   <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
            <v-container class="max-width">
                <v-pagination
                    v-model="page"
                    class="my-4"
                    :length="length"
                    @input = "pageChange"
                ></v-pagination>
            </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      page: 1,
      length:0,
      lists:[],
      viewLists: [],
      pageSize:10
    }
  },
  mounted: function(){
    this.length = Math.ceil(this.lists.length/this.pageSize);
    this.viewLists = this.lists.slice(0,this.pageSize);
  },
  async asyncData({ app }) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:javascript&per_page=100')

    return {
      lists : items
    }
  },
  methods:{
    pageChange( pageNumber ){
      this.viewLists = this.lists.slice(this.pageSize * (pageNumber - 1),this.pageSize * (pageNumber))
    }
  }
}
</script>

<style lang="scss">
   .theme--light.v-pagination .v-pagination__item--active{
    color: #333
   }
</style>

