<template>
  <div>
    <h2>Your farm</h2>
    <ul>
      <display-item v-for="item in items"
                 :key="item.id"
                 v-bind:item="item"
      ></display-item>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import DisplayItem from './DisplayItem'

export default {
  name: 'Display',
  components: {DisplayItem},
  computed: {
    ...mapGetters([
      'items'
    ])
  }
}
</script>

<style scoped>
ul, li {
  list-style: none;
}
</style>
