<template lang="">
    <div>
        <div class="w-11/12 m-auto">
            <h2 class="serch__area font-bold text-lg border-b border-gray-400 mb-4 pb-2">エリアから探す</h2>
            <ul class="lg:flex lg:flex-wrap lg:justify-between">
                <li v-for="(item,index) in areaList" :key="index" class="w-full mb-2">
                    <nuxt-link to="#">
                        <div v-if="item.thumbnail" class="relative w-full h-24">
                            <img :src="item.thumbnail.url" alt="" srcset="" class="h-24 object-cover w-full">
                            <span class="absolute text-xl text-gray-100 font-bold top-1/4 left-2">{{item.name}}</span>
                        </div>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
   export default {
        data() {
            return {
                jenreList: {},
                areaList: {}
            }
        },

        methods: {

        },

        async asyncData({params,$config,$axios}) {
            const jenre = await $axios.$get(`${$config.apiUrl}/jenre?fields=id,jenre_name`, {
                headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
            });

            const area = await $axios.$get(`${$config.apiUrl}/area?fields=id,name,thumbnail`, {
                headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
            });
            return {
                jenreList: jenre.contents,
                areaList: area.contents
            };
        },
   }
</script>

<style lang="" scoped>

</style>
