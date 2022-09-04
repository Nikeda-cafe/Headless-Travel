<template lang="">
    <div>
        <h2 class="text-black font-bold text-3xl mb-2">{{eng}}</h2>
        <p class="text-gray-600 text-lg font-bold mb-4">{{jap}}</p>
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
