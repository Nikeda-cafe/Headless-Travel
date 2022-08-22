<template>
  <div class="lg:w-3/4 m-auto">
      <h1 class="text-center mb-3">記事を取得</h1>
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

      <!-- news card -->
      <div class="post__list text-center">
        <ul class="flex justify-between flex-wrap w-10/12 m-auto">
          <li v-for="(item,index) in posts.contents" :key="index" class="mb-4">
            <div class="overflow-hidden shadow-lg rounded-lg h-90 lg:w-72 md:w-80 cursor-pointer m-auto">
                <a href="#" class="w-full block h-full">
                    <img alt="blog photo" :src="item.thumbnail.url" class="max-h-40 w-full object-cover"/>
                    <div class="bg-white dark:bg-gray-800 w-full p-4">
                        <p class="text-indigo-500 text-md font-medium">
                        </p>
                        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            {{item.title}}
                        </p>
                        <p class="text-gray-400 dark:text-gray-300 font-light text-md" v-html="trimPostBody(item.body)">

                        </p>
                    </div>
                </a>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {

  data: function(){
    return {
      // posts: {},
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
    },
    trimPostBody(body){
      const trimBody = body.slice(0,50) + '...';
      return trimBody
    }
  },

  async asyncData({ query,$config,$axios }){
    const result = await $axios.$get(
      `${$config.apiUrl}/news/`,
      {
        headers: {'X-API-KEY': '691867be-4a35-4006-90c1-9b0856070900'},
      }
    )
    return {
      posts : result
    }

  }
}
</script>

<style lang="scss">

</style>

