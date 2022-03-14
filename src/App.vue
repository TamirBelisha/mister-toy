<template>
  <app-header class="main-layout"/>
  <router-view/>
  <app-footer class="main-layout"/>
</template>

<script>
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue'
export default {
  name: 'App',
  components: {
    appHeader,
    appFooter
  }
}

</script>
