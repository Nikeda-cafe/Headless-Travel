<template lang="">
    <div>
        <h1 class="text-center mb-3">エリアを取得</h1>
        <div class="input-group w-3/4 m-auto">
            <div class="input-group-prepend">
            <span class="input-group-text">都道府県</span>
            </div>
            <select class="form-control" name="prefecture" v-model="prefecture" @change="getArea(prefecture)">
                <option value="" v-for="(item,index) in prefectures" :key="index" :value="item.id">{{item.name}}</option>
            </select>
            <select name="" id="">
                <option v-for="(item,index) in area.data" :key="index" :value="item.id">{{item.name}}</option>
            </select>
        </div>
        <div class=" text-center">
            <nuxt-link to="/">
            <button
                type="button"
                class="px-4 py-2 m-4 border-none bg-green-200 rounded-xl cursor-pointer shadow-md"
            >axios</button>

            </nuxt-link>
            <p>{{xxx}}</p>
        </div>
    </div>
</template>

<script>
import prefectures from '@/assets/json/prefectures.json';
import { Store } from 'vuex';
export default {
    name: 'Prefectures',
    data : function(){
        return {
            area: [],
            prefectures: prefectures,
            prefecture: 0,
            xxx : this.$store.state.message
        }
    },
    methods: {
        async getArea(param){
            const url = 'https://www.land.mlit.go.jp/webland/api/CitySearch';
            this.area = await this.$axios.$get(`${url}?area=${param}`)
        }
    },


}
</script>
