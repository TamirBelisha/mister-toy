<template>
  <section>
      <h2>{{toy.name}}</h2>
      <h2>{{toy.price}}</h2>
      <p v-for="label in toy.labels" :key="label">{{label}}</p>
      <router-link :to="'/toy/' + toy._id">Details</router-link>
      <router-link :to="'/toy/edit/' + toy._id">Edit</router-link>
  </section>
</template>

<script>
export default {
  props: {
    toy: Object
  }
}
</script>

<style>

</style>