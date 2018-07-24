<template>
  <div>
    <div>
      <p>{{ count }} vue</p>
    </div>
    <clicker @counter="counter"
             :currentIncrement ="currentClickIncrement"
             :autoIncrement = "autoIncrement"
    ></clicker>
    <shop
      :currentIncrement ="currentClickIncrement"
      :autoIncrement = "autoIncrement"
    ></shop>
    <bonus></bonus>
    <stats></stats>
  </div>
</template>

<script>
import Clicker from './Clicker'
import Shop from './Shop'
import Bonus from './Bonus'
import Stats from './Stats'

export default {
  name: 'Main',
  components: {Bonus, Shop, Clicker, Stats},
  data () {
    return {
      count: 0,
      autoIncrement: 0,
      currentClickIncrement: 1
    }
  },
  created: function () {
    const self = this
    this.intervalid1 = setInterval(function () {
      self.count += self.autoIncrement
    }, 1000)
  },
  methods: {
    counter: function () {
      this.count += this.currentClickIncrement
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
