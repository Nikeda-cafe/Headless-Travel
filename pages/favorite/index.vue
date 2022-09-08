<template>
    <section class="w-11/12 m-auto mb-16">
        <PageTitle japaneseText="お気に入り記事一覧" englishText="Favorite" />
        <div v-if="posts">
        <div
            class="space-y-8 lg:divide-y lg:divide-gray-100"
            v-for="(item, index) in posts"
            :key="index"
        >
            <nuxt-link :to="`/news/${item.id}`">
                <div class="pt-8 sm:flex lg:items-end group">
                    <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                        <picture>
                            <source :srcset="`${item.thumbnail.url}?fm=webp`" type="image/webp" />
                            <img class="w-full rounded-md h-32 lg:w-32 object-cover" src="~/assets/midori.jpg" alt="text">
                        </picture>
                    </div>
                    <div>
                        <div class="mt-4 text-left flex items-center mb-2">
                            <span class="material-icons text-gray-500 mr-1 text-xl">
                                schedule
                            </span>
                            <span class="text-md text-gray-500" v-if="item.publishedAt">{{$dateFns.format(new Date(item.publishedAt), 'yyyy/MM/dd')}}</span>
                        </div>
                        <p class="mt-3 text-lg font-medium leading-6">
                            <a
                                href="./blog-post.html"
                                class="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl"
                            >{{item.title}}
                            </a>
                        </p>
                    </div>
                </div>
            </nuxt-link>
        </div>
        </div>
        <div v-else>
            <p>{{message}}</p>
        </div>
    </section>
</template>

<script>
import PageTitle from '../../components/PageTitle.vue'
export default {
    head: {
        title: 'お気に入り記事一覧',
    },
    fetch ({store}) {
        store.commit('resetMenu')
    },
    data: function(){
        return {

        }
    },
    methods: {

    },
    async asyncData({params, $config, $axios}) {
        const userFavoritePosts = JSON.parse(localStorage.getItem('favo_posts')) ?? []
        const searchPostIds = userFavoritePosts.join(',')
        if(searchPostIds !== ''){
            const result = await $axios.$get(`${$config.apiUrl}/news?ids=${searchPostIds}`, {
                headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
            })
            return {
                posts: result.contents
            }
        }else{
            return {
                posts: null,
                message: 'お気に入り登録されている記事がありませんでした'
            }
        }
    },
    components: {PageTitle}
}

</script>
