<template>
    <div class="lg:w-3/4 m-auto">
        <Prefectures />

        <!-- news card -->
        <div class="post__list text-center">
            <ul class="flex justify-between flex-wrap w-10/12 lg:w-full m-auto">
                <NewsList
                    v-for="(item,index) in posts.contents"
                    :key="index"
                    :url="item.thumbnail.url"
                    :body="item.body"
                    :title="item.title"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import NewsList from '../components/NewsList.vue';
import Prefectures from '../components/prefectures.vue';
// import axios from 'axios'
export default {
    data: function () {
        return {
            // posts: {},
            id: this.$route.params.id,
            menuId: "",
            src: ""
        };
    },
    methods: {
        getAxios() {
            this.$router.push({
                path: "menu-detail",
                query: { menuId: this.menuId }
            });
        },
    },
    async asyncData({ query, $config, $axios }) {
        const result = await $axios.$get(`${$config.apiUrl}/news/`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });
        return {
            posts: result
        };
    },
    components: { NewsList, Prefectures }
}
</script>

<style lang="scss">

</style>

