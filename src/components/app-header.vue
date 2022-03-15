<template>
  <section class="app-header">
      <h1>Mister Toy</h1>
      <nav class="header-nav">
          <router-link to="/toy">To app</router-link> |
          <router-link to="/toy/dashboard">To Dashboard</router-link> |
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