<template>
  <div>
    <img @click="clickerEmit" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Clicker',
  data () {
  },
  props: [
    'currentClickIncrement',
    'autoIncrement'
  ],
  methods: {
    clickerEmit: function () {
      // TODO Trigger effect on click
      // Trigger the counter that will be incremented
      this.$emit('counter')
    }
  }
}
</script>

<style scoped>

</style>
