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
                        '#515a66',
                        '#8960af',
                        '#d3c1a5',
                        '#71b18e',
                        '#77CEFF',
                        '#0079AF',
                        '#123E6B',
                        '#97B0C4',
                        '#A5C8ED',
                    ],
                },
                ],
         }
       }
   },
   methods: {
        showPrices() {
            const toys = this.$store.getters.getToys
            var outOfStock = toys.reduce((acc, toy)=> {
                if(!toy.inStock) acc++
                return acc
            }, 0)
            this.testData.labels.push('Out of stock')
            this.testData.datasets[0].data.push(outOfStock)
            var res = toys.reduce((acc, toy) => {
                if(toy.inStock) {
                    toy.labels.forEach(label => {
                    if(!acc[label]) acc[label] = 1
                    else acc[label]++
                    
                    })
                }
                    return acc
            }, {})
            for (const label in res) {
                this.testData.labels.push(label)
                this.testData.datasets[0].data.push(res[label])
            }
        },
   }
})
</script>
