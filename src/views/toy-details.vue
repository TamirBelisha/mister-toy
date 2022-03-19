<template>
  <section v-if="toy" class="toy-details main-layout main-content">
    <article>
        <div class="details-card">
            <h1>{{toy.name}} <span>{{toy._id}}</span></h1>
            <p>Price: <span>{{toy.price}}</span></p>
            <p class="toy-labels">Labels: <span v-for="label in toy.labels" :key="label">{{label}}</span></p>
            <p>Created at: <span>{{doneAt}}</span></p>
            <p v-if="toy.inStock" class="is-in-stock">IN STOCK</p>
            <p v-else class="not-in-stock">OUT OF STOCK</p>
            <p>Reviews: <span v-if="!toy.reviews.length">No reviews yet</span></p>
            <div class="toy-review-container">
                <div v-for="review in toy.reviews" :key="review" class="toy-review">
                        <p>Rate: <span>{{review.rate}}</span></p>
                        <p>Review: <span>"{{review.description}}"</span></p>
                </div>
            </div>
            <nav>
                <router-link to="/toy">Back</router-link>
                <router-link :to="'edit/' + toy._id">Edit</router-link>
                <router-link to="/toy" class="delete-btn" @click="removeToy" >Delete</router-link>
            </nav>
        </div>
    </article>
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
        },
    },
    computed: {
        doneAt() {
        const date = new Date(this.toy.createdAt)
        return date.toDateString()
        }
    }
}
</script>

<style>

</style>