<template>
  <div class="dining-page">
    <ServiceHead :title="title" :description="description" />
    <div class="service-list-box">
      <b-container>
        <b-row class="justify-content-md-center">
          <b-col cols="5">
            <CardStyleDiningType />
          </b-col>
          <b-col cols="5">
            <CardStyleDiningType />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ServiceHead from '../../components/molecules/ServiceHead';
import CardStyleDiningType from '../../components/cards/StyleDiningType.vue'

export default {
  name: 'Dining',
  components: {
    ServiceHead,
    CardStyleDiningType
  },
  data () {
    return {
      title: 'Dining Experience',
      description: 'Challenge your taste buds with special gastronomic delights designed by talented chefs that elevate exciting culinary creations in dreamy and serene surroundings.'
    }
  }
}
</script>
