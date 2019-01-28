<template>
  <div class="limousine">
    <ServiceHead :title="title" :description="description" />
    <div class="service-list-box">
      <b-container>
        <b-row>
          <b-col cols="3">
            <CardStyleLimousine />
          </b-col>
          <b-col cols="3">
            <CardStyleLimousine />
          </b-col>
          <b-col cols="3">
            <CardStyleLimousine />
          </b-col>
          <b-col cols="3">
            <CardStyleLimousine />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ServiceHead from '../../components/molecules/ServiceHead';
import CardStyleLimousine from '../../components/cards/StyleLimousine.vue'

export default {
  name: 'Limousine',
  components: {
    ServiceHead,
    CardStyleLimousine
  },
  data () {
    return {
      title: 'Limousine Experience',
      description: 'The aesthetics journey by a chauffeur-driven to your preferred destinations with safe, elegant and efficient transportation that you can trust.'
    }
  }
}
</script>
