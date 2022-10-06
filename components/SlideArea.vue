<template lang="">
    <div>
        <div @click="backEvent">戻る</div>
        <ul>
            <li v-for="(item,index) in areas" :key="item.cityCode" >{{item.cityName}}</li>
            <!-- <div>svds</div> -->
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SlideArea',
    props: {
        prefCode: {
            type: Number,
            require: true,
            default: 0
        }
    },
    data:function(){
        return {
            areas: []
        }
    },
    methods: {
        async refresh(id){
            const res = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/cities?prefCode=${id}`, {
                headers: {
                    "X-API-KEY": "ZJ0M1oUrGqbFg8zVS1gGvYUyZm4KYm6YJTpfVeoL",
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            });
            this.areas = res.data.result
        },
        backEvent(){
            this.$emit('parent-back')
        }
    },
}

</script>

