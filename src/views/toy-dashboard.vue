<template>
    <section class="main-layout main-content toy-dashboard">
        <article>
            <h2>Toy prices by label</h2>
            <chart-one v-if="isToys"/>
            <br>
            <h2>Toy inventory by label</h2>
            <chart-two v-if="isToys"/>
        </article>
    </section>
</template>

<script>
import chartOne from '../components/chart1-cmp.vue'
import chartTwo from '../components/chart2-cmp.vue'
export default {
    data() {
        return {
            
        }
    },
    created() {
    },
    components: {
        chartOne,
        chartTwo,
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

<style></style>