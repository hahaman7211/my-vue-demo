<template>
<div v-if="jobdetail">
  <h3>job name: {{ jobdetail.name }}</h3>
  <h3>job id: {{ jobdetail.id }}</h3>
</div>
<div v-else>
    <h3>loading......</h3>
</div>
</template>

<script>
export default {
    data() {
        return {
            jobdetail: null
        }
    },

    props: ['id'],

    mounted() {
       
        //fetch is asyn
      fetch('http://localhost:3000/jobs/' + this.id)
      .then((res) => res.json())
      .then((data) => this.jobdetail = data)
      .catch((err) => console.log(err.message))
    
    }


    // data() {
    //     return {
    //         name: this.$route.params.id
    //     }
    // }

}
</script>

<style>

</style>