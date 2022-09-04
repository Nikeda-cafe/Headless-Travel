<template lang="">
    <div class="tag__icon mr-1 py-1.5 px-1.5 text-gray-600 rounded-2xl mt-2" :class="bgColor">
        #<slot></slot>
    </div>
</template>

<script>

export default {
    name: 'TagIcon',
    props: {
        name: {
            type: String,
        },
        bgColor: {
            type: String,
            default: 'bg-red-100'
        }

    },
}

</script>

<style lang="scss">
    .tag__icon{
        font-size: 10px;
    }
</style>
