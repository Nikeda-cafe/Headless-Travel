<template>
    <div class="mt-8 mb-8 md:mt-24 md:flex md:justify-between md:w-11/12">
        <div class="md:w-9/12">
            <div class="m-auto md:m-auto md:mt-0 md:w-9/12">
                <PageTitle englishText="CONTENTS" japaneseText="コンテンツ一覧" />
                <!-- news card -->
                <div class="post__list text-center">
                    <ul class="simple__news flex justify-between flex-wrap m-auto w-11/12 md:w-full md:m-0 md:mt-16">
                        <NewsList
                            v-for="(item,index) in posts.contents"
                            :key="index"
                            :url="item.thumbnail.url"
                            :description="item.description"
                            :title="item.title"
                            :id="item.id"
                            :area="item.area"
                            :genre="item.genre"
                            :publishedAt="item.publishedAt"
                        />
                    </ul>
                </div>
            </div>
        </div>
        <aside class="hidden md:block md:w-3/12">
            <LayoutSideNav />
        </aside>
    </div>
</template>

<script>
import NewsList from '../../components/NewsList.vue';
import PageTitle from '../../components/PageTitle.vue';
import LayoutSideNav from '/components/LayoutSideNav.vue';
export default {
    // middleware: 'insertStoreMasterData',
    fetch(){
        this.$store.commit('resetMenu')
    },
    head(){
        return{
            title: 'コンテンツ一覧',
        }
    },
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
    async asyncData({ query, $config, $axios }) {
        const result = await $axios.$get(`${$config.apiUrl}/news/`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });

        return {
            posts: result
        };
    },
    components: { NewsList,  PageTitle, LayoutSideNav }
}
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 640px){
        .simple__news > li{
            width: 49%;
        }
    }
</style>

