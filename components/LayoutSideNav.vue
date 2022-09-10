<template>
    <div class="md:sticky md:top-8">
        <section class="side__tag md:mb-12">
            <div class="md:my-4 md:pt-8 md:border-bottom-2 md:border-t-2 md:w-full border-black">
                <p class="md:font-bold md:text-xl md:mb-6">
                    <span class="sharp">#</span><span>人気のタグ</span>
                </p>
                <ul class="md:w-full md:flex md:flex-wrap">
                    <li v-for="(item,index) in areaInfoList"
                        :key="item.id"
                        class="md:mr-2 md:mb-2 md:text-gray-500  md:hover:text-gray-800"
                    ><nuxt-link :to="`/news/area/${item.id}/`"><span class="text-blue-400">#</span><span>{{item.name}}</span></nuxt-link>
                    </li>
                    <li v-for="(item,index) in genreInfoList"
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
        </section>

        <section>
            <div class="md:my-4 md:pt-8 md:border-bottom-2 md:border-t-2 md:w-full border-black">
                <p class="md:font-bold md:text-xl md:mb-6">
                    Pickup記事
                </p>
                <ul>
                    <li
                        class="md:h-28 md:mb-5"
                        v-for="pickupPosts of sidePickupPostsCount"
                        :key="pickupPosts.id"
                    >
                        <nuxt-link class="md:flex md:justify-between" :to="`/news/${pickupPosts.id}`">
                            <div class="md:w-4/12">
                                <picture>
                                    <source :srcset="`${pickupPosts.thumbnail.url}?fm=webp`" type="image/webp" />
                                    <img :src="pickupPosts.thumbnail.url" alt="" class="md:h-20" />
                                </picture>
                            </div>
                            <div class="md:w-7/12">
                                <p class="md:text-sm md:flex md:items-center">
                                    <span class="material-icons text-gray-500 mr-1 text-lg">
                                        schedule
                                    </span>
                                    <span>{{$dateFns.format(new Date(pickupPosts.publishedAt), 'yyyy/MM/dd')}}</span>
                                </p>
                                <ul class="md:flex">
                                    <li
                                        class="md:text-sm md:mr-2"
                                    >
                                        <span class="text-blue-400">#</span><span>{{pickupPosts.area.name}}</span>
                                    </li>
                                    <li
                                        class="md:text-sm md:mr-2"
                                        v-for="(item,index) in pickupPosts.genre"
                                        :key="item.id"
                                    >
                                        <span class="text-blue-400">#</span><span>{{item.genre_name}}</span>
                                    </li>
                                </ul>
                                <p class="md:font-bold">{{trimPostTitle(pickupPosts.title)}}</p>
                            </div>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "LayoutSideNav",
    data: function () {
        return {
            areaInfoList: this.$store.state.areaInfoList,
            genreInfoList: this.$store.state.genreInfoList,
            pickupPosts: this.$store.state.pickupPosts,
        };
    },
    methods: {
        trimPostTitle(title){
            const trimTitle = title.slice(0,20) + '...';
            return trimTitle
        },
    },
    computed: {
        sidePickupPostsCount(){
            return this.pickupPosts.slice(0, 3)
        },
    },
    components: {  }
}

</script>
