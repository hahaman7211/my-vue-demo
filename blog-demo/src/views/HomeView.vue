<template>
  <div class="home">
    <h2>Ref</h2>
    <p>id: {{ myData.id }}, name: {{ myData.name }}</p>
    <button @click="but2">button</button>
    <h2>reactive</h2>
    <p>id: {{ data2.id }}, name: {{ data2.name }}</p>
    <button @click="but3">button</button>
  </div>

  <h2>computed</h2>
  <input type="text" v-model="search">
  <p>{{ search }}</p>
  <p v-for="name in filterName" :key="name">
    {{ name }}

  </p>
</template>

<script>
// @ is an alias to /src
import { ref, reactive, computed }  from 'vue'

export default {
  name: 'HomeView',

  //run first before even create()
  setup() {
    //ref is better
    const myData = ref({name:'jay', id:'1234'})

    //reactive: primitive varialbe don't work with reactive
    const data2 = reactive({name:'jay', id:'1234'})

    //computed
    const names = ref(['jay', 'hahaman', 'chieh', 'Wang'])

    const search = ref('')

    const but2 = () => {
      myData.value.name = 'hahaman'
      myData.value.id = '0000'
      //age.value = 42

      //add a class to this p.value. in this case, it's <p>
      //p.value.classList.add('testclass')

      //make the content = ''
      //p.value.textContent = 'JAY'

    }

    const but3 = () => {
      data2.name = 'reactive'
      data2.id = '11111'
    }

    const filterName = computed(()=> {
      return names.value.filter((s)=> s.includes(search.value))

    })
    //let is not react variable
    // let name = 'Jay'
    // let age = 30


    return {data2, myData, but2, but3, names, search, filterName}

  }
}
</script>
