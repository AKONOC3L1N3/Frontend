import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import INSCRIRE from './components/InscrirePage.vue'
import pageAccueil from './components/pageAccueil.vue'




const routes =[
    {
        path: '/InscrirePage', component: INSCRIRE
    },
   
    {
        path: '/', component: pageAccueil
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App);
app.use(router);
app.mount('#app');



const loader = document.querySelector('.loader');
window.addEventListener('loader', () =>{
    loader.classList.add('hover');
})