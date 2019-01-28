<template>
  <div class="card-style-roomtype">
    <b-row>
      <b-col cols="4" class="roomtype-slide">
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
      <b-col cols="8" class="roomtype-detail">
        <h5 class="roomtype-title">Balcony Suite</h5>
        <table>
          <tbody>
            <tr>
              <td>Room type</td>
              <td>Balcony Suite</td>
            </tr>
            <tr>
              <td>Room Size</td>
              <td>60 SQM</td>
            </tr>
            <tr>
              <td>Capacity</td>
              <td>Maximum 2 persons</td>
            </tr>
            <tr>
              <td>Amenities</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit ultrices dolor eu aliquam.
              In a convallis leo. Curabitur finibus cursus metus sit amet pellentesque. Donec vel ornare nisi. Phasellus egestas, felis non maximus aliquam, mi libero hendrerit augue, eu rutrum quam tortor vel leo. Nulla vulputate viverra quam, at convallis metus dignissim et. Fusce sit amet consectetur velit, et aliquam tortor. Phasellus nibh ligula, tristique eget tincidunt eu, faucibus fringilla nisl. Sed id metus ac augue ullamcorper auctor. Donec fringilla risus interdum, aliquet dolor quis, venenatis velit</td>
            </tr>
            <tr>
              <td>Detail</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit ultrices dolor eu aliquam.
              In a convallis leo.</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'CardStyleRoomType'
}
</script>
