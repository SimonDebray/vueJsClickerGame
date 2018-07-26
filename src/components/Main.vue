<template>
  <div>
    <div>
      <p>{{ Math.round(count) }} vue</p>
      <p>Vue/seconde {{ Math.round(autoIncrement * 100) / 100 }} vue</p>
    </div>
    <div>
      <clicker @counter="counter"
               :currentIncrement ="currentClickIncrement"
               :autoIncrement = "autoIncrement"
               :count = "count"></clicker>
    </div>
    <div>
      <display></display>
    </div>
    <div>
      <shop
        :currentIncrement ="currentClickIncrement"
        :autoIncrement = "autoIncrement"
        :count = "count"></shop>
    </div>
    <div class="bonus">
      <bonus v-if="displayBonus"
             @bonus="bonus"></bonus>
    </div>
  </div>
</template>

<script>
import Clicker from './Clicker'
import Shop from './Shop'
import Bonus from './Bonus'
import { mapGetters, mapActions } from 'vuex'
import store from '../store/Store'
import Display from './Display'

export default {
  name: 'Main',
  components: {Display, Bonus, Shop, Clicker},
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
  data: function () {
    return {
      displayBonus: false
    }
  },
  created: function () {
    const self = this
    this.intervalid1 = setInterval(function () {
      store.dispatch('increment', self.autoIncrement)
    }, 1000)
    this.intervalid2 = setInterval(function () {
      const n = Math.floor(Math.random() * Math.floor(5000))
      if (n === 1) {
        self.displayBonus = true
        setTimeout(function () {
          self.displayBonus = false
        }, 13000)
      }
    }, 1000)
  },
  methods: {
    counter: function () {
      store.dispatch('increment', this.currentClickIncrement)
    },
    bonus: function () {
      store.dispatch('increment', this.autoIncrement * 600)
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
div {
  display: flex;
}

.bonus {
  position: absolute;
}
</style>
