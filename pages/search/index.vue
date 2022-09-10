<template lang="">
    <div>
        <PageTitle englishText="SEARCH" japaneseText="カテゴリから探す" />
        <div class="w-11/12 m-auto mb-14">
            <h2 class="serch__area font-bold text-xl border-b border-gray-400 mb-4 pb-2">エリアから探す</h2>
            <ul class="serch__area--flex md:flex md:flex-wrap md:justify-between">
                <li v-for="(item,index) in areaList" :key="item.order" class="w-full mb-4 md:mb-10 md:w-1/2 rounded-md">
                    <CategoryCard
                        :id="item.id"
                        :name="item.name"
                        :thumbnail="item.thumbnail"
                        category="area"
                    />
                </li>
            </ul>
        </div>
        <div class="w-11/12 m-auto">
            <h2 class="serch__area font-bold text-xl border-b border-gray-400 mb-4 pb-2">ジャンルから探す</h2>
            <ul class="serch__area--flex md:flex md:flex-wrap md:justify-between">
                <li v-for="(item,index) in jenreList" :key="item.order" class="w-full mb-4 md:mb-10 md:w-1/2 rounded-md">
                    <CategoryCard
                        :id="item.id"
                        :name="item.jenre_name"
                        :thumbnail="item.thumbnail"
                        category="jenre"
                    />
                </li>
            </ul>
        </div>
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
            jenreList: this.$store.state.jenreInfoList,
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
