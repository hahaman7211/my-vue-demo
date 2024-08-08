<template>
  <h1>my name is {{ name }}</h1>

  <!-- modal1 -->
  <div v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="x">sign up url</a>
        <a href="x">this is a url</a>
      </template>
      <h1>sign up</h1> <!-- default slot -->
      <p>this is a slot example</p> <!-- default slot -->
    </Modal>
  </div>

   <!-- modal2 -->
  <div v-if="showModal2">
    <Modal @close="toggleModal2">
      <template v-slot:modal2link>
        <a href="x">modal2 url</a>
      </template>
      <h1>modal2 sign up</h1> <!-- default slot -->
      <p>this is a slot for modal2</p> <!-- default slot -->
    </Modal>
  </div>

    <!-- <input type="text" ref="button"> -->
  <button @click="toggleModal">show modal</button>
  <button @click="toggleModal2">show modal 2</button>


  
</template>

<script>
import Modal from './components/ModalComponent'

//this the object in this compoment and it will be exported
export default {  
  name: 'App',

  components: {
    Modal
  },

  data() {
    return {
      name: 'Jay',
      showModal: false,
      showModal2: false
    }
  },

  methods: {
    // handlebutton() {
    //   this.$refs.button.classList.add('active')
    // },

    toggleModal() {
      this.showModal = !this.showModal;
    },

    toggleModal2() {
      this.showModal2 = !this.showModal2;
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
  color: #2c3e50;
  margin-top: 60px;
}


</style>
