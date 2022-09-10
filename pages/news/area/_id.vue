<template>
    <div class="lg:w-3/4 m-auto">
        <PageTitle englishText="CONTENTS" :japaneseText="`${this.area}：コンテンツ一覧`" />
        <!-- news card -->
        <div v-if="posts.contents.length > 0" class="post__list text-center">
            <ul class="flex justify-between flex-wrap w-11/12 lg:w-full m-auto">
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
</template>

<script>
import NewsList from '../../../components/NewsList.vue';
import PageTitle from '../../../components/PageTitle.vue';
import NoContents from '../../../components/NoContents.vue';
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

        const result = await $axios.$get(`${$config.apiUrl}/news?filters=area[equals]${params.id}`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });

        return {
            posts: result,

        };
    },
    components: { NewsList, PageTitle, NoContents },
}
</script>

<style lang="scss">

</style>

