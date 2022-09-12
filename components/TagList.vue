<template>
    <div class="md:my-4 md:pt-8 md:border-bottom-2 md:border-t-2 md:w-full border-black">
        <p class="md:font-bold md:text-xl md:mb-6">
            <span class="sharp">#</span><span>人気のタグ</span>
        </p>
        <ul class="md:w-full md:flex md:flex-wrap">
            <li v-for="(item,index) in areaList"
                :key="item.id"
                class="md:mr-2 md:mb-2 md:text-gray-500  md:hover:text-gray-800"
            ><nuxt-link :to="`/news/area/${item.id}/`"><span class="text-blue-400">#</span><span>{{item.name}}</span></nuxt-link>
            </li>
            <li v-for="(item,index) in genreList"
                :key="item.id"
                class="md:mr-2 md:mb-2 md:text-gray-500  md:hover:text-gray-800"
            ><nuxt-link :to="`/news/genre/${item.id}/`"><span class="text-blue-400">#</span><span>{{item.genre_name}}</span></nuxt-link>
            </li>
        </ul>
        <div class="md:flex md:justify-end">
            <nuxt-link
                class="md:mr-5 md:text-lg md:font-bold md:pb-1 border-b-2 border-black md:text-gray-500 md:hover:text-gray-800"
                to="/search/"
            >
            タグ一覧
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TagList',
    props: {
        areaList: {
            type: Array,
            required: true
        },
        genreList: {
            type: Array,
            required: true
        }
    }
}

</script>
