<template>
  <section v-if="toy" class="toy-details">
    <div>
        {{toy}}
    </div>
    <div>
        <h1 v-if="toy._id">{{toy.name}}</h1>
        <h1 v-else>Add toy</h1>
        <form @submit.prevent="addToy">
            <input type="text" v-model="toy.name" placeholder="Name">
            <input type="number" v-model="toy.price" placeholder="Price">
            <button>Submit</button>
        </form>
    </div>
  </section>
</template>

<script>
export default {
    created() {
        const id = this.$route.params.toyId
        this.$store.dispatch({type: 'setCurrToy', toyId: id})
            .then(currToy => {
                this.toy = this.$store.getters.getCurrToy
            })
    },
    data() {
        return {
            toy: null
        }
    },
    methods: {
        addToy() {
            this.$store.dispatch({type: 'addToy', toy: this.toy})
        }
    }
}
</script>

<style>

</style>