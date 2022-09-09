<template>
    <div class="space-y-8 lg:divide-y lg:divide-gray-100">
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
                        <span class="material-icons text-gray-500 mr-1 text-xl">
                            schedule
                        </span>
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

