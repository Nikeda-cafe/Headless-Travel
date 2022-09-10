<template>
    <div class="mt-8 mb-8 md:mt-24 md:flex md:justify-between md:w-11/12">
        <div class="md:w-9/12">
            <section class="w-11/12 m-auto mb-16 md:m-auto md:mt-0 md:w-9/12">
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
            title: 'お気に入り記事一覧',
        }
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
    components: { PageTitle, ShortNewsList, NoContents, LayoutSideNav }
}

</script>
