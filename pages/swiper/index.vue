<template>
    <div>
      <client-only>
        <swiper :options="swiperOption">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper>
      </client-only>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </div>
</template>


<script>
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          slidesPerView: 1,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        }
      };
    }
  };
</script>
