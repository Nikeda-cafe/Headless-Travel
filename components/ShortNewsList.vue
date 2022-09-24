<template>
    <div class="space-y-8 lg:divide-y lg:divide-gray-100 mb-8">
        <nuxt-link :to="`/news/${id}`">
            <div class="pt-8 sm:flex lg:items-end group">
                <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                    <picture>
                        <source :srcset="`${thumbnail}?fm=webp`" type="image/webp" />
                        <img class="w-full rounded-md h-32 lg:w-32 object-cover" :src="thumbnail" alt="text">
                    </picture>
                </div>
                <div>
                    <div class="mt-4 text-left flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" height="18px" viewBox="0 0 24 24" width="18px" fill="gray"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        <span v-if="favoDate" class="text-md text-gray-500">登録日：{{favoDate}}</span>
                        <span v-if="historyDate" class="text-md text-gray-500">閲覧日：{{historyDate}}</span>
                    </div>
                    <p class="mt-3 text-lg font-medium leading-6">
                        <a
                            href="./blog-post.html"
                            class="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl"
                        >{{title}}
                        </a>
                    </p>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'ShortNewsList',
    props:{
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        favoDate: {
            type: String,
        },
        historyDate: {
            type: String
        },
        thumbnail: {
            type: String,
            required: true,
        },
    },
    data: function(){
        return {

        }
    },

}

</script>

