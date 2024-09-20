import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router';

import pageAccueil from './components/pageAccueil.vue'
import AttribuerPage from './components/AttribuerPage.vue'


import inscription from './components/InscrirePage.vue'
import Connexion from './components/ConnexionPage.vue'
import homePage from "./components/admin/homePage.vue";
import acceuil_Page from "./components/admin/acceuil_Page.vue";
import vehicule_Page from "./components/admin/vehicule_Page.vue";
import Chauffeurs_page from "./components/admin/Chauffeurs_page.vue";
import Services_page from "./components/admin/Services_page.vue";
import Itineraires_page from "./components/admin/Itineraires_page.vue";
import Maintenances_page from "./components/admin/Maintenances_page.vue";
import MapContainer from "./components/map/MapContainer.vue";


import ChauffeurPage from './components/chauffeur/ChauffeurPage.vue';

const routes =[
    {
        path: '/AttribuerPage',
        component: AttribuerPage
    },
    {
        path: '/acceuil_Page', component: acceuil_Page
    },
    {
        path: '/pageAccueil', component: pageAccueil
    },


    // authentication
    {
        path: '/', component: Connexion
    },
    {
        path: '/inscription', component: inscription
    },

    // Admin
    {
        path: '/homePage', component: homePage
    },
    {
        path: '/vehicule_Page', component: vehicule_Page
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

    // chauffeur
    {
        path: '/ChauffeurPage', component: ChauffeurPage
    },
    

    // Map
    {
        path: '/map', component: MapContainer
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