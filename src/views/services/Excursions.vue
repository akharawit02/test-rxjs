<template>
  <div class="excursions-page">
    <ServiceHead :title="title" :description="description" />
    <div class="service-list-box">
      <b-container>
        <b-row>
          <b-col cols="3">
            <CardStyleExcursion />
          </b-col>
          <b-col cols="3">
            <CardStyleExcursion />
          </b-col>
          <b-col cols="3">
            <CardStyleExcursion />
          </b-col>
          <b-col cols="3">
            <CardStyleExcursion />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ServiceHead from '../../components/molecules/ServiceHead';
import CardStyleExcursion from '../../components/cards/StyleExcursion.vue'

export default {
  name: 'Excursions',
  components: {
    ServiceHead,
    CardStyleExcursion
  },
  data () {
    return {
      title: 'Excursions & Activities Experience',
      description: 'Experience the glamour and ease of high-quality excursions. Creating memories and storytelling you will reminisce with our unforgettable adventures.'
    }
  }
}
</script>
