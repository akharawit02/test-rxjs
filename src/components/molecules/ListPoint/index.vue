<template>
  <div class="list-point">
    <ul>
      <li v-for="(item, index) in items">
        <h4>{{item.point}}</h4>
        <p>{{item.label}}</p>
      </li>
    </ul>
  </div>
</template>

<script> 
export default {
  name: 'ListPoint',
  props: ['items']
}
</script>
