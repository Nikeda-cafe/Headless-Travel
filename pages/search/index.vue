<template lang="">
    <div class="mt-8 mb-8 md:mt-24 md:flex md:justify-between md:w-11/12">
        <div class="md:w-9/12">
            <div class="m-auto md:m-auto md:mt-0 md:w-9/12">
                <PageTitle englishText="SEARCH" japaneseText="カテゴリから探す" />
                <div class="w-11/12 m-auto mb-14 md:mt-8 md:w-full">
                    <h2 class="serch__area font-bold text-xl border-b border-gray-400 mb-4 pb-2 md:text-2xl md:py-4 md:mb-8">エリアから探す</h2>
                    <ul class="serch__area--flex md:flex md:flex-wrap md:justify-between">
                        <li v-for="(item,index) in areaList" :key="item.order" class="w-full mb-4 md:mb-6 md:w-1/2 rounded-md">
                            <CategoryCard
                                :id="item.id"
                                :name="item.name"
                                :thumbnail="item.thumbnail"
                                category="area"
                            />
                        </li>
                    </ul>
                </div>
                <div class="w-11/12 m-auto md:w-full">
                    <h2 class="serch__area font-bold text-xl border-b border-gray-400 mb-4 pb-2 md:text-2xl md:py-4 md:mb-8">ジャンルから探す</h2>
                    <ul class="serch__area--flex md:flex md:flex-wrap md:justify-between">
                        <li v-for="(item,index) in genreList" :key="item.order" class="w-full mb-4 md:mb-10 md:w-1/2 rounded-md">
                            <CategoryCard
                                :id="item.id"
                                :name="item.genre_name"
                                :thumbnail="item.thumbnail"
                                category="genre"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <aside class="hidden md:block md:w-3/12">
            <LayoutSideNav />
        </aside>
    </div>
</template>

<script>
import PageTitle from '/components/PageTitle.vue';
import CategoryCard from '/components/CategoryCard.vue';
export default {
    // middleware: 'insertStoreMasterData',
    fetch(){
        this.$store.commit('resetMenu')
    },
    head: {
        title: 'カテゴリから探す',
    },
    data() {
        return {
            genreList: this.$store.state.genreInfoList,
            areaList: this.$store.state.areaInfoList,
        }
    },

    methods: {

    },
    components: {PageTitle,CategoryCard}
}
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 480px){
        .serch__area--flex > li{
            width:49%
        }
    }
</style>
