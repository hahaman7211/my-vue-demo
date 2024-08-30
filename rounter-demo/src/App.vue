<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link :to="{name: 'jobs'}" >jobs</router-link>
  </nav>

  <button @click="redirect">redirect</button>
  <button @click="back">back</button>
  <button @click="forward">forward</button>
  
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name: 'home'})
    },

    back() {
      this.$router.go(-1)
    },

    forward() {
      this.$router.go(1)
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 1opx;
  padding: 10px;
  border: 40px;
  border-radius: 40px;
}
</style>
