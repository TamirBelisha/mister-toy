<template>
    <section class="main-layout main-content">
        <toy-filter />
        <toy-list v-if="toys" :toys="toys" />
    </section>
</template>

<script>
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'
export default {
    created() {
        console.log('app created');
        this.$store.dispatch('loadToys')
            .then(toys => {
                this.toys = this.$store.getters.getToys
            })
    },
    data() {
        return {
            toys: [],
            filterBy: {}
        }
    },
    components: {
        toyFilter,
        toyList
    },
}
</script>

<style>

</style>