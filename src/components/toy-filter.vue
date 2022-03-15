<template>
  <section class="toy-filter">
    <div>
      <el-input @input="setFilter" v-model="filterBy.txt" type="text" placeholder="Search" style="width: 200px"/>
      <el-select @change="setFilter" 
      v-model="filterBy.label" 
      multiple
      style="width: 200px"
      placeholder="Select label">
        <el-option v-for="label in labels" :key="label" :label="label" :value="label"/>
      </el-select>
      <el-select @change="setFilter"
      v-model="filterBy.sortBy"
      style="width: 200px"
      placeholder="Sort">
        <el-option value="name">Name</el-option>
        <el-option value="price">Price</el-option>
        <el-option value="createdAt">Created</el-option>
      </el-select>
      <label>All
        <input @change="setFilter" type="radio" value="" v-model="filterBy.inStock" hidden>
      </label> |
      <label>In stock
        <input @change="setFilter" type="radio" value="true" v-model="filterBy.inStock" hidden>
      </label>
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
        label: [],
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