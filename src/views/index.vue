<template>
  <div class="content-box home-page">
    <HeroSlide />
    <HowToUse />
    <CardSlide />
    <div class="whats-on">
      <b-container>
        <h1 class="title title-black">What's On</h1>
        <b-row>
          <b-col cols="3">
            <CardStyle2 />
          </b-col>
          <b-col cols="3">
            <CardStyle2 />
          </b-col>
          <b-col cols="3">
            <CardStyle2 />
          </b-col>
          <b-col cols="3">
            <CardStyle2 />
          </b-col>
          <b-col cols="3">
            <CardStyle2 />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import HeroSlide from '../components/organisms/HeroSlide'
import HowToUse from '../components/organisms/HowToUse'
import CardSlide from '../components/organisms/CardSlide'
import CardStyle2 from '../components/cards/Style2.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSlide,
    HowToUse,
    CardSlide,
    CardStyle2
  }
}
</script>
