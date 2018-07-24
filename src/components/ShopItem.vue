<template>
  <div @click="buyEmit" class="isNotClickable">
    <h3>{{ item.data.name }}</h3>
    <img :src="item.data.img"/>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: ['item'],
  methods: {
    buyEmit: function () {
      this.$emit('buy', this.item.id)
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
</style>
