<template>
    <section class="main-layout main-content">
        <article>
            <h1>Toy prices by label</h1>
            <chart-one v-if="isToys"/>
            <br>
            <h1>Toy inventory by label</h1>
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

<style>
h1 {
    text-align: center;
}
</style>