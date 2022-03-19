<template>
  <section class="toy-list">
    <article v-for="toy in toys" :key="toy._id" >
      <toy-preview @removeToy="removeToy" :toy="toy" />
    </article>
  </section>
</template>

<script>
import toyPreview from '../components/toy-preview.vue'
export default {
    props: {
      toys: Object
    },
    components: {
        toyPreview
    },
    methods: {
      removeToy(toyId) {
        this.$emit('removeToy', toyId)
      }
    }
}
</script>

<style>

</style>