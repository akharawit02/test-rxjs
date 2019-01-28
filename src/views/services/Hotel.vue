<template>
  <div class="Hotel">
    <ServiceHead :title="title" :description="description" />
    <div class="service-list-box">
      <b-container>
        <b-row>
          <b-col cols="3">
            <CardStyleHotel />
          </b-col>
          <b-col cols="3">
            <CardStyleHotel />
          </b-col>
          <b-col cols="3">
            <CardStyleHotel />
          </b-col>
          <b-col cols="3">
            <CardStyleHotel />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ServiceHead from '../../components/molecules/ServiceHead';
import CardStyleHotel from '../../components/cards/StyleHotel.vue'

export default {
  name: 'Hotel',
  components: {
    ServiceHead,
    CardStyleHotel
  },
  data () {
    return {
      title: 'Hotel & Resort Experience',
      description: 'Immerse yourself in relaxing vacations with various types of accommodations to select from.'
    }
  }
}
</script>
