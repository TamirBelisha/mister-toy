<template>
<section>
  <app-header class="main-layout"/>
  <router-view/>
  <app-footer class="main-layout"/>
</section>
</template>

<script>
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue'
export default {
  name: 'App',
  created() {
    this.$store.dispatch({type: 'loadToys', filterBy: ''})
  },
  components: {
    appHeader,
    appFooter
  }
}

</script>
