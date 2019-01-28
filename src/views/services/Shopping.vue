<template>
  <div class="shopping-page">
    <ServiceHead :title="title" :description="description" />
    <div class="service-list-box">
      <b-container>
        <b-row>
          <b-col cols="3">
            <CardStyleShopping />
          </b-col>
          <b-col cols="3">
            <CardStyleShopping />
          </b-col>
          <b-col cols="3">
            <CardStyleShopping />
          </b-col>
          <b-col cols="3">
            <CardStyleShopping />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ServiceHead from '../../components/molecules/ServiceHead';
import CardStyleShopping from '../../components/cards/StyleShopping.vue'

export default {
  name: 'Shopping',
  components: {
    ServiceHead,
    CardStyleShopping
  },
  data () {
    return {
      title: 'Shopping Experience',
      description: 'Enjoy shopping with a high level of personalization and exclusivity by going above and beyond to indulge in a unique experience from start to finish.'
    }
  }
}
</script>
