<template>
  <section class="toy-filter">
    <div>
      <input @input="setFilter" v-model="filterBy.txt" type="text" placeholder="Search">
      <label>All
        <input @change="setFilter" type="radio" value="" v-model="filterBy.inStock" hidden>
      </label> |
      <label>In stock
        <input @change="setFilter" type="radio" value="true" v-model="filterBy.inStock" hidden>
      </label>
      <select @change="setFilter" v-model="filterBy.label">
        <option value="" disabled>By label</option>
        <option value="">All</option>
        <option v-for="label in labels" :key="label">{{label}}</option>
      </select>
      <select @change="setFilter" v-model="filterBy.sortBy">
        <option value="" disabled>Sort</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="createdAt">Created</option>
      </select>
    </div>
    <router-link to="/toy/edit">Add toy</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: '',
        inStock: '',
        label: '',
        sortBy: ''
      },
    }
  },
  methods: {
    setFilter() {
      console.log('this.filterBY',this.filterBy);
      this.$emit('setFilter', this.filterBy)
    },
  },
  computed: {
    labels() {
      return this.$store.getters.getLabels
    },
  }
}
</script>

<style>

</style>