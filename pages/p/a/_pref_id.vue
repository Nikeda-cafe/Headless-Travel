<template>
  <div>

    <p>{{id}}</p>
    <!-- <p>{{$store.state.message}}</p> -->

  </div>
</template>

<script>
export default {
  data: function(){
    return {
      res:'',
      id: this.$route.params.pref_id,
    }
  },
}
</script>
