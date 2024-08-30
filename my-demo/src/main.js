import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createStore } from "vuex"
//import axios from 'axios'



require("./mock.js")

const store = createStore({
    state: {
      token: ''
    },

    mutations: {

		SET_TOKEN: (state, token) => {
			state.token = token
			localStorage.setItem("token", token)
		},


	},

	actions: {

    }

	// modules: {
	// 	menus
	// }
  })


const app = createApp(App)
app.use(ElementPlus).use(router).use(store).mount('#app')
//use(axios)
