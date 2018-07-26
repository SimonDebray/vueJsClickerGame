<template>
  <div>
    <div>
      <p>{{ Math.round(count * 100) / 100 }} vue</p>
      <p>Vue/seconde {{ Math.round(autoIncrement * 100) / 100 }} vue</p>
    </div>
    <clicker @counter="counter"
             :currentIncrement ="currentClickIncrement"
             :autoIncrement = "autoIncrement"
             :count = "count"></clicker>
    <display></display>
    <shop
      :currentIncrement ="currentClickIncrement"
      :autoIncrement = "autoIncrement"
      :count = "count"></shop>
    <bonus></bonus>
    <stats></stats>
  </div>
</template>

<script>
import Clicker from './Clicker'
import Shop from './Shop'
import Bonus from './Bonus'
import Stats from './Stats'
import { mapGetters, mapActions } from 'vuex'
import store from '../store/Store'
import Display from './Display'

export default {
  name: 'Main',
  components: {Display, Bonus, Shop, Clicker, Stats},
  computed: {
    ...mapGetters([
      'count',
      'autoIncrement',
      'currentClickIncrement'
    ]),
    ...mapActions([
      'increment'
    ])
  },
  created: function () {
    const self = this
    this.intervalid1 = setInterval(function () {
      store.dispatch('increment', self.autoIncrement)
    }, 1000)
  },
  methods: {
    counter: function () {
      store.dispatch('increment', this.currentClickIncrement)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
