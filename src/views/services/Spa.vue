<template>
  <div class="spa-page">
    <ServiceHead :title="title" :description="description" />
    <div class="service-list-box">
      <b-container>
        <b-row class="justify-content-md-center">
          <b-col cols="4">
            <CardStyleSpaType />
          </b-col>
          <b-col cols="4">
            <CardStyleSpaType />
          </b-col>
          <b-col cols="4">
            <CardStyleSpaType />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ServiceHead from '../../components/molecules/ServiceHead';
import CardStyleSpaType from '../../components/cards/StyleSpaType.vue'

export default {
  name: 'Spa',
  components: {
    ServiceHead,
    CardStyleSpaType
  },
  data () {
    return {
      title: 'Spa & Wellness Experience',
      description: 'Unique sensory spa retreats for both physically and mentally. Enjoy tranquility that promotes relaxation, health, pleasure, and rejuvenation by using various techniques to stimulate all senses.'
    }
  }
}
</script>
