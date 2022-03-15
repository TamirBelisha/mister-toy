<template>
   <GMapMap
      :center="center"
      :zoom="14"
      map-type-id="terrain"
   >
      <GMapCluster>
         <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
         />
      </GMapCluster>
   </GMapMap>
</template>
<script>
   export default {
      name: 'App',
      data() {
         return {
            center: { lat: 31.800047227173092, lng: 35.14887420078808 },
            markers: [
               {
                  position: {
                     lat: 32.070458424073045,
                     lng: 34.77796387120039,
                  },
               }, // Along list of clusters
               {
                  position: {
                     lat: 31.800047227173092,
                     lng: 35.14887420078808,
                  },
               }, // Along list of clusters
               {
                  position: {
                     lat: 31.763624583737723,
                     lng: 35.219329395183,
                  },
               },
            ],
         }
      },
   }
</script>

<style>
   .vue-map-container {
      height: 50vh;
      width: 50vw;
      margin: 0 auto
   }
</style>
