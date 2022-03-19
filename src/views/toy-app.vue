<template>
    <section class="main-layout main-content">
        <toy-filter @setFilter="setFilter" />
        <toy-list @removeToy="removeToy" v-if="toys" :toys="toys" />
    </section>
</template>

<script>
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'
export default {
    created() {
        console.log('app created');
        this.$store.dispatch({type: 'loadToys', filterBy: ''})
    },
    data() {
        return {
            filterBy: {}
        }
    },
    components: {
        toyFilter,
        toyList
    },
    methods: {
        setFilter(filterBy) {
            this.$store.dispatch({type: 'loadToys', filterBy})
        },
        removeToy(toyId) {
            this.$store.dispatch({type: 'removeToy', toyId})
        }
    },
    computed: {
        toys() {
            return this.$store.getters.getToys
        }
    }
}
</script>

<style>

</style>