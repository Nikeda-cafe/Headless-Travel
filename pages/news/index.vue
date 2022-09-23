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
            <Pagination
                :pager="pager"
                :current="Number(page)"
            />
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
import Pagination from '../../components/Pagination';
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
    async asyncData({ query, $config, $axios, params }) {
        const page = params.p || '1'
        const limit = 3
        const result = await $axios.$get(`${process.env.API_URL}/news/?limit=${limit}&offset=${(page - 1) * limit}`, {
            headers: { "X-API-KEY": process.env.API_KEY },
        });

        return {
            posts: result,
            page,
            pager: [...Array(Math.ceil(result.totalCount / limit)).keys()],
        };
    },
    components: { NewsList,  PageTitle, LayoutSideNav, Pagination }
}
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 640px){
        .simple__news > li{
            width: 49%;
        }
    }
</style>

