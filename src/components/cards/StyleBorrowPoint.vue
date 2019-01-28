<template>
  <div class="card-style-topup">
    <b-card title="The Exclusive"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="card-style1 mb-4">
      <span class="card-value-top card-value-top-borrow-point">Borrow points 100 points</span>
      <p class="card-text">
        Borrow points 100 points <br /> = <br /> Experience Club 100 points
      </p>
      <b-row no-gutters>
        <b-col class="pr-1">
          <b-button class="btn-topup">Topup</b-button>
        </b-col>
        <b-col class="pl-1">
          <b-button class="btn-detail">Details</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardStyleTopup'
}
</script>
