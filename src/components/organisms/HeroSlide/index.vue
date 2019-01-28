<template>
  <div class="hero-slide">
    <b-carousel id="carousel1"
                controls
                indicators
                :interval="4000"
                v-model="slide"
    >
      
      <!-- Slides with image only -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100"
             src="@/assets/images/hero.png" alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100"
             src="@/assets/images/hero.png" alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100"
             src="@/assets/images/hero.png" alt="image slot">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'HeroSlide',
  data () {
    return {
      slide: 0
    }
  }
}
</script>
