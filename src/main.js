import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router';
import inscription from './components/InscrirePage.vue'
import pageAccueil from './components/pageAccueil.vue'
import Connexion from './components/ConnexionPage.vue'
import AjoutPage from './components/AjoutPage.vue'
import UpdatePage from './components/UpdatePage.vue'
import MapContainer from './components/MapContainer.vue';
import ChauffeurPage from './components/ChauffeurPage.vue';
import AttribuerPage from './components/AttribuerPage.vue'
import AddPage from './components/AddPage.vue'
import ModifierPage from './components/ModifierPage.vue'

import homePage from "./components/homePage.vue";
import acceuil_Page from "./components/acceuil_Page.vue";
import Chauffeurs_page from "./components/Chauffeurs_page.vue";
import Services_page from "./components/Services_page.vue";
import Itineraires_page from "./components/Itineraires_page.vue";
import Maintenances_page from "./components/Maintenances_page.vue";

const routes =[
    {
        path: '/ChauffeurPage', component: ChauffeurPage
    },
    {
        path: '/inscription', component: inscription
    },
    {
        path: '/MapContainer', component: MapContainer
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
        path: '/UpdatePage',
        component: UpdatePage
    },
    {
        path: '/pageAccueil', component: pageAccueil
    },
    {
        path: '/', component: Connexion
    },
    {
        path: '/homePage', component: homePage
    },
    {
        path: '/acceuil_Page', component: acceuil_Page
    },
    {
        path: '/Chauffeurs_page', component: Chauffeurs_page
    },
    {
        path: '/Services_page', component: Services_page
    },
    {
        path: '/Itineraires_page', component: Itineraires_page
    },
    {
        path: '/Maintenances_page', component: Maintenances_page
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App);
app.use(router);
app.mount('#app');



// const loader = document.querySelector('.loader');
// window.addEventListener('loader', () =>{
//     loader.classList.add('hover');
// })