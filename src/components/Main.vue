<template>
  <div>
    <div>
      <p>{{ count }} vue</p>
    </div>
    <clicker></clicker>
    <shop></shop>
    <bonus></bonus>
  </div>
</template>

<script>
import Clicker from './Clicker'
import Shop from './Shop'
import Bonus from './Bonus'

export default {
  name: 'Main',
  components: {Bonus, Shop, Clicker},
  data () {
    return {count: 0, auto: 0}
  },
  created: function () {
    const self = this
    this.intervalid1 = setInterval(function () {
      self.count += self.auto
    }, 1000)
  },
  methods: {
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
