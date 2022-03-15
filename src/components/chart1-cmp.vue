<template>
  <DoughnutChart :chartData="testData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default defineComponent({
   components: { DoughnutChart },
   created() {
       this.showPrices()
   },
   data() {
       return {
           testData: {
                labels: [],
                datasets: [
                {
                    data: [],
                    backgroundColor: [
                        '#77CEFF',
                        '#0079AF',
                        '#123E6B',
                        '#97B0C4',
                        '#A5C8ED',
                        '#515a66',
                        '#8960af',
                        '#d3c1a5',
                        '#71b18e'
                    ],
                },
                ],
         }
       }
   },
   methods: {
        showPrices() {
         var res = this.$store.getters.getToys.reduce((acc, toy) => {
             toy.labels.forEach(label => {
             if(!acc[label]) {
                 acc[label] = {
                     total: toy.price,
                     amount: 1
                 }
             }
             else{
                 acc[label].total += toy.price
                 acc[label].amount++
             }
             })
             return acc
         }, {})
         for (const label in res) {
             this.testData.labels.push(label)
             this.testData.datasets[0].data.push((res[label].total / res[label].amount))
         }
        },
   }
})
</script>
