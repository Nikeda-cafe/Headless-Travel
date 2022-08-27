<template lang="">
    <div class="text-xs mr-2 py-1.5 px-2 text-gray-600 bg-blue-100 rounded-2xl mt-2">
        #{{name}}
    </div>
</template>

<script>
export default {
  name: 'AreaTag',
  props: {
    name: {
        type: String,
        required: true,
    },
  },
}

</script>
