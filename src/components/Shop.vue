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
import { mapGetters, mapActions } from 'vuex'
import store from '../store/Store'

export default {
  name: 'Shop',
  components: {ShopItem},
  props: [
    'currentClickIncrement',
    'autoIncrement',
    'count'
  ],
  computed: {
    ...mapGetters([
      'items'
    ]),
    ...mapActions([
      'purchaseItem'
    ])
  },
  methods: {
    buy: function (item) {
      if (this.count >= item.data.specs.price) {
        store.dispatch('purchaseItem', {item: item, nb: 1})
      }
    }
  }
}
</script>

<style scoped>

</style>
