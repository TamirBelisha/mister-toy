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
                        '#b4dfb2',
                        '#b2dfd2',
                        '#b2cbdf',
                        '#bbb2df',
                        '#dfb2bf',
                        '#dfc7b2',
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
                     total: +toy.price,
                     amount: 1
                 }
             }
             else{
                 acc[label].total += +toy.price
                 acc[label].amount++
             }
             })
             return acc
         }, {})
         console.log(res);
         for (const label in res) {
             this.testData.labels.push(label)
             this.testData.datasets[0].data.push((res[label].total / res[label].amount))
         }
         console.log(this.$store.getters.getToys);
         
         console.log(this.testData)
        },
   }
})
</script>
