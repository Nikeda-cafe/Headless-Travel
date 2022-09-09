<template lang="">
    <div class="md:mb-16">
        <h1 class="text-black font-bold text-3xl md:text-5xl mb-2">{{eng}}</h1>
        <p class="text-gray-600 text-lg md:text-2xl font-bold mb-4">{{jap}}</p>
    </div>
</template>

<script>
export default {
    name:'',
    props: {
        eng:{
            type: String,
            required: true
        },
        jap:{
            type: String,
            required: true
        },
    }
}

</script>
