<template lang="">
    <li class="mb-8 news__nav--li">
        <div class="overflow-hidden shadow-lg rounded-lg h-90 cursor-pointer m-auto">
            <nuxt-link :to="`/news/${id}/`" class="w-full block h-full">
                <picture>
                    <source :srcset="src" class="max-h-40 w-full object-cover" :class="imgHeight" type="image/webp" />
                    <img :src="url" class="max-h-40 w-full object-cover" :class="imgHeight" />
                </picture>
                <div class="bg-white dark:bg-gray-800 w-full p-4">
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2 hover:text-gray-500" :class="titleHeight" >
                        {{title}}
                    </p>
                    <p v-if="description" class="text-gray-400 dark:text-gray-300 font-light text-md" v-html="trimPostBody(description)">
                    </p>
                    <div class="mt-4 text-left flex items-center mb-2">
                        <span class="material-icons text-gray-500 mr-1 text-xl">
                            schedule
                        </span>
                        <span class="text-md text-gray-500" v-if="publishedAt">{{$dateFns.format(new Date(publishedAt), 'yyyy/MM/dd')}}</span>
                    </div>
                    <div class="flex flex-wrap justify-starts items-center mt-0">
                        <TagIcon bgBlueColor="true" :textSizeXsm="textSizeXsm">{{area.name}}</TagIcon>
                        <TagIcon v-for="(item,index) in jenre" :textSizeXsm="textSizeXsm">{{item.jenre_name}}</TagIcon>
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

<style lang="scss">
    @media screen and (min-width: 640px){
        // .news__nav--li{
        //     width:30%;
        // }
    }
</style>
