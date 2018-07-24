<template>
  <div>
    <h3>{{ item.data.name }}</h3>
    <img :src="getImgUrl(item.data.img)"/>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: ['item'],
  methods: {
    buy: function () {
      return true
    },
    getImgUrl: function (pic) {
      return require('../assets/' + pic)
    }
  }
}
</script>

<style scoped>
img{
  height: 60px;
  width: auto;
}
</style>
