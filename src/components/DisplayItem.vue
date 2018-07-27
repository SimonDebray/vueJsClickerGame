<template>
  <div>
    <h3>{{ item.name }} Farm</h3>
    <section>
        <img v-for="index in item.count" v-bind:key="index" :src="item.img"/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DisplayItem',
  props: ['item']
}
</script>

<style scoped>
  img {
    height: 20px;
    width: auto;
    margin: 3px;
  }
  div {
    width: 48%;
    margin: 5px 1%;
  }
  section {
    display: flex;
    flex-wrap: wrap;
  }
</style>
