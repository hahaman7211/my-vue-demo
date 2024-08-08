<template>
    <div class="block" v-if="showBlock" @click="endTimer">
        click me
        <h1>{{randomTime}}</h1>
        <h2>{{ isPlay }}</h2>
    </div>

</template>

<script>
export default {
    props: ['randomTime', 'isPlay'],

    data () {
        return {
            showBlock: false,
            startTime: 0,
            endTime: 0,
            reactTime: 0
        }
    },
    
    mounted() {
        console.log("blockComponent is mounted")
        setTimeout(()=> {
            console.log('randomTime: ' + this.randomTime)
            this.showBlock = true
            this.startTimer()
        }, this.randomTime)
    },

    unmounted() {
        console.log("blockComponent is unmounted")
    },

    methods: {
        closeBlock() {
            this.$emit('closeEvent')
        },

        startTimer() {
            this.startTime = Date.now();
            console.log('start time: ' + this.startTime)
        },

        endTimer() {
            this.endTime = Date.now();
            this.reactTime = this.endTime - this.startTime
            console.log('end time: ' + this.endTime )
            console.log('reaction time: ' + this.reactTime)
            this.$emit('end', this.reactTime)
        }
    }


}

</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }

</style>