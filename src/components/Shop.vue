<template>
  <div>
    <h2>Shop</h2>
    <shop-item v-for="item in items"
               :key="item.id"
               v-bind:item="item"
    ></shop-item>
  </div>
</template>

<script>
import ShopItem from './ShopItem'
export default {
  name: 'Shop',
  props: [
    'currentClickIncrement',
    'autoIncrement'
  ],
  components: {ShopItem},
  data () {
    return {
      items: [
        {
          id: 1,
          data: {
            count: 0,
            name: 'Clicker',
            img: 'clicker.png',
            specs: {
              price: 15,
              vueS: 0.1
            }
          }
        },
        {
          id: 2,
          data: {
            count: 0,
            name: 'GitHub',
            img: 'github.png',
            specs: {
              price: 100,
              vueS: 1
            }
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
