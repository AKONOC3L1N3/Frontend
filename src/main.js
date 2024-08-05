import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import inscription from './components/InscrirePage.vue'
import pageAccueil from './components/pageAccueil.vue'
import Connexion from './components/ConnexionPage.vue'



const routes =[
    {
        path: '/inscription', component: inscription
    },
   
    {
        path: '/pageAccueil', component: pageAccueil
    },

    {
        path: '/', component: Connexion
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