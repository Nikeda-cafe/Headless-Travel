<template>
    <div class="">
        <section class="md:w-full md:m-auto md:bg-gray-100">
            <div class="mv mv__wrapper md:m-auto bg-gray-200">
                <picture class="">
                    <source srcset="~/assets/main.jpeg?webp" type="image/webp" />
                    <img src="~/assets/main.jpeg" type="image/webp" alt="" class="w-full object-cover h-auto" width="411" height="206"/>
                </picture>
            </div>
        </section>

        <div class="main__wrapper md:flex md:justify-between md:m-auto">
            <div class="md:w-full">
                <section class="bg-gray-100  py-6 md:py-20 mb-8 md:mb-16">
                    <div class="w-11/12 md:w-8/12 m-auto">
                        <IndexPageTitle eng="CONCEPT" jap="コンセプト" />
                        <div class="p-5 bg-white rounded-lg shadow-lg md:w-10/12 md:p-10">
                            <p class="mb-4 text-xl">旅をテーマに世界遺産や世界の歴史、世界中の文化やグルメについての情報をお知らせする情報メディア</p>
                            <p class="text-gray-500">※当サイトは1エンジニアのポートフォリオサイトであり、商用目的のサイトではありません。</p>
                        </div>
                    </div>
                </section>

                <section class="pickup__contents mb-8 md:mb-16">
                    <div class="w-11/12 md:w-8/12 m-auto">
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
                                    imgHeight="h-48"
                                    titleHeight="h-28"
                                    textSizeXsm="true"
                                />
                            </slide>
                            <hooper-pagination slot="hooper-addons"></hooper-pagination>
                        </hooper>
                    </div>
                </section>
                <section class="famous__area mb-8 md:mb-16 md:py-20 bg-gray-100  py-6">
                    <div class="w-11/12 md:w-8/12 m-auto">
                        <IndexPageTitle eng="FAMOUS AREA" jap="人気のエリア" />
                        <ul class="md:flex md:justify-between md:flex-wrap">
                            <li v-for="(item,index) in famousArea" class="famous__card mb-4">
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
                            <button class="text-lg md:text-2xl font-bold mt-4 pb-2 border-b-2 border-black ">
                                <nuxt-link to="/search/">エリア・ジャンルをすべて見る</nuxt-link>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="famous__area mb-8 md:mb-16 py-6 md:py-20">
                    <div class="w-11/12 md:w-8/12 m-auto">
                        <IndexPageTitle eng="FAMOUS JENRE" jap="人気のジャンル" />
                        <ul class="md:flex md:justify-between md:flex-wrap">
                            <li v-for="(item,index) in famousJenre" class="famous__card mb-4">
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
                            <button class="text-lg md:text-2xl font-bold mt-4 pb-2 border-b-2 border-black ">
                                <nuxt-link to="/search/">エリア・ジャンルをすべて見る</nuxt-link>
                            </button>
                        </div>
                    </div>
                </section>

                <section class="contact__section py-6 bg-gray-100 md:py-20">
                    <div class="w-11/12 md:w-8/12 m-auto ">
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
            <!-- <LayoutSideNav /> -->
        </div>
    </div>
</template>

<script>
import CategoryCard from '../components/CategoryCard.vue';
import NewsList from '../components/NewsList.vue';
import { Hooper,Slide,Pagination as HooperPagination,Navigation as HooperNavigation} from 'hooper'
import 'hooper/dist/hooper.css'
import IndexPageTitle from '../components/IndexPageTitle.vue';
import LayoutSideNav from '../components/LayoutSideNav.vue';
export default {
    middleware: 'insertStoreMasterData',
    head: {
        title: 'Headless Travel',
        titleTemplate: null
    },
    name: "IndexPage",
    data: function() {
        return {
            hooperSettings: {
                itemsToShow: 1.5,
                centerMode: true,
                infiniteScroll: true,
                autoPlay: true,
                playSpeed: 3000,
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
            },
            postList: this.$store.state.pickupPosts,
            famousArea: this.$store.state.areaInfoList.filter((v) => {return v.famous_flag === true}),
            famousJenre: this.$store.state.jenreInfoList.filter((v) => {return v.famous_flag === true}),
        };
    },
    methods: {

    },

    components: { CategoryCard, NewsList, Hooper, Slide, HooperPagination, HooperNavigation, IndexPageTitle, LayoutSideNav }
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
    @media screen and (min-width: 640px){
        .mv{
            max-width: 1300px;
            img{
                max-height: 400px;
            }
        }
        .famous__card{
            width: 48%;
        }
    }

</style>
