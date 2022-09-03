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
        data() {
            return {
                jenreList: {},
                areaList: {},
            }
        },

        methods: {

        },

        fetch ({store}) {
            store.commit('resetMenu')
        },

        async asyncData({params,$config,$axios}) {
            const jenre = await $axios.$get(`${$config.apiUrl}/jenre?fields=id,jenre_name,thumbnail,order&orders=order`, {
                headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
            });

            const area = await $axios.$get(`${$config.apiUrl}/area?fields=id,name,thumbnail,order&orders=order`, {
                headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
            });
            return {
                jenreList: jenre.contents,
                areaList: area.contents
            };
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
