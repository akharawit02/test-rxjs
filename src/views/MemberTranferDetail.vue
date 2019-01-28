<template>
  <div>
    <HeroSlide />
    <b-container class="content-box member-tranfer-detail-page">
      <h1 class="title text-left pb-3 mt-5 mb-4">
        <img src="@/assets/images/icon-tranfer.png" /> Member Transfer Detail
      </h1>
      <b-card>
        <b-media>
          <b-img slot="aside" src="https://placekitten.com/380/200" width="250" alt="placeholder" />
          <h4 class="mt-0 ">Member Tranfer</h4>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
            in faucibus.
          </p>
          <b-button class="mr-2 btn-mdf">Back</b-button>
          <b-button class="btn-mdf">Transfer point</b-button>
        </b-media>
      </b-card>

      <h5 class="my-4 mt-5">Points Tranfer</h5>
      <ul>
        <li>
          Points transfer will be associated with fee which will be deducted from transferrer’s account.
          <table class="table table-bordered table-mdf mt-3">
            <thead>
              <tr>
                <th>Vacation Points Transfer</th>
                <th>Fee per session</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to 30,000 points</td>
                <td>1,500 points</td>
              </tr>
              <tr>
                <td>30,001 - 50,000 points</td>
                <td>2,500 points</td>
              </tr>
              <tr>
                <td>50,001 - 100,000 points</td>
                <td>5,000 points</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>Recipient of points transfer must be a member only.</li>
        <li>Transfer points to Service Partners, regulations will be based from each individual partner’s company.</li>
      </ul>

      <!-- Modal -->
      <b-modal id="modallg" size="lg" hide-footer="true">
        <h1 class="title pt-1 pb-4">Member tranfer</h1>
        <b-form>
          <b-row class="mb-2">
            <b-col cols="3">Member number</b-col>
            <b-col cols="7">
              <b-form-input type="text" />
            </b-col>
            <b-col cols="2"><b-button>Verify</b-button></b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="3">Tranfer point</b-col>
            <b-col cols="7">
              <b-form-input type="text" />
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="3">Fee per session</b-col>
            <b-col cols="7">1,500 points</b-col>
          </b-row>
        </b-form>
        <ListPoint :items="items" />
        <b-button>Back</b-button>
        <b-button>Confirm</b-button>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import ListPoint from '../components/molecules/ListPoint'
import HeroSlide from '../components/organisms/HeroSlide'

export default {
  name: 'MemberTranferDetail',
  components: {
    ListPoint,
    HeroSlide
  },
  data () {
    return {
      items: [
        { point: '2,000', label: 'Point Now' },
        { point: '2,300', label: 'Tranfer point + fee' },
        { point: '4,000', label: 'Balance' }
      ]
    }
  }
}
</script>
