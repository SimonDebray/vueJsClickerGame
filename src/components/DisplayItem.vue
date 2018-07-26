<template>
  <li>
    <h3>{{ item.name }} Farm</h3>
    <ul>
      <li v-for="index in item.count" v-bind:key="index">
        <img :src="item.img"/>
      </li>
    </ul>
  </li>
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
  }
  ul, li {
    list-style: none;
  }
</style>
