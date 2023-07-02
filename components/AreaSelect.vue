<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data: function(){
        return{
            prefList: [],
        }
    },
    props: {

    },
    methods: {

    },
    async mounted() {
        this.prefList = await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures',
        {
            headers: {
                'X-API-KEY': 'ZJ0M1oUrGqbFg8zVS1gGvYUyZm4KYm6YJTpfVeoL',
                'Content-Type': 'application/x-www-form-urlencoded',
            }

        }
        );
    },
}
</script>


