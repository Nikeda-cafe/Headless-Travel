<template>
  <div>
    <div class="header">
      header
    </div>
    <div class="contents__area">
      <!-- <div class="mt-4 dvs" v-for="(item,index) in items" :key="index">
        <img :src="item.img">
      </div> -->
      <div class="mt-4 dvs">
        <img src="~/assets/1.png">
      </div>
      <div class="mt-4 dvs">
        <img src="~/assets/2.png">
      </div>
      <div class="mt-4 dvs">
        <img src="~/assets/3.png">
      </div>
      <div class="mt-4 dvs">
        <img src="~/assets/4.png">
      </div>
      <div class="mt-4 dvs">
        <img src="~/assets/5.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      items:[
        {id:1,img:'~/assets/img/l_1.jpg'},
        {id:2,img:'~/assets/img/l_2.jpg'},
        {id:3,img:'~/assets/img/l_3.jpg'},
        {id:4,img:'~/assets/img/l_4.jpg'},
        {id:5,img:'~/assets/img/l_5.jpg'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    height: 1000px;
  }
</style>
