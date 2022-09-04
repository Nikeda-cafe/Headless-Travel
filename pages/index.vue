<template>
  <div class="">
    <section class="mv">
        <div class="mv__wrapper relative">
            <img src="~/assets/main.jpeg" alt="" class="w-full object-cover h-auto">
        </div>
    </section>

    <section class="bg-gray-100 py-6 mb-8">
        <div class="w-11/12 m-auto">
            <h2 class="text-black font-bold text-3xl mb-2">CONCEPT</h2>
            <p class="text-gray-600 text-lg font-bold mb-4">コンセプト</p>
            <div class="p-5 bg-white rounded-lg shadow-lg">
                <p class="mb-4 text-xl">旅をテーマに世界遺産や世界の歴史、世界中の文化やグルメについての情報をお知らせする情報メディア</p>
                <p class="text-gray-500">※このサイトは1エンジニアのポートフォリオサイトであり、商用目的のサイトではありません。</p>
            </div>
        </div>
    </section>

    <section class="pickup__contents mb-8">
        <div class="w-11/12 m-auto">
            <h2 class="text-black font-bold text-3xl mb-2">PICK UP</h2>
            <p class="text-gray-600 text-lg font-bold mb-4">ピックアップ記事</p>
            <hooper :settings="hooperSettings" class="hooper-outer">
                <slide class="card-item border-8 border-white" v-for="(item,index) in postList" :key="index">
                    <NewsList
                        :url="item.thumbnail.url"
                        :title="item.title"
                        :id="item.id"
                        :area="item.area"
                        :jenre="item.jenre"
                        :publishedAt="item.publishedAt"
                    />
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
        </div>
    </section>
    <section class="famous__area mb-8 bg-gray-100 py-6">
        <div class="w-11/12 m-auto">
            <h2 class="text-black font-bold text-3xl mb-2">FAMOUS AREA</h2>
            <p class="text-gray-600 text-lg font-bold mb-4">人気のエリア</p>
            <ul>
                <li v-for="(item,index) in famousArea" class="mb-4">
                    <CategoryCard
                        :key="index"
                        :id="item.id"
                        :name="item.name"
                        :thumbnail="item.thumbnail"
                        category="area"
                    />
                </li>
            </ul>
            <div class="text-right mr-4 my-5">
                <button class="text-lg font-bold mt-4 pb-2 border-b-2 border-black ">
                    <nuxt-link to="/search/">エリア・ジャンルをすべて見る</nuxt-link>
                </button>
            </div>
        </div>
    </section>
    <section class="famous__area mb-8 py-6">
        <div class="w-11/12 m-auto">
            <h2 class="text-black font-bold text-3xl mb-2">FAMOUS JENRE</h2>
            <p class="text-gray-600 text-lg font-bold mb-4">人気のジャンル</p>
            <ul>
                <li v-for="(item,index) in famousJenre" class="mb-4">
                    <CategoryCard
                        :key="index"
                        :id="item.id"
                        :name="item.jenre_name"
                        :thumbnail="item.thumbnail"
                        category="area"
                    />
                </li>
            </ul>
            <div class="text-right mr-4 my-5">
                <button class="text-lg font-bold mt-4 pb-2 border-b-2 border-black ">
                    <nuxt-link to="/search/">エリア・ジャンルをすべて見る</nuxt-link>
                </button>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import CategoryCard from '../components/CategoryCard.vue';
import NewsList from '../components/NewsList.vue';
import { Hooper,Slide,Pagination as HooperPagination,Navigation as HooperNavigation} from 'hooper'
import 'hooper/dist/hooper.css'
export default {
    name: "IndexPage",
    data: () => {
        return {
            hooperSettings: {
                itemsToShow: 1.5,
                centerMode: true,
                infiniteScroll: true,
                autoPlay: true,
                playSpeed: 5000,
                mouseDrag: false,
                breakpoints: {
                800: {
                    centerMode: false,
                    itemsToShow: 3
                },
                1000: {
                    itemsToShow: 3.5,
                    pagination: 'fraction'
                }
                }
            }
        };
    },
    methods: {},
    fetch({ store }) {
        store.commit("resetMenu");
    },
    async asyncData({ params, $config, $axios }) {
        const areaResult = await $axios.$get(`${$config.apiUrl}/area?filters=famous_flag[equals]true&fields=id,name,thumbnail&orders=order`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });

        const jenreResult = await $axios.$get(`${$config.apiUrl}/jenre?filters=famous_flag[equals]true&fields=id,jenre_name,thumbnail&orders=order`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });

        const pickupResult = await $axios.$get(`${$config.apiUrl}/news?filters=pickup_flag[equals]true&fields=id,title,thumbnail,area,jenre,publishedAt&limit=6`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });
        return {
            famousArea: areaResult.contents,
            famousJenre: jenreResult.contents,
            postList: pickupResult.contents
        };
    },
    components: { CategoryCard, NewsList,  Hooper,
    Slide,
    HooperPagination,
    HooperNavigation}
}
</script>


<style lang="scss">
    .hooper{
        height: 100%;
    }
    .hooper-indicator{
        background-color: lightgray !important;
    }
    .hooper-indicator.is-active{
        background-color: lightblue !important;
    }

</style>
