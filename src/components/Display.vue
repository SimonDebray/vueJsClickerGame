<template>
  <div>
    <h2>Your farm</h2>
    <section>
      <display-item v-for="item in items"
                 :key="item.id"
                 v-bind:item="item"
      ></display-item>
    </section>
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
section{
  display: flex;
  flex-wrap: wrap;
}
</style>
