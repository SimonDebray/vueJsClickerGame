<template>
  <div>
    <img @click="clickerEmit" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Clicker',
  data () {
    return {d: 1}
  },
  props: [
    'currentClickIncrement',
    'autoIncrement'
  ],
  methods: {
    clickerEmit: function () {
      this.$emit('counter')
    }
  }
}
</script>

<style scoped>

</style>
