<template>
  <h1>Reaction Timer</h1>
  <h2>start: {{ isPlay }}</h2>
  <button @click="start" :disabled="isPlay">start</button>


  <!-- block component -->
  <div v-if="isPlay">
    <!-- :isPlay is binding the data properties to blockcomponent -->
    <Block :randomTime=randomTime :isPlay="isPlay" @end="endGame"/>
  </div>

  <!-- Result component -->
  <Result v-if="showResult" :score="score"/>
  
  
</template>



<script>
import Block from './components/BlockComponent'
import Result from './components/ResultComponent'

export default {
  name: 'App',

  components: {
    Block,
    Result
  },

  data() {
    return {
      randomTime: null,
      isPlay: false,
      score: null,
      showResult: false
    }
  },

  methods: {
    start() {
      this.isPlay = true,
      this.randomTime = 50 + Math.random()*3000
      this.showResult = false
    },

    endGame(reactTime) {
      this.isPlay = false
      this.score = reactTime
      this.showResult = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
