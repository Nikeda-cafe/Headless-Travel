<template>
    <div class="lg:w-3/4 m-auto">
        <PageTitle englishText="CONTENTS" japaneseText="コンテンツ一覧" />
        <!-- news card -->
        <div class="post__list text-center">
            <ul class="flex justify-between flex-wrap w-11/12 lg:w-full m-auto">
                <NewsList
                    v-for="(item,index) in posts.contents"
                    :key="index"
                    :url="item.thumbnail.url"
                    :description="item.description"
                    :title="item.title"
                    :id="item.id"
                    :area="item.area"
                    :jenre="item.jenre"
                    :publishedAt="item.publishedAt"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import NewsList from '../../components/NewsList.vue';
import PageTitle from '../../components/PageTitle.vue';
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

    },
    fetch ({store}) {
        store.commit('resetMenu')
    },
    async asyncData({ query, $config, $axios }) {
        const result = await $axios.$get(`${$config.apiUrl}/news/`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });

        return {
            posts: result
        };
    },
    components: { NewsList,  PageTitle }
}
</script>

<style lang="scss">

</style>

