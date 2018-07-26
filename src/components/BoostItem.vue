<template>
  <div @click="buyEmit"
       v-bind:class="getClass()"
       v-if="!boost.purchased">
    <h3>{{ boost.name }}</h3>
    <img :src="boost.img"/>
    <p><strong>Price: </strong> {{ boost.price }}</p>
  </div>
</template>

<script>
export default {
  name: 'BoostItem',
  props: [
    'boost',
    'count'
  ],
  methods: {
    buyEmit: function () {
      this.$emit('boostPurchase', this.boost)
    },
    getClass () {
      return {
        isNotClickable: this.boost.price > this.count,
        isClickable: !(this.boost.price > this.count)
      }
    }
  }
}
</script>

<style scoped>
  img {
    height: 50px;
    width: auto;
  }

  .isNotClickable {
    opacity: 0.8;
    filter: grayscale(95%);
  }

  .isClickable {
    cursor: pointer;
  }
</style>
