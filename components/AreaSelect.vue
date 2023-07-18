<template>
    <div>
        <div v-if="loading">
            <Load></Load>
        </div>
        <ul v-else>
            <li :key="key" v-for="(item,key) in pref">{{item.prefName}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import Load from "@/components/Load.vue";
export default {
    components: {Load},
    data(){
        return{
            prefList: [

            ],
            pref: [],
            loading: true,
        }
    },
    props: {

    },
    methods: {

    },
    async mounted() {
        this.prefList = await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
            headers: {
                'X-API-KEY': 'ZJ0M1oUrGqbFg8zVS1gGvYUyZm4KYm6YJTpfVeoL',
                'Content-Type': 'application/x-www-form-urlencoded',
            }

        });
        this.pref = this.prefList.data.result
        this.loading = false
    },
}
</script>


