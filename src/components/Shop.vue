<template>
  <div>
    <h2>Shop</h2>
    <shop-item v-for="item in items"
               :key="item.id"
               v-bind:item="item"
               @buy="buy"
    ></shop-item>
  </div>
</template>

<script>
import ShopItem from './ShopItem'
export default {
  name: 'Shop',
  props: [
    'currentClickIncrement',
    'autoIncrement',
    'count'
  ],
  components: {ShopItem},
  methods: {
    buy: function (id) {
      if (this.count > this.items[id - 1].data.specs.price) {
        this.items[id - 1].data.count += 1
        this.items[id - 1].data.specs.price = Math.round(this.items[id - 1].data.specs.price * 1.2)
        // Update store with count => need to add store
      }
    }
  },
  data () {
    return {
      items: [
        {
          id: 1,
          data: {
            count: 0,
            name: 'Clicker',
            img: require('../assets/clicker.png'),
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
            img: require('../assets/github.png'),
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
