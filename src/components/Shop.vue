<template>
  <div>
    <h2>Shop</h2>
    <h3>Farm</h3>
    <div>
      <shop-item v-for="item in items"
                 :key="item.id"
                 :item="item"
                 :count="count"
                 @buy="buy"
      ></shop-item>
    </div>
    <h3>Boost</h3>
    <div>
      <boost-item v-for="boost in boosts"
                  :key="boost.id"
                  :boost="boost"
                  :count="count"
                  @boostPurchase="boostPurchase"></boost-item>
    </div>
  </div>
</template>

<script>
import ShopItem from './ShopItem'
import { mapGetters, mapActions } from 'vuex'
import store from '../store/Store'
import BoostItem from './BoostItem'

export default {
  name: 'Shop',
  components: {BoostItem, ShopItem},
  props: [
    'currentClickIncrement',
    'autoIncrement',
    'count'
  ],
  computed: {
    ...mapGetters([
      'items',
      'boosts'
    ]),
    ...mapActions([
      'purchaseItem',
      'purchaseBoost'
    ])
  },
  methods: {
    buy: function (item) {
      if (this.count >= item.price) {
        store.dispatch('purchaseItem', {item: item, nb: 1})
      }
    },
    boostPurchase: function (boost) {
      if (this.count >= boost.price) {
        store.dispatch('purchaseBoost', boost)
      }
    }
  }
}
</script>

<style scoped>

</style>
