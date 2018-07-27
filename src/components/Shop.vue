<template>
  <div>
    <h2>Shop</h2>
    <section>
      <shop-item v-for="item in items"
                 :key="'item' + item.id"
                 :item="item"
                 :count="count"
                 @buy="buy"
      ></shop-item>
      <boost-item v-for="boost in boosts"
                  :key="'boost' + boost.id"
                  :boost="boost"
                  :count="count"
                  @boostPurchase="boostPurchase"></boost-item>
    </section>
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
section {
  display: flex;
  flex-wrap: wrap;
}
</style>
