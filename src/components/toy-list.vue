<template>
  <section class="toy-list">
    <article v-for="toy in toys" :key="toy._id" class="toy-preview">
      <toy-preview :toy="toy" />
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
    }
}
</script>

<style>

</style>