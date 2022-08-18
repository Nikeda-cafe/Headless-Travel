<template>
  <div>
    <div class="">
      <ul class="d-flex justify-content-start flex-items">
        <li v-for="(item,index) in items" :key="index" class="item col-lg-2 col-sm-4 col-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{{item.title}}</h4>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text break-all">
                {{item.contents}}
              </p>
              <a href="#!" class="card-link">Card link</a>
              <a href="#!" class="card-link">Another link</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from '@/static/json/cardJson.json'
export default {
  data: function(){
    return {
      items: data.info,
      ref: this.$refs.re
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-items{
  height: auto;
  overflow-x: scroll;
  }
  .item{
    margin: 10px;
    flex-shrink: 0;
  }
</style>
