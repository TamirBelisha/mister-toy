<template>
  <section>
      <h2>{{toy.name}}</h2>
      <h3>Price: {{toy.price}}$</h3>
      <p>{{toy.labels}}</p>
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