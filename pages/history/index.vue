<template>
    <section class="w-11/12 m-auto mb-16">
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
</template>

<script>
import PageTitle from '../../components/PageTitle.vue'
import ShortNewsList from '../../components/ShortNewsList.vue'
import NoContents from '../../components/NoContents.vue'
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
    components: { PageTitle, ShortNewsList, NoContents }
}

</script>
