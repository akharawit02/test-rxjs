<template>
  <div>
    <HeroSlide />
    <b-container class="content-box member-tranfer-page">
      <h1 class="title text-left pb-3 mt-5">
        <img src="@/assets/images/icon-tranfer.png" /> Member Transfer
      </h1>
      <b-card>
        <b-media>
          <b-img slot="aside" src="https://picsum.photos/250/250/?image=54" width="250" alt="placeholder" />
          <h4 class="mt-0">Member Transfer</h4>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
            in faucibus.
          </p>
          <b-button class="btn-mdf" href="/#/membertrander/1">More information</b-button>
        </b-media>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import HeroSlide from '../components/organisms/HeroSlide'

export default {
  name: 'MemberTranfer',
  components: {
    HeroSlide
  }
}
</script>
