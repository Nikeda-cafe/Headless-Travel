<template lang="">
    <div class="text-xs mr-2 py-1.5 px-2 text-gray-600 rounded-2xl mt-2" :class="bgColor">
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
