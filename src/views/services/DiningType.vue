<template>
  <div class="dining-type-page">
    <div class="service-list-box">
      <b-container>
        <h1 class="title pt-0">Available for point redemption</h1>
        <b-row class="justify-content-md-center">
          <b-col cols="4">
            <CardStyleDining />
          </b-col>
          <b-col cols="4">
            <CardStyleDining />
          </b-col>
          <b-col cols="4">
            <CardStyleDining />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ServiceHead from '../../components/molecules/ServiceHead';
import CardStyleDining from '../../components/cards/StyleDining.vue'

export default {
  name: 'DiningType',
  components: {
    ServiceHead,
    CardStyleDining
  }
}
</script>
