<template lang="">
    <li class="mb-8 news__nav--li">
        <div class="overflow-hidden shadow-lg rounded-lg h-90 cursor-pointer m-auto">
            <nuxt-link :to="`/news/${id}/`" class="w-full block h-full">
                <img alt="blog photo" :src="url" class="max-h-40 w-full object-cover"/>
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2 hover:text-gray-500">
                        {{title}}
                    </p>
                    <p v-if="description" class="text-gray-400 dark:text-gray-300 font-light text-md" v-html="trimPostBody(description)">
                    </p>
                    <div class="flex flex-wrap justify-starts items-center mt-4">
                        <TagIcon :bgColor="`bg-blue-100`">{{area.name}}</TagIcon>
                        <TagIcon v-for="(item,index) in jenre">{{item.jenre_name}}</TagIcon>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </li>
</template>

<script>
import TagIcon from '/components/TagIcon.vue';
export default {
  name: 'NewsList',
  props: {
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    area: {
        type: Object,
        required: true
    },
    jenre: {
        type: Array,
    }
  },
  methods: {
    trimPostBody(body){
      const trimBody = body.slice(0,50) + '...';
      return trimBody
    }
  },
  components: { TagIcon }
}

</script>

<style lang="scss">
    @media screen and (min-width: 640px){
        .news__nav--li{
            width:30%;
        }
    }
</style>
