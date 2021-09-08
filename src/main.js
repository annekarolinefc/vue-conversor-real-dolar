import { createApp } from 'vue'
import App from './App.vue'

//Importando o framework no main.js
import PrimeVue from "primevue/config";

//Importando os componentes que irei utilizar no projeto
import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
//Importando os estilos CSS
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'; 



const app = createApp(App);
//configurando o uso do primevue
app.use(PrimeVue);
//registrando os componetes
app.component("Toolbar", Toolbar);
app.component("Button", Button);
app.component("InputText", InputText);

app.mount('#app')
