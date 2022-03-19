<template>
  <section class="toy-preview">
      <h2>{{toy.name}}</h2>
      <h3>Price: {{toy.price}}$</h3>
      <p>Labels: <span v-for="label in toy.labels" :key="label">{{label}}</span></p>
      <nav>
      <router-link :to="'/toy/' + toy._id">Details</router-link>
      <router-link :to="'/toy/edit/' + toy._id">Edit</router-link>
      <button @click="removeToy" class="delete-btn">Delete</button>
      </nav>
  </section>
</template>

<script>
export default {
  props: {
    toy: Object
  },
  methods: {
    removeToy() {
      this.$emit('removeToy', this.toy._id)
    }
  }
}
</script>

<style>

</style>