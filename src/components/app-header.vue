<template>
  <section class="app-header">
      <router-link to="/toy" class="logo">
        <h1>Mister Toy</h1>
      </router-link>
      <nav class="header-nav">
          <router-link to="/toy">To app</router-link>
          <router-link to="/toy/dashboard">To Dashboard</router-link>
          <router-link to="/about">About</router-link>
      </nav>
  </section>
</template>

<script>
export default {

}
</script>

<style>
a {
  color: black;
  text-decoration: none;
}
</style>