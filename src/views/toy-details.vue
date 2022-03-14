<template>
  <section v-if="toy" class="toy-details">
    <pre>
        {{toy}}
    </pre>
      <button @click="removeToy">Remove</button>
  </section>
</template>

<script>
export default {
    created() {
        const id = this.$route.params.toyId
        if(id) {
        this.$store.dispatch({type: 'setCurrToy', toyId: id})
            .then(currToy => {
                this.toy = this.$store.getters.getCurrToy
            })
        }
    },
    data() {
        return {
            toy: null
        }
    },
    methods: {
        removeToy() {
            this.$store.dispatch({type: 'removeToy', toyId: this.toy._id})
        }
    }
}
</script>

<style>

</style>