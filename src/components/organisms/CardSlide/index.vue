<template>
  <div class="card-slide"> 
    <b-container>
      <h1 class="title title-black">Special of the month</h1>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide><CardStyle1 /></swiper-slide>
        <swiper-slide><CardStyle1 /></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </b-container>
  </div>
</template>

<script>
import CardStyle1 from '../../cards/Style1.vue';

export default {
  name: 'CardSlide',
  components: {
    CardStyle1
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
