<template>
    <div class="mt-8 mb-8 md:mt-24 md:flex md:justify-between md:w-11/12">
        <div class="md:w-9/12">
            <section class="w-11/12 m-auto mb-16 md:m-auto md:mt-0 md:w-9/12">
                <PageTitle japaneseText="閲覧記事一覧" englishText="History" />
                <div v-if="userHistoryPosts.length">
                    <ShortNewsList
                        v-for="(item, index) in userHistoryPosts"
                        :key="index"
                        :id="item.postId"
                        :title="item.postTitle"
                        :thumbnail="item.postThumbUrl"
                        :historyDate="item.historyDate"
                    />
                </div>
                <div v-else>
                    <NoContents :message="message" />
                </div>
            </section>
        </div>
        <aside class="hidden md:block md:w-3/12">
            <LayoutSideNav />
        </aside>
    </div>
</template>

<script>
import PageTitle from '../../components/PageTitle.vue'
import ShortNewsList from '../../components/ShortNewsList.vue'
import NoContents from '../../components/NoContents.vue'
import LayoutSideNav from '/components/LayoutSideNav.vue';
export default {
    // middleware: 'insertStoreMasterData',
    fetch(){
        this.$store.commit('resetMenu')
    },
    head(){
        return{
            title: '閲覧履歴',
        }
    },
    data: function(){
        return {
            userHistoryPosts: [],
            message:'閲覧した記事がありませんでした'
        }
    },
    methods: {

    },
    mounted() {
        this.userHistoryPosts = JSON.parse(localStorage.getItem('history_posts')) ?? []

    },
    components: { PageTitle, ShortNewsList, NoContents, LayoutSideNav }
}

</script>
