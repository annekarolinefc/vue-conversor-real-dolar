import { createApp } from 'vue'
import App from './App.vue'

//Importando o framework no main.js
import PrimeVue from "primevue/config";

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app')
