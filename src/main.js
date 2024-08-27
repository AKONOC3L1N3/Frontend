import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import inscription from './components/InscrirePage.vue'
import pageAccueil from './components/pageAccueil.vue'
import Connexion from './components/ConnexionPage.vue'
import AjoutPage from './components/AjoutPage.vue'
import UpdatePage from './components/UpdatePage.vue'
import SupprimerPage from './components/SupprimerPage.vue'
import AttribuerPage from './components/AttribuerPage.vue'
import AddPage from './components/AddPage.vue'
import ModifierPage from './components/ModifierPage.vue'

const routes =[
    {
        path: '/inscription', component: inscription
    },
    {
        path: '/ModifierPage', component: ModifierPage
    },
    {
        path: '/ AddPage ', component: AddPage 
    },
    {
        path: '/AjoutPage',
        component: AjoutPage
    },
    {
        path: '/AttribuerPage',
        component: AttribuerPage
    },
    {
        path: '/SupprimerPage',
        component: SupprimerPage
    },
    {
        path: '/UpdatePage',
        component: UpdatePage
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