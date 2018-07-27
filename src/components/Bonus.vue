<template>
  <div>
    <img @click="bonus" src="../assets/bonus.png">
  </div>
</template>

<script>
export default {
  name: 'Bonus',
  methods: {
    bonus: function () {
      // TODO Trigger effect on click
      // Trigger the counter that will be incremented
      this.$emit('bonus')
    }
  }
}
</script>

<style scoped>

</style>
