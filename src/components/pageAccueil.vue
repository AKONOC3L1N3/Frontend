<template>
    <div id="app" class="container">
        <div class="sidebar">
            <div class="sidebar-header">
                <h3>Dashboard</h3>
            </div>
            <ul class="sidebar-nav">
                <li :class="{ selected: currentPage === 'home' }" @click="showPage('home')">
                    <i :style="{ color: currentPage === 'home' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }" class="fas fa-home"></i>
                    <a :style="{ color: currentPage === 'home' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Acceuil</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>
                <li :class="{ selected: currentPage === 'vehicle' }" @click="showPage('vehicle')">
                    <i :style="{ color: currentPage === 'vehicle' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }" class="fas fa-car"></i>
                    <a :style="{ color: currentPage === 'vehicle' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Vehicles</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>

                <li :class="{ selected: currentPage === 'chauffeur' }" @click="showPage('chauffeur')">
                    <i :style="{ color: currentPage === 'chauffeur' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }" class="fa fa-users"></i>
                    <a :style="{ color: currentPage === 'chauffeur' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Chauffeurs</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>

                <li :class="{ selected: currentPage === 'services' }" @click="showPage('services')">
                    <i :style="{ color: currentPage === 'services' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }" class="fas fa-cogs"></i>
                    <a :style="{ color: currentPage === 'services' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Services</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>
                <li :class="{ selected: currentPage === 'itineraire' }" @click="showPage('itineraire')">
                    <i :style="{ color: currentPage === 'itineraire' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }"
                        class="fas fa-chart-line"></i>
                    <a :style="{ color: currentPage === 'itineraire' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Itineraires</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>

                <li :class="{ selected: currentPage === 'maintenance' }" @click="showPage('maintenance')">
                    <i :style="{ color: currentPage === 'maintenance' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }"
                        class="fas fa-wrench"></i>
                    <a :style="{ color: currentPage === 'maintenance' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Maintenances
                    </a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>
                <li :class="{ selected: currentPage === 'parametre' }" @click="showPage('parametre')">
                    <i :style="{ color: currentPage === 'parametre' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }" class="fa fa-cog"></i>
                    <a :style="{ color: currentPage === 'parametre' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Parametres</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>
            </ul>
        </div>
        <div class="main-content">
            <div class="in_container" v-if="currentPage === 'home'">
              <div class="container1">
            <div class="text">
               <h>Nos véhicules</h>  <p> Nombre total: 50 <br>En panne: 15<br> En attente: 10 <br> En cours d'utilisation: 25 <br></p>
              </div>
              <img src="../assets/voiture.jpg" alt="">
              <div class="container2"> 
                    <div class="text1">
               <h>Nos chauffeurs </h>  <p> Nombre total: 50 <br>En panne: 15<br> En attente: 10 <br> En course: 25 <br></p>
              </div>
              <img src="../assets/chauffeur.jpg" alt="">
            </div>  
                
                <div class="container3">
                    <h1>Nos services en cours </h1>  
                    <div class="text2">
                
               <h2> Maintenance et vérification <br>des véhicules  </h2>
                <h2> Suivi des itinéraires des <br> véhicules et des chauffeurs</h2>
              <h2>Attribution de <br>nouveau véhicules </h2>
             <h2> Validation d'une opportunité </h2>
              </div>
              
            </div>  
                </div>
            </div>
            <div class="in_container" v-if="currentPage === 'vehicle'">
               2
            </div>
            <div class="in_container" v-if="currentPage === 'chauffeur'">
                3
            </div>
            <div class="in_container" v-if="currentPage === 'services'">
                4
            </div>
            <div class="in_container" v-if="currentPage === 'itineraire'">
                5
            </div>

            <div class="in_container" v-if="currentPage === 'maintenance'">
                6
            </div>

            <div class="in_container" v-if="currentPage === 'parametre'">
                7
            </div>
        </div>
    </div>
</template>

<script>


export default {

    components: {
    },
    data() {
        return {

            currentPage: 'home',
            selectedButton: 'button4',
        };
    },
    methods: {
        selectButton(button) {
            this.selectedButton = button;
        },
        showPage(page) {
            this.currentPage = page;
        },
    }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Monda:wght@100;200;300;400;500;600;700&display=swap);



.selected {
    color: white!important;
    font-weight: bold !important;
    transition: all 0.3s;
    font-size: 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

/* Global Styles */
body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif!important;
}

.container {
    display: flex;
    justify-content: space-between;
}

/* Sidebar Styles */
.sidebar {
    width: 15%;
    height: 100%;
    background-color: transparent;
    color: #092c52;
    position: fixed;
    top: 0;
    left: 0;
}

.sidebar-header {
    padding: 20px;
    background-color: transparent;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 30px;
}

.sidebar-nav {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.sidebar-nav li {
    margin-top: 40px!important;
    color: rgba(0, 0, 0, 1);
    font-size: 22px;
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;
    text-align: left;
    padding: 8px 0;
    transition: all 0.3s;
}

.sidebar-nav li i {
    padding: 0 15px;
    width: 10%;
}

.sidebar-nav li a {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    font-size: 23px;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: left;
    width: 80%;
}

.sidebar-nav li :hover {
    cursor: pointer;
}
.sidebar-nav li a:hover {
    cursor: pointer;
}
/* Main Content Styles */
.main-content {
    width: 85%;
    margin-left: 15%;
    height: 100%;
    position: fixed;
    padding: 10px;
}

.in_container {
    width: 97%;
    margin: auto;
    height: 97%;
    border-radius: 10px;
    background-color: #4444442c;
}

.fa-arrow-right {
    color: #092c52;
    align-items: end;
    justify-content: end;
    text-align: right;
}
@media (max-width: 768px) {}

.container1{
    height:18rem ;
    width: 42rem;
    border-radius: 2%;
    position: relative;
    left: 2%;
    top: 6%;
    box-shadow: 0PX 0PX 5PX 5PX gray;

    
}
.text{
    font-size: 1.5rem;
    height: 12rem;
    width: 17rem;
    position: relative;
    top: 17%;
    left: 2%;
    margin: 1%;
    
}
.container1 img{
    height: 12rem;
    width: 17rem;
   position: relative;
   bottom: 56%;
   left: 50%;
}
.container1 h{
    font-weight: bold;
}

.text1{
    font-size: 1.5rem;
    height: 12rem;
    width: 17rem;
    margin: 2%;
    position: relative;
  top: 15%;
    
}
.container2 img{
    height: 12rem;
    width: 17rem;
   position: relative;
   bottom: 56%;
   left: 50%;
}
.container2 h{
    font-weight: bold;
}
.container2{
    height:18rem ;
    width: 42rem;
    border-radius: 2%;
    box-shadow: 0PX 0PX 5PX 5PX gray;
    position: relative;
    left: 126%;
    bottom: 142%;
}  

.text2{
    display: flex;
    justify-content: space-between;
    
}
.container3 img{
    height: 12rem;
    width: 17rem;
   position: relative;
   bottom: 56%;
   left: 50%;
}
.container3 h{
    font-weight: bold;
}
.container3{
    height:26rem ;
    width: 82rem;
    border-radius: 2%;
    box-shadow: 0PX 0PX 5PX 5PX gray;
    position: relative;
    bottom: 142%;
    margin: 8%;
    bottom: 140%;
    background-color: #092c52;
    left: 8%;
}
.container3 h2{
   color: rgb(221, 208, 208);
   margin: 1%;
}
.container3 h1{
   color: rgb(23, 145, 197);
   margin: 5%;

}
</style>  