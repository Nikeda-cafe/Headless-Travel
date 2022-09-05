<template lang="">
    <div class="text-sm mr-1 py-1.5 px-1.5 text-gray-600 rounded-2xl mt-2" :class="bindClass">
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
        bgBlueColor: {
            type: String,
        },
        textSizeXsm: {
            type: String,
        }

    },
    data: function(){
        return {
            bindClass: {
                'bg-blue-100':  this.bgBlueColor ? true : false,
                'bg-red-100':  this.bgBlueColor ? false : true,
                'icon__text--xsm': this.textSizeXsm ? true : false
            }
        }
    }
}

</script>

<style lang="scss">
    .icon__text--xsm{
        font-size: 10px;
    }
</style>
