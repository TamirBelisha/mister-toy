<template>
  <section v-if="toy" class="toy-edit main-layout main-content">
    <article>
        <div class="details-card">
            <h1 v-if="toy._id">{{toy.name}} <span>{{toy._id}}</span></h1>
            <h1 v-else>Add toy</h1>
            <form>
                <p>Toy name: 
                    <el-input type="text" v-model="toy.name" placeholder="Name"/>
                </p>
                <p>Toy price: 
                    <el-input type="number" v-model="toy.price" placeholder="Price"/>
                </p>
                <p>In stock? 
                    <input v-model="toy.inStock" type="radio" name="isInStock" id="inStock" :value="true" title="yes">
                    <label for="inStock">Yes</label>
                    <input v-model="toy.inStock" type="radio" name="isInStock" id="notInStock" :value="false" title="no">
                    <label for="notInStock">No</label>
                </p>
                <p>Toy labels: </p>
                <el-select
                    v-model="toy.labels" 
                    multiple
                    style="width: 200px"
                    placeholder="Select labels">
                    <el-option v-for="label in labels" :key="label" :label="label" :value="label"/>
                </el-select>
                <nav>
                    <router-link to="/toy">Back</router-link>
                    <router-link to="/toy" @click="addToy">Submit</router-link>
                    <router-link to="/toy" v-if="toy._id" @click="removeToy" class="delete-btn">Delete</router-link>
                </nav>
            </form>
        </div>
    </article>
  </section>
</template>

<script>
export default {
    created() {
        const id = this.$route.params.toyId
        this.$store.dispatch({type: 'setCurrToy', toyId: id})
            .then(currToy => {
                this.toy = this.$store.getters.getCurrToy
            })
    },
    data() {
        return {
            toy: null,
            labels: this.$store.getters.getLabels
        }
    },
    methods: {
        addToy() {
            this.$store.dispatch({type: 'addToy', toy: this.toy})
        },
        removeToy() {
            this.$store.dispatch({type: 'removeToy', toyId: this.toy._id})
        },
    }
}
</script>

<style>

</style>