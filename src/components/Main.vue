<template>
  <div>
    <main>
      <section>
        <h1>{{ Math.round(count) }} vue</h1>
        <p>Vue/seconde {{ Math.round(autoIncrement * 100) / 100 }} vue</p>
        <clicker @counter="counter"
                 :currentIncrement="currentClickIncrement"
                 :autoIncrement="autoIncrement"
                 :count="count"></clicker>
      </section>
      <section>
        <shop
          :currentIncrement="currentClickIncrement"
          :autoIncrement="autoIncrement"
          :count="count"></shop>
      </section>
    </main>
    <section>
      <display></display>
    </section>
    <article>
      <bonus v-if="displayBonus"
             @bonus="bonus"></bonus>
    </article>
  </div>
</template>

<script>
import Clicker from './Clicker'
import Shop from './Shop'
import Bonus from './Bonus'
import {mapGetters, mapActions} from 'vuex'
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
    // Interval used to add VUEs each second to the counter.
    this.intervalid1 = setInterval(function () {
      store.dispatch('increment', self.autoIncrement)
    }, 1000)
    // Interval used to display the bonus VUE.js (1 on 5000 each seconds)
    this.intervalid2 = setInterval(function () {
      const n = Math.floor(Math.random() * Math.floor(5000))
      if (n === 1) {
        self.displayBonus = true
        // Display th bonus for 13 seconds
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
      this.displayBonus = false
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

  main {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  main section {
    width: 50%;
  }
  article {
    position: absolute;
  }
</style>
