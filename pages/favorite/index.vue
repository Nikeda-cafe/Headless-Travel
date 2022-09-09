<template>
    <section class="w-11/12 m-auto mb-16">
        <PageTitle japaneseText="お気に入り記事一覧" englishText="Favorite" />
        <div v-if="userFavoritePosts.length">
            <ShortNewsList
                v-for="(item, index) in userFavoritePosts"
                :key="index"
                :id="item.postId"
                :title="item.postTitle"
                :thumbnail="item.postThumbUrl"
                :favoDate="item.favoDate"
            />
        </div>
        <div v-else>
            <p>{{message}}</p>
        </div>
    </section>
</template>

<script>
import PageTitle from '../../components/PageTitle.vue'
import ShortNewsList from '../../components/ShortNewsList.vue'
export default {
    head: {
        title: 'お気に入り記事一覧',
    },
    fetch ({store}) {
        store.commit('resetMenu')
    },
    data: function(){
        return {
            userFavoritePosts: [],
            message:'お気に入り登録されている記事がありませんでした'
        }
    },
    methods: {

    },
    mounted() {
        this.userFavoritePosts = JSON.parse(localStorage.getItem('favo_posts')) ?? []

    },
    components: { PageTitle, ShortNewsList }
}

</script>
