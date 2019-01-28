<template>
  <b-container class="content-box contact-page">
    <h1 class="title title-border-b">Contact us</h1>
    <b-row>
      <b-col col="10" offset="1">
        <p class="mb-5 text-center">If you have any questions or comment, or simply would like to tell us how we are doing. Please do not hesitate to get in touch by filling out this handy form.</p>

        <b-form>
          <b-row class="mb-2">
            <b-col cols="3">Name</b-col>
            <b-col cols="9">
              <b-form-input type="text" />
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="3">Subject</b-col>
            <b-col cols="9">
              <b-form-input type="text" />
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="3">Email</b-col>
            <b-col cols="9">
              <b-form-input type="email" />
            </b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col cols="3">Telephon number</b-col>
            <b-col cols="9">
              <b-form-input type="text" />
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col cols="3">Message</b-col>
            <b-col cols="9">
              <b-form-textarea :rows="3" :max-rows="6" />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="9" offset="3">
              <b-button type="submit" variant="primary" class="btn-mdf mr-2">Sent</b-button>
              <b-button type="reset" variant="danger" class="btn-mdf">Reset</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
