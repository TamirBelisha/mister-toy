<template>
    <section class="main-layout main-content">
        <article>
            <h1>Toy prices by labels</h1>
            <chart-one v-if="isToys"/>
        </article>
    </section>
</template>

<script>
import chartOne from '../components/chart1-cmp.vue'
export default {
    data() {
        return {
            
        }
    },
    created() {
    },
    components: {
        chartOne
    },
    methods: {
    },
    computed: {
        isToys() {
            return this.$store.getters.getToys.length
        }
    }
}
</script>

<style>
h1 {
    text-align: center;
}
</style>