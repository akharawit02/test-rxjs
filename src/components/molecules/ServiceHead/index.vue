<template>
  <div class="service-head">
    <b-container>
      <div class="text-center">
        <h1 class="title">{{title}}</h1>
        <p class="description">{{description}}</p>
        <b-input-group>
          <b-form-input class="border-x" size="lg" placeholder="Search"></b-form-input>
          <b-input-group-append>
            <b-btn class="btn-search"><font-awesome-icon icon="search" /></b-btn>
          </b-input-group-append>
        </b-input-group>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ServiceHead',
  props: ['title', 'description']
}
</script>
