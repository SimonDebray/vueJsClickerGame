<template>
  <div @click="buyEmit" v-bind:class="getClass()">
    <h3>{{ item.name }}</h3>
    <img :src="item.img"/>
    <p><strong>Price: </strong> {{ item.price }}</p>
    <p><strong>Vue / seconde: </strong> {{ item.vueS }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: [
    'item',
    'count'
  ],
  methods: {
    buyEmit: function () {
      if (this.item.price <= this.count) {
        this.$emit('buy', this.item)
      }
    },
    getClass () {
      return {
        isNotClickable: this.item.price > this.count,
        isClickable: !(this.item.price > this.count)
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

div {
  margin: 5px 15px;
}
</style>
