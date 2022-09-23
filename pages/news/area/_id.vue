<template>
    <div class="mt-8 mb-8 md:mt-24 md:flex md:justify-between md:w-11/12">
        <div class="md:w-9/12">
            <div class="m-auto md:m-auto md:mt-0 md:w-9/12">
                <PageTitle englishText="CONTENTS" :japaneseText="`${this.area}：コンテンツ一覧`" />
                <div v-if="posts.contents.length > 0" class="post__list text-center">
                    <ul class="simple__news flex justify-between flex-wrap w-11/12 m-auto md:w-full md:m-0 md:mt-16">
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
                <div v-else>
                    <NoContents message="お探ししたエリアの記事がありませんでした。" />
                </div>
            </div>
        </div>
        <aside class="hidden md:block md:w-3/12">
            <LayoutSideNav />
        </aside>
    </div>
</template>

<script>
import NewsList from '../../../components/NewsList.vue';
import PageTitle from '../../../components/PageTitle.vue';
import NoContents from '../../../components/NoContents.vue';
import LayoutSideNav from '/components/LayoutSideNav.vue';
// import axios from 'axios'
export default {
    // middleware: 'insertStoreMasterData',
    fetch(){
        this.$store.commit('resetMenu')
    },
    head() {
        return{
            title: this.area + '-記事一覧',
        }
    },
    data: function () {
        return {
            id: this.$route.params.id,
            area: this.$store.state.areaInfoList.filter((v) => {return v.id === this.$route.params.id})[0].name,
        };
    },
    methods: {

    },
    async asyncData({ params, $config, $axios }) {

        const result = await $axios.$get(`${process.env.API_URL}/news?filters=area[equals]${params.id}`, {
            headers: { "X-API-KEY": process.env.API_KEY },
        });

        return {
            posts: result,

        };
    },
    components: { NewsList, PageTitle, NoContents, LayoutSideNav },
}
</script>

<style lang="scss" scped>
   @media screen and (min-width: 640px){
        .simple__news > li{
            width: 49%;
        }
    }
</style>

