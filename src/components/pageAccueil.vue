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
                    <div class="contain1">
                    <img src="..//assets/icvoiture.png" alt="">
                    <p><h4>25 véhicules disponibles actuellement</h4> </p>
                </div>
                <div class="contain2">
                    <img src="..//assets/chaur.png" alt="">
                    <p> <h4>20 chauffeurs disponibles</h4></p>
                </div>
                <div class="contain3">
                    <img src="..//assets/maintenance.png" alt="">
                    <p><h4>Service de maintenance <br> disponible</h4></p>
                </div>
                <div class="contain4">
                    <img src="..//assets/aide.png" alt="">
                    <p><h4>Besoin d'aide?</h4></p>
                </div>
            <div class="container2">
                <div class="containe1">
                    <h2></h2>
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
    display: flex;
    justify-content: space-between;
    margin: 1%;
    width: 98%;
}
.contain1{

    border-radius: 5px;
    width: 24.5% ;
    background-color: #94cbe4;
    height: 8rem;
    position: relative;
    top: 1rem;
    box-shadow: 0PX 0PX 2PX 2PX grey;
}
.contain1 img{
    width: 20%;
    margin-top: 5%;
}
.contain1 p{
    background-color: #abd9ef; 
    height: 8rem;
    width: 16.5rem;
    position: relative;
    bottom: 97%;
    left: 30%;
    font-size: 1.6rem;
}
.contain1 h4{
    font-size: 1.5rem;
    position: relative;
    bottom: 180%;
    left: 32%;
}
.contain2{

border-radius: 5px;
width: 24.5% ;
background-color: #e94629;
height: 8rem;
position: relative;
top: 1rem;
box-shadow: 0PX 0PX 2PX 2PX grey;
}

.contain2 img{
width: 20%;
margin-top: 5%;
}
.contain2 p{
background-color: #f69c8c; 
height: 8rem;
width: 17rem;
position: relative;
bottom: 97%;
left: 28%;
font-size: 1.6rem;
}
.contain2 h4{
font-size: 1.5rem;
position: relative;
bottom: 180%;
left: 30%;
}

.contain3{
box-shadow: 0PX 0PX 2PX 2PX grey;
border-radius: 5px;
width: 23% ;
background-color: #278a46;
height: 8rem;
position: relative;
top: 1rem;
}
.contain3 img{
width: 20%;
margin-top: 5%;
}
.contain3 p{
background-color: #8fedb0; 
height: 8rem;
width: 16rem;
position: relative;
bottom: 92%;
left: 28%;
font-size: 1.6rem;
}
.contain3 h4{
font-size: 1.5rem;
position: relative;
bottom: 180%;
left: 30%;
}

.contain4{
box-shadow: 0PX 0PX 2PX 2PX grey;
border-radius: 5px;
width: 22% ;
background-color: #f0f2f3;
height: 8rem;
position: relative;
top: 1rem;
}
.contain4 img{
width: 20%;
margin-top: 5%;
}
.contain4 p{
background-color: #d5dbde; 
height: 8rem;
width: 15rem;
position: relative;
bottom: 89%;
left: 30%;
font-size: 1.6rem;
}
.contain4 h4{
font-size: 1.5rem;
position: relative;
bottom: 180%;
left: 40%;
}
</style>  