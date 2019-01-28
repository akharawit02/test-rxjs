<template>
  <div class="content-box excursions-detail-page">
    <b-container>
      <b-row class="service-detail-top">
        <b-col cols="7">
          <b-carousel
                controls
                indicators
                :interval="4000"
                v-model="slide"
          >
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />
          </b-carousel>
        </b-col>
        <b-col cols="5" class="pb-5">
          <h1 class="title">Chef Choice-Cooking lesson</h1>
          <p class="detail detail-ex">Redemption Point<br /> <span>4,500 points</span> per 2 persons</p>
          <p class="detail detail-ex">Redemption Point<br /> <span>4,500 points</span> per 2 persons</p>
          <p class="detail detail-ex">Redemption Point<br /> <span>4,500 points</span> per 2 persons</p>
          <b-button class="btn-service">Click to get voucher</b-button>
        </b-col>
      </b-row>
      <div>
        <h3 class="mb-4">ITINERARY</h3>
        <table class="table-ex">
          <tbody>
            <tr>
              <td width="120">
                Morning<br />08.00
              </td>
              <td>
                Breakfast at De’Richy<br />
                Visit local fresh market with Chef Pubton<br />
                Return to the property and enjoy the cooking class<br />
                There are 2 dishes per class as per chef recommendation from below list *Kanom Jeen Nam Nguew<br />
                *Tam Banoon<br />
                *Kaeng Hung Lay<br />
                *Nam Prik Noom<br />
                *Khow Soi Kai<br />
                *Kaeng Kare<br />
                *Larb Muang<br />
                *Nam Prik Ong
              </td>
            </tr>
            <tr>
              <td>
                Lunch <br />Afternoon <br />Dinne
              </td>
              <td>
                at De’Richy Restaurant Enjoy 90 minutes Relaxing massage at the New Concept Relaxing spa at Leisure
              </td>
            </tr>
          </tbody>
        </table>
        <hr />

        <h3 class="mb-4">PACKAGE TERMS & CONDITIONS</h3>
        <p>
          1. Minimum requirement of 2 persons | Additional transportation may be required for groups of 3 or more <br />
          2. This activity is suitable for adult only<br />
          3. Luxury transfer to and from the morning local market trip<br />
          4. Cooking class for 2 dishes from menus<br />
          5. Lunch at De’Richy Restaurant<br />
          6. One time 90-minute Relaxing Massage per person per stay<br />
          7. Please advise your Guest Experience Specialist of any food preferences or allergies upon reservation <br />
          8. A minimum 3 days advance reservation is required through email info@experienceclub.net , or via our
          Line official: @Experienceclub.<br />
          9. 24-hours cancellation notice is required, less than 24 hours cancellation or No Show results in
          points forfeiture
        </p>

        <table class="table table-bordered table-mdf mt-3">
          <tbody>
            <tr>
              <td>Redemption Point</td>
              <td>4,500 points per 2 persons</td>
            </tr>
            <tr>
              <td>Extra person</td>
              <td>2,250 points per person</td>
            </tr>
            <tr>
              <td>Children (4-12 years)</td>
              <td>250 points per child</td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'ExcursionsDetail',
  components: { }
}
</script>
