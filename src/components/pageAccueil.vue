<template>
    <div id="app" class="container">
        <div class="sidebar">
            <div class="sidebar-header">
                <h3>Dashboard</h3>
            </div>
            <ul class="sidebar-nav">
                <li :class="{ selected: currentPage === 'home' }" @click="showPage('home')">
                    <i :style="{ color: currentPage === 'home' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }"
                        class="fas fa-home"></i>
                    <a :style="{ color: currentPage === 'home' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Acceuil</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>
                <li :class="{ selected: currentPage === 'vehicle' }" @click="showPage('vehicle')">
                    <i :style="{ color: currentPage === 'vehicle' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }"
                        class="fas fa-car"></i>
                    <a :style="{ color: currentPage === 'vehicle' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Vehicles</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>

                <li :class="{ selected: currentPage === 'chauffeur' }" @click="showPage('chauffeur')">
                    <i :style="{ color: currentPage === 'chauffeur' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }"
                        class="fa fa-users"></i>
                    <a
                        :style="{ color: currentPage === 'chauffeur' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Chauffeurs</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>

                <li :class="{ selected: currentPage === 'services' }" @click="showPage('services')">
                    <i :style="{ color: currentPage === 'services' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }"
                        class="fas fa-cogs"></i>
                    <a :style="{ color: currentPage === 'services' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Services</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>
                <li :class="{ selected: currentPage === 'itineraire' }" @click="showPage('itineraire')">
                    <i :style="{ color: currentPage === 'itineraire' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }"
                        class="fas fa-chart-line"></i>
                    <a
                        :style="{ color: currentPage === 'itineraire' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Itineraires</a>
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
                    <i :style="{ color: currentPage === 'parametre' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }"
                        class="fa fa-cog"></i>
                    <a
                        :style="{ color: currentPage === 'parametre' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Parametres</a>
                    <i class="fas fa fa-arrow-right"></i>
                </li>
            </ul>
        </div>
        <div class="main-content">
            <div class="in_container" v-if="currentPage === 'home'">
                <div class="container1">
                    <div class="contain1">
                        <img src="..//assets/icvoiture.png" alt="">
                        <div class="p1">
                            <h4>24 véhicules disponibles actuellement</h4>
                        </div>
                    </div>
                    <div class="contain2">
                        <img src="..//assets/chaur.png" alt="">
                        <div class="p2">
                            <h4>20 chauffeurs disponibles</h4>
                        </div>
                    </div>
                    <div class="contain3">
                        <img src="..//assets/maintenance.png" alt="">
                        <div class="p3">
                            <h4>service de maintenance <br> disponible</h4>
                        </div>
                    </div>
                    <div class="contain4">
                        <img src="..//assets/aide.png" alt="">
                        <div class="p4">
                            <h4>Besoin d'aide?</h4>
                        </div>
                    </div>
                    <div class="containes1">
                        <div class="contais1">
                            <h1>Listes des opportunités <br>Signalées ce mois</h1>
                            <h3>DOUALA: Bonapriso:</h3> <span>Cinq chargements</span>
                            <h3>KRIBI: Bonadikombo:</h3> <span>Huit dépôts</span>
                            <h3>YAOUNDE: Essos:</h3> <span>Quatre chargements</span>
                            <h3>YAOUNDE: Mokolo:</h3> <span>Quinze dépôts</span>
                            <h3>Bertoua: Yadémé:</h3> <span>Sept chargements</span>


                        </div>
                        <div class="contais2">
                            <h1>Listes des alertes de ce mois</h1>
                            <h3>Maintenance:</h3> <span>Treize</span>
                            <h3>Arrêts pour chargement:</h3><span>Trente un</span>
                            <h3>Arrêts pour dépôts</h3> <span>Treize</span>
                            <h3>Arrêts pour vérification</h3> <span>Quinze</span>
                        </div>
                        <div class="contais3">
                            <h1>Prestances de services</h1>
                            <h3>intégration d'API</h3>
                            <h3>Devenir un partenaire</h3>
                            <h3>Analyse des flottes de données:</h3>
                            <h3>Solutions pour les constructeurs automobiles</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="in_container" v-if="currentPage === 'vehicle'">
                <div class="tainer3">
                    <div v-if="addVehicle" class="ajouterVehicle">
                        <i class="fas fa-window-close" @click="closePage" style="font-size: 20px; color: red" ></i>
                        <formVehicule />
                    </div>
                    <div v-if="upvehicle" class="Modifiervehicle">
                        <i class="fas fa-window-close" @click="closePage" style="font-size: 20px; color: red" ></i>
                        <forVehicule />
                </div>
                <div  v-if="attvehicle" class="attribuervehicule">
                    <i class="fas fa-window-close" @click="closePage" style="font-size: 20px; color: red" ></i> 
                    <attrivehicle />
                </div>
                    <div class="taine1">
                        <button @click="redirectToAjoutPage">AJOUTER</button>
                    </div>
                    <div class="taine2">
                        <button @click="redirectToUpdatePage">MODIFIER</button>
                    </div>
                    <div class="taine3">
                        <button @click="redirectToSupprimerPage">SUPPRIMER</button>
                    </div>
                    <div class="taine4">
                        <button @click="redirectToAttribuerPage">ATTRIBUER</button>
                    </div>
                    <table>
      <thead>
        <tr>
          <th @click="trierTableau(0)">TYPE</th>
          <th @click="trierTableau(1)">TONNAGE</th>
          <th @click="trierTableau(2)">MODEL</th>
          <th @click="trierTableau(3)">MARQUE</th>
          <th @click="trierTableau(4)">ETAT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableauData" :key="index">
          <td>{{ item.type }}</td>
          <td>{{ item.tonnage }}</td>
          <td>{{ item.model }}</td>
          <td>{{ item.marque }}</td>
          <td>{{ item.etat }}</td>
        </tr>
      </tbody>
    </table>
                </div>
                <div class="tainer2">
                </div>
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
import formVehicule from './AjoutPage.vue'
import forVehicule from './UpdatePage.vue'
import attrivehicle from './AttribuerPage.vue'

export default {

    components: {
        formVehicule,
        forVehicule, 
        attrivehicle,
    },
    data() {
        return {
            addVehicle: false,
            currentPage: 'home',
            selectedButton: 'button4',
            upvehicle: false,
            attvehicle: false,
            tableauData: [],

            vehicle: [
        { Type: '', 
        Immatriculation: '',
         State: '', 
         Model: '', 
        Tonnage: '', 
    },
         ]
        };


    },
    methods: {
        closePage(){
            this.addVehicle = false
            this.upvehicle = false
            this.attvehicle = false
        },
        selectButton(button) {
            this.selectedButton = button;
        },
        showPage(page) {
            this.currentPage = page;
        },
        redirectToAjoutPage() {
            this.addVehicle = true;
        },
        redirectToUpdatePage() {
            this.upvehicle = true;
        },
        redirectToSupprimerPage() {
          
        
        },
        redirectToAttribuerPage() {
            this.attvehicle = true;
        }
    },
    trierTableau(colonne) {
      const ordre = this.sortedOrder === 'asc' ? 'desc' : 'asc';
      this.sortedOrder = ordre;

      this.tableauData.sort((a, b) => {
        const valA = Object.values(a)[colonne];
        const valB = Object.values(b)[colonne];

        if (ordre === 'asc') {
          return valA.toString().localeCompare(valB.toString(), undefined, { numeric: true });
        } else {
          return valB.toString().localeCompare(valA.toString(), undefined, { numeric: true });
        }
      });
    }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Monda:wght@100;200;300;400;500;600;700&display=swap);
table {
    border-collapse: collapse;
    margin-top: 30px;
}

table td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

table tr:last-child td {
    border-bottom: none;
}

table th {
    background-color: #0B9777;
    padding: 10px;
    color: white;
}


.ajouterVehicle{
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 100%;
}


.attribuervehicule{
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 100%;
}

.Modifiervehicle{
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 100%;
}

.selected {
    color: white !important;
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
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
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
    margin-top: 40px !important;
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

.container1 {
    display: flex;
    justify-content: space-between;
    margin: 1%;
    width: 98%;
}

.contain1 {

    border-radius: 5px;
    width: 24.5%;
    background-color: #94cbe4;
    height: 8rem;
    position: relative;
    top: 1rem;
    box-shadow: 0PX 0PX 2PX 2PX grey;
}

.contain1 img {
    width: 20%;
    margin-top: 5%;
}

.p1 {
    background-color: #abd9ef;
    height: 8rem;
    width: 16.5rem;
    position: relative;
    bottom: 102%;
    left: 30%;
    font-size: 1.6rem;
}

.p1 h4 {
    font-size: 1.5rem;
    position: relative;
    top: 30%;
    left: 5%;
}

.contain2 {

    border-radius: 5px;
    width: 24.5%;
    background-color: #e94629;
    height: 8rem;
    position: relative;
    top: 1rem;
    box-shadow: 0PX 0PX 2PX 2PX grey;
}

.contain2 img {
    width: 20%;
    margin-top: 5%;
}

.p2 {
    background-color: #f69c8c;
    height: 8rem;
    width: 17rem;
    position: relative;
    bottom: 102%;
    left: 28%;
    font-size: 1.6rem;
}

.p2 h4 {
    font-size: 1.5rem;
    position: relative;
    top: 35%;
    left: 3%;
}

.contain3 {
    box-shadow: 0PX 0PX 2PX 2PX grey;
    border-radius: 5px;
    width: 23%;
    background-color: #278a46;
    height: 8rem;
    position: relative;
    top: 1rem;
}

.contain3 img {
    width: 20%;
    margin-top: 5%;
}

.p3 {
    background-color: #8fedb0;
    height: 8rem;
    width: 16rem;
    position: relative;
    bottom: 97%;
    left: 28%;
    font-size: 1.6rem;
}

.p3 h4 {
    font-size: 1.5rem;
    position: relative;
    top: 24%;
    left: 5%;
}

.contain4 {
    box-shadow: 0PX 0PX 2PX 2PX grey;
    border-radius: 5px;
    width: 22%;
    background-color: #f0f2f3;
    height: 8rem;
    position: relative;
    top: 1rem;
}

.contain4 img {
    width: 20%;
    margin-top: 5%;
}

.p4 {
    background-color: #d5dbde;
    height: 8rem;
    width: 15rem;
    position: relative;
    bottom: 94%;
    left: 30%;
    font-size: 1.6rem;
}

.p4 h4 {
    font-size: 1.5rem;
    position: relative;
    top: 35%;
    left: 25%;
}

.containes1 {
    position: absolute;
    margin-top: 12%;
    display: flex;
    justify-content: space-between
}

.contais1 {
    width: 31rem;
    margin: 0.1%;
    background-color: white;
    border-radius: 2%;
    box-shadow: 0PX 0PX 2PX 2PX white;
}

.contais1 h1 {
    position: relative;
    left: 4%;
    color: #5e96d2;
    margin: 10%
}

.contais1 h3 {
    font-size: 1.8rem;
    position: relative;
    left: 4%;
    color: #031d36;
    margin: 4.5%
}

.contais1 span {
    font-size: 1.6rem;
    position: relative;
    left: 4%;
}

.contais2 {
    width: 31rem;
    margin: 0.1%;
    background-color: white;
    border-radius: 2%;
    box-shadow: 0PX 0PX 2PX 2PX white;
    position: relative;
    left: 2%
}

.contais2 h1 {
    position: relative;
    left: 4%;
    color: #5e96d2;
    margin: 10%
}

.contais2 h3 {
    font-size: 1.9rem;
    position: relative;
    left: 4%;
    color: #031d36;
    margin: 4.5%
}

.contais2 span {
    font-size: 1.8rem;
    position: relative;
    left: 4%;
}

.contais3 {
    width: 31rem;
    margin: 0.1%;
    background-color: white;
    border-radius: 2%;
    box-shadow: 0PX 0PX 2PX 2PX white;
    position: relative;
    left: 4%;

}

.contais3 h1 {
    position: relative;
    left: 4%;
    color: #5e96d2;
    margin: 10%
}

.contais3 h3 {
    font-size: 1.8rem;
    position: relative;
    left: 4%;
    color: #031d36;
    margin: 4.5%
}

.tainer1 {
    font-size: 2.5rem;
    color: #031d36;

}

.tainer2 {
    font-size: 1.5rem;
}

.tainer3 {
    display: flex;
    justify-content: space-between;
    

}

.taine1 button {
    font-size: 1.4rem;
    color: white;
    height: 4rem;
    width: 13rem;
    border-radius: 5px;
    background-color: rgb(9, 119, 125);
    border: none;
    margin: 10%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}
    

.taine2 button {
    font-size: 1.4rem;
    height: 4rem;
    width: 13rem;
    color: white;
    border-radius: 5px;
    background-color: rgb(9, 119, 125);
    border: none;
    margin: 10%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}


.taine3 button {
    font-size: 1.4rem;
    height: 4rem;
    color: white;
    width: 13rem;
    border-radius: 5px; 
    background-color: rgb(9, 119, 125);;
    border: none;
    margin: 10%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}

.taine4 button {
    font-size: 1.4rem;
    height: 4rem;
    color: white;
    width: 13rem;
    border-radius: 5px;
    background-color: rgb(9, 119, 125);
    border: none;
    margin: 10%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
  margin-top: 20%;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  cursor: pointer;
  background-color: #f2f2f2;
}
th:hover {
  background-color: #ddd;
}
.sorted-asc::after {
  content: " ▲";
}
.sorted-desc::after {
  content: " ▼";
}

</style>