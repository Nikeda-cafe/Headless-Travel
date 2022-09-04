<template>
    <div class="">
        <section class="mv">
            <div class="mv__wrapper relative">
                <img src="~/assets/main.jpeg" alt="" class="w-full object-cover h-auto">
            </div>
        </section>

        <section class="bg-gray-100 py-6 mb-8">
            <div class="w-11/12 m-auto">
                <IndexPageTitle eng="CONCEPT" jap="コンセプト" />
                <div class="p-5 bg-white rounded-lg shadow-lg">
                    <p class="mb-4 text-xl">旅をテーマに世界遺産や世界の歴史、世界中の文化やグルメについての情報をお知らせする情報メディア</p>
                    <p class="text-gray-500">※当サイトは1エンジニアのポートフォリオサイトであり、商用目的のサイトではありません。</p>
                </div>
            </div>
        </section>

        <section class="pickup__contents mb-8">
            <div class="w-11/12 m-auto">
                <IndexPageTitle eng="PICK UP" jap="ピックアップ記事" />
                <hooper :settings="hooperSettings" class="hooper-outer">
                    <slide class="card-item border-8 border-white" v-for="(item,index) in postList" :key="index">
                        <NewsList
                            :url="item.thumbnail.url"
                            :title="item.title"
                            :id="item.id"
                            :area="item.area"
                            :jenre="item.jenre"
                            :publishedAt="item.publishedAt"
                            :imgHeight="`h-48`"
                            :titleHeight="`h-28`"
                        />
                    </slide>
                    <hooper-pagination slot="hooper-addons"></hooper-pagination>
                </hooper>
            </div>
        </section>
        <section class="famous__area mb-8 bg-gray-100 py-6">
            <div class="w-11/12 m-auto">
                <IndexPageTitle eng="FAMOUS AREA" jap="人気のエリア" />
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
                <IndexPageTitle eng="FAMOUS JENRE" jap="人気のジャンル" />
                <ul>
                    <li v-for="(item,index) in famousJenre" class="mb-4">
                        <CategoryCard
                            :key="index"
                            :id="item.id"
                            :name="item.jenre_name"
                            :thumbnail="item.thumbnail"
                            category="jenre"
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

        <section class="contact__section py-6 bg-gray-100">
            <div class="w-11/12 m-auto ">
                <IndexPageTitle eng="CONTACT" jap="お問い合わせ" />
                <p class="text-xl">制作者への技術的な問い合わせやコンテンツ内容などの各種お問い合わせはこちらから。</p>
                <div class="text-left">
                    <nuxt-link to="/contact/">
                        <button class="font-bold text-lg text-gray-800 border-none px-8 py-6 rounded-lg shadow-lg bg-blue-100 my-8 ml-8">
                            お問い合わせする
                        </button>
                    </nuxt-link>
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
import IndexPageTitle from '../components/IndexPageTitle.vue';
export default {
    name: "IndexPage",
    data: function() {
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
        console.log($config);
        const areaResult = await $axios.$get(`${$config.apiUrl}/area?filters=famous_flag[equals]true&fields=id,name,thumbnail&orders=order`, {
            headers: { "X-API-KEY": '691867be-4a35-4006-90c1-9b0856070900' },
        });

        const jenreResult = await $axios.$get(`${$config.apiUrl}/jenre?filters=famous_flag[equals]true&fields=id,jenre_name,thumbnail&orders=order`, {
            headers: { "X-API-KEY": '691867be-4a35-4006-90c1-9b0856070900' },
        });

        const pickupResult = await $axios.$get(`${$config.apiUrl}/news?filters=pickup_flag[equals]true&fields=id,title,thumbnail,area,jenre,publishedAt&limit=6`, {
            headers: { "X-API-KEY": '691867be-4a35-4006-90c1-9b0856070900' },
        });
        return {
            famousArea: areaResult.contents,
            famousJenre: jenreResult.contents,
            postList: pickupResult.contents
        };
    },
    components: { CategoryCard, NewsList, Hooper, Slide, HooperPagination, HooperNavigation, IndexPageTitle }
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
    // .card-item{
    //     border: 5px solid #fff;
    // }

</style>
