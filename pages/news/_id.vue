<template lang="">
    <div>
        <h1>{{ $route.params.id }}</h1>
        <p>{{res.body}}</p>
        <p>{{res.title}}</p>
        <p>{{res.thumbnail.url}}</p>
        
        <p></p>


    </div>
</template>

<script>

export default {
    data: function(){
        return {
            id: '',
            res: {}
        }
    },

    mounted() {
        this.id = this.$route.params.id

    },
    async asyncData({ params,$config,$axios}) {
        const result = await $axios.$get(`${$config.apiUrl}/news/${params.id}`, {
            headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
        });
        return {
            res: result
        };
    },
}
</script>
