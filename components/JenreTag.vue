<template lang="">
    <div class="text-xs mr-2 py-1.5 px-2 text-gray-600 bg-red-100 rounded-2xl mt-2">
        #<slot></slot>
    </div>
</template>

<script>
export default {
  name: 'JenreTag',
  props: {
    name: {
        type: String,
        required: true,
    },
  },
}

</script>
