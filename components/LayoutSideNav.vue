<template>
    <div class="md:sticky md:top-8">
        <section class="side__tag md:mb-12">
            <TagList :areaList="areaInfoList" :genreList="genreInfoList" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" height="18px" viewBox="0 0 24 24" width="18px" fill="gray"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
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
import TagList from './TagList.vue';
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
    components: { TagList }
}

</script>
