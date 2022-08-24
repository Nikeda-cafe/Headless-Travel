<template lang="">
    <div>
        <h1 class="text-center mb-3">エリアを取得</h1>
        <div class="input-group w-3/4 m-auto">
            <div class="input-group-prepend">
            <span class="input-group-text">都道府県</span>
            </div>
            <input type="text" class="form-control" name="prefecture" v-model="prefecture">
            <select name="" id="">
                <option v-for="(item,index) in area.data" :value="item.id">{{item.name}}</option>
            </select>
        </div>
        <div class=" text-center">
            <button
                type="button"
                class="border-none px-2 py-1 rounded-md bg-green-200 m-auto mt-4 mb-4"
                @click="getArea(prefecture)"
            >
            axios
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Prefectures',
    data : function(){
        return {
            area: [],
            prefecture: 0
        }
    },
    methods: {
        async getArea(param){
            const url = 'https://www.land.mlit.go.jp/webland/api/CitySearch';
            this.area = await this.$axios.$get(`${url}?area=${param}`)
            console.log(this.area);
        }
    },
}
</script>
