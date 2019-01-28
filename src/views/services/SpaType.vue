<template>
  <div class="spa-type-page">
    <div class="service-list-box">
      <b-container>
        <h1 class="title pt-0 pb-4">Privilege Spa Discount</h1>
        <div class="mb-4">
          <b-input-group>
            <b-form-input class="border-x" size="lg" placeholder="Search"></b-form-input>
            <b-input-group-append class="ml-3">
              <b-btn class="btn-search"><font-awesome-icon icon="search" /></b-btn>
            </b-input-group-append>
          </b-input-group>
        </div>
        <b-row class="justify-content-md-center">
          <b-col cols="3">
            <CardStyleSpa />
          </b-col>
          <b-col cols="3">
            <CardStyleSpa />
          </b-col>
          <b-col cols="3">
            <CardStyleSpa />
          </b-col>
          <b-col cols="3">
            <CardStyleSpa />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ServiceHead from '../../components/molecules/ServiceHead';
import CardStyleSpa from '../../components/cards/StyleSpa.vue'

export default {
  name: 'SpaType',
  components: {
    ServiceHead,
    CardStyleSpa
  }
}
</script>
