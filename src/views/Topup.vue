<template>
  <div class="content-box member-tranfer-page">
    <b-container>
      <h1 class="title text-left pb-3">
        <img src="@/assets/images/icon-totalpoint.png" /> Top up
      </h1>
    </b-container>
    <b-jumbotron class="text-center" header="Wellcomp!!">
      <p>Mr. Test Point <br />
      Balance points 100,00 points</p>
    </b-jumbotron>
    <b-container class="member-tranfer-page pt-5">
      <b-row>
        <b-col cols="3">
          <CardStyleTopup />
        </b-col>
        <b-col cols="3">
          <CardStyleTopup />
        </b-col>
        <b-col cols="3">
          <CardStyleTopup />
        </b-col>
        <b-col cols="3">
          <CardStyleTopup />
        </b-col>
        <b-col cols="3">
          <CardStyleTopup />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CardStyleTopup from '../components/cards/StyleTopup.vue'

export default {
  name: 'MemberTranfer',
  components: {
    CardStyleTopup
  }
}
</script>
