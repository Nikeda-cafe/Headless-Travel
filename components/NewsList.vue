<template lang="">
    <li class="mb-8 news__nav--li md:mb-16">
        <div class="overflow-hidden shadow-lg rounded-lg h-90 cursor-pointer m-auto">
            <nuxt-link :to="`/news/${id}/`" class="w-full block h-full">
                <picture>
                    <source :srcset="src" class="max-h-40 w-full object-cover" :class="imgHeight" type="image/webp" />
                    <img :src="url" class="max-h-40 w-full object-cover" :class="imgHeight" />
                </picture>
                <div class="bg-white dark:bg-gray-800 w-full p-3">
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2 hover:text-gray-500 md:h-20" :class="titleHeight" >
                        {{title}}
                    </p>
                    <p v-if="description" class="text-gray-400 dark:text-gray-300 font-light text-md md:h-20" v-html="trimPostBody(description)">
                    </p>
                    <div class="mt-4 text-left flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" height="18px" viewBox="0 0 24 24" width="18px" fill="gray"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        <span class="text-md text-gray-500" v-if="publishedAt">{{$dateFns.format(new Date(publishedAt), 'yyyy/MM/dd')}}</span>
                    </div>
                    <div class="flex flex-wrap justify-starts items-center mt-0">
                        <TagIcon bgBlueColor="true" :textSizeXsm="textSizeXsm">{{area.name}}</TagIcon>
                        <TagIcon v-for="(item,index) in genre" :textSizeXsm="textSizeXsm">{{item.genre_name}}</TagIcon>
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
        genre: {
            type: Array,
        },
        publishedAt: {
            type: String,
        },
        imgHeight: {
            type: String
        },
        titleHeight: {
            type: String
        },
        textSizeXsm: {
            type: String
        }
    },
    data: function(){
        return{
            src: `${this.url}?fm=webp`
        }
    },
    methods: {
        trimPostBody(body){
            const trimBody = body.slice(0,50) + '...';
            return trimBody
        },
    },
    components: { TagIcon }
}

</script>

<style lang="scss" scoped>

</style>
