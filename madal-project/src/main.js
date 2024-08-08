import { createApp } from 'vue'
import App from './App.vue'   //App.vue is a compoment being imported to this js
import './assets/global.css'
 
//mount the root compoment(App.vue) to #app in html
createApp(App).mount('#app')  
