<template>
  <div>
    <div class="c m0a">
      <hooper :settings="hooperSettings" class="hooper-outer">
        <slide class="card-item" v-for="(item,key) in cardItems.info" :key="key">
          <div class="item-outer">
            <div class="item-title">{{item.title}}</div>
            <div class="item-contents">
              <div class="item-content">
                {{item.contents}}
              </div>
              <div class="item-btn"><a href="#">Go Anywhere</a></div>
            </div>
          </div>
        </slide>
        <!-- <slide v-for="(item,key) in cardItems.info" :key="key" class="card item-list">
          <div class="card-body">
            <h4 class="card-title">{{item.title}}</h4>
            <p class="card-text">
              {{item.contents}}
            </p>
            <a href="#!" class="btn btn-success">Go somewhere</a>
          </div>
        </slide> -->
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </div>
</template>

<script>

import { Hooper,Slide,Pagination as HooperPagination,Navigation as HooperNavigation} from 'hooper'
import 'hooper/dist/hooper.css'
import data from '@/static/json/cardJson.json'
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data: function(){
    return {
      cardItems:data,
      hooperSettings: {
        itemsToShow: 1.5,
        centerMode: true,
        infiniteScroll: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 5,
            pagination: 'fraction'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .c{
    width: 100%;
    padding-top:15px;
    padding-bottom: 15px;
    padding-left:10px ;
    padding-right: 10px;
    background-color: lightgrey;
  }
  .m0a{
    margin: 0 auto;
  }
  .hooper-outer{
    height: auto;
  }
  .hooper-slide {
    // border: 5px solid lightgray;
    // border-radius: 15px;
  }
  .hooper-pagination {
    bottom: -18px;
  }
  .item-outer{
    padding: 10px;
    border: 1px solid #fff;
    background-color: #fff;
    word-wrap: break-word;
    border-radius: 15px;
  }
  .item-title{
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 1px solid;
    margin-bottom: 5px;
  }
  .item-btn{
    padding: 5px;
    margin-top: 10px;
    border: none;
    background: lightgreen;
    color: #fff;
    text-align: center;
    width: 75%;
    font-weight: bold;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 2px 2px 4px lightgray;
  }

</style>

