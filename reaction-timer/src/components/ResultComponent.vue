<template>
      <div class="result">
        <h3>Reaction time: {{score}} ms</h3>
        <h2>{{ rank }}</h2>
    </div>
</template>

<script>
export default {
    props: ['score'],

    data() {
        return {
            rank: null
        }

    },

    mounted() {
        if(this.score < 250) {
            this.rank = "great"
        }
        else if(this.score < 400) {
            this.rank = "ok"
        }
        else {
            this.rank = "bad"
        }

    }
}
</script>

<style>

</style>