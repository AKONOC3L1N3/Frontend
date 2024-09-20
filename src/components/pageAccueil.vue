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
          <i :style="{ color: currentPage === 'chauffeur' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }"
            class="fa fa-users"></i>
          <a :style="{ color: currentPage === 'chauffeur' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Chauffeurs</a>
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
        
        <!-- <li :class="{ selected: currentPage === 'parametre' }" @click="showPage('parametre')">
          <i :style="{ color: currentPage === 'parametre' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }" class="fa fa-cog"></i>
          <a :style="{ color: currentPage === 'parametre' ? '#202020c9' : 'rgba(0, 0, 0, 0.8)' }">Parametres</a>
          <i class="fas fa fa-arrow-right"></i>
        </li> -->
      </ul>

      <div class="logout">
        <router-link class="menu" to="/" @click="logout">
          <span>Deconexion</span>
          <i style="color: red;" class="fa fa-power-off"></i>
        </router-link>
      </div>
    </div>

    <div class="main-content">
      <div class="in_container" v-if="currentPage === 'home'">
        <div class="top">
          <div class="top-blocks">
            <img src="..//assets/icvoiture.png" alt="">
            <span>24 véhicules disponibles actuellement</span>
          </div>

          <div class="top-blocks">
            <img src="..//assets/chaur.png" alt="">
            <span>20 chauffeurs disponibles</span>
          </div>

          <div class="top-blocks">
            <img src="..//assets/maintenance.png" alt="">
            <span>service de maintenance <br> disponible</span>
          </div>
          
          <!-- <div class="top-blocks">
            <img src="..//assets/aide.png" alt="">
            <span>Besoin d'aide?</span>
          </div> -->
        </div>

        <div class="bottom">
          <div class="contais">
            <h1>Listes des opportunités <br>Signalées ce mois</h1>
            <h3>DOUALA: Bonapriso:</h3> <span>Cinq chargements</span>
            <h3>KRIBI: Bonadikombo:</h3> <span>Huit dépôts</span>
            <h3>YAOUNDE: Essos:</h3> <span>Quatre chargements</span>
            <h3>YAOUNDE: Mokolo:</h3> <span>Quinze dépôts</span>
            <h3>Bertoua: Yadémé:</h3> <span>Sept chargements</span>
          </div>

          <div class="contais">
            <h1>Listes des alertes de ce mois</h1>
            <h3>Maintenance:</h3> <span>Treize</span>
            <h3>Arrêts pour chargement:</h3><span>Trente un</span>
            <h3>Arrêts pour dépôts</h3> <span>Treize</span>
            <h3>Arrêts pour vérification</h3> <span>Quinze</span>
          </div>

          <div class="contais">
            <h1>Prestances de services</h1>
            <h3>intégration d'API</h3>
            <h3>Devenir un partenaire</h3>
            <h3>Analyse des flottes de données:</h3>
            <h3>Solutions pour les constructeurs automobiles</h3>
          </div>
        </div>
      </div>

      <div class="in_container" v-if="currentPage === 'vehicle'">
        <div v-if="addVehicle" class="ajouter">
          <i class="fas fa-window-close" @click="closePage" style="font-size: 20px; color: red"></i>
          <formVehicule />
        </div>
        <div v-if="upvehicle" class="Modifier">
          <i class="fas fa-window-close" @click="closePage" style="font-size: 20px; color: red"></i>
          <forVehicule />
        </div>
        <div v-if="attvehicle" class="attribuer">
          <i class="fas fa-window-close" @click="closePage" style="font-size: 20px; color: red"></i>
          <attrivehicle />
        </div>
        <div class="tainer3">
          <div class="trainContain">
              <div class="trainContainIn">
                <button @click="redirectToAjoutPage">AJOUTER</button>
              <button @click="redirectToAttribuerPage">ATTRIBUER</button>
              </div>
          </div>

        </div>
        <div class="tainer2">
          <table>
            <thead>
              <tr>
                <th @click="trierTableau(0)">NOM</th>
                <th @click="trierTableau(1)">TYPE</th>
                <th @click="trierTableau(2)">TONNAGE</th>
                <th @click="trierTableau(3)">MODEL</th>
                <th @click="trierTableau(4)">ETAT</th>
                <th @click="trierTableau(5)">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vehicle in vehicles" :key="vehicle.vehicleId">
                <td>{{ vehicle.name }}</td>
                <td>{{ vehicle.type }}</td>
                <td>{{ vehicle.tonnage }}</td>
                <td>{{ vehicle.model }}</td>
                <td>{{ vehicle.state }}</td>
                <td>
                  <img src="@/assets/delete-icon.png" alt="Delete" @click="deleteVehicle(vehicle.id, vehicles)"
                    style="cursor: pointer;" class="icone" />
                  <img src="@/assets/edit-icon.png" alt="edit" @click="editVehicle(vehicle.id, vehicles)"
                    style="cursor: pointer;" class="icone" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="in_container" v-if="currentPage === 'chauffeur'">
        <div v-if="addDriver" class="ajouter">
          <i class="fas fa-window-close" @click="closePage" style="font-size: 20px; color: red"></i>
          <formDriver />
        </div>
        <div v-if="ModDriver" class="Modifier">
          <i class="fas fa-window-close" @click="closePage" style="font-size: 20px; color: red"></i>
          <forDriver />
        </div>

        <div class="tainer3">
          <div class="trainContain">
            <div class="taine">
              <button @click="redirectToAddPage">AJOUTER</button>
            </div>
          </div>
        </div>
        <div class="tainer2">
          <table>
            <thead>
              <tr>
                <th @click="trierTableau(0)">Driving License</th>
                <th @click="trierTableau(1)">Nom</th>
                <th @click="trierTableau(2)">Email</th>
                <th @click="trierTableau(3)">Date de naissance</th>
                <th @click="trierTableau(4)">Vehicule</th>
                <th @click="trierTableau(5)">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="DriverProfils in DriverProfil" :key="DriverProfils.id">
                <td>{{ DriverProfils.DrivingLicense }}</td>
                <td>{{ DriverProfils.name }}</td>
                <td>{{ DriverProfils.email }}</td>
                <td>{{ new Date(DriverProfils.DateOfBirth).toLocaleDateString() }}</td>
                <td>{{ DriverProfils.vehicleId }}</td>
                <td>
                  <img src="@/assets/delete-icon.png" alt="Delete" @click="deleteDriver(DriverProfils.id)"
                    style="cursor: pointer;" class="icone" />
                  <img src="@/assets/edit-icon.png" alt="Edit" @click="openEditModal(DriverProfils)"
                    style="cursor: pointer;" class="icone" />
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Modal d'édition -->
          <div v-if="isEditModalOpen" class="modali">
            <div class="modal-content">
              <span class="close" @click="closeEditModal">&times;</span>
              <h2>Modifier le Profil</h2>
              <form @submit.prevent="updateDriverProfil">
                <label for="drivingLicense">Driving License:</label>
                <input type="text" v-model="editForm.DrivingLicense" required />

                <label for="name">Nom:</label>
                <input type="text" v-model="editForm.name" required />

                <label for="email">Email:</label>
                <input type="email" v-model="editForm.email" required />

                <label for="dateOfBirth">Date de Naissance:</label>
                <input type="date" v-model="editForm.DateOfBirth" required />

                <label for="vehicleId">Véhicule:</label>
                <input type="text" v-model="editForm.vehicleId" required />

                <button type="submit">Enregistrer</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="in_container" v-if="currentPage === 'services'">
        <div id="appi">
          <header>
            <h1>Présentation des Services</h1>
            <p>Bienvenue dans l'application de gestion de flotte automobile. Explorez nos services :</p>
          </header>

          <div class="services-overview">
            <div class="service-box">
              <h2>Gestion des Véhicules</h2>
              <p>Gérez l'ajout, la modification, et la suppression des véhicules de votre flotte.</p>
            </div>
            <div class="service-box">
              <h2>Gestion des Chauffeurs</h2>
              <p>Suivez les chauffeurs, attribuez des véhicules, et gérez leurs itinéraires.</p>
            </div>
            <div class="service-box">
              <h2>Gestion des Itinéraires</h2>
              <p>Planifiez et optimisez les itinéraires pour vos chauffeurs et véhicules.</p>
            </div>
          </div>

          <div class="opportunity-section">
            <h2>Opportunités</h2>
            <p>Découvrez et signalez des opportunités pour optimiser la gestion de votre flotte.</p>
            <button @click="showOpportunityForm">Signaler Opportunité</button>
          </div>

          <!-- Formulaire Pop-Up -->
          <div v-if="isOpportunityFormVisible" class="popup-form">
            <div class="form-container">
              <h3>Signaler une Opportunité</h3>
              <form @submit.prevent="submitOpportunity">
                <label for="description">Description :</label>
                <textarea id="description" v-model="opportunity.description" required></textarea>

                <label for="address">Adresse :</label>
                <input type="text" id="address" v-model="opportunity.address" required>

                <label for="date">Date :</label>
                <input type="date" id="date" v-model="opportunity.date" required>

                <button type="submit">Soumettre</button>
                <button type="button" @click="closeOpportunityForm">Annuler</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="in_container" v-if="currentPage === 'itineraire'">
        <div>
          <div class="ittinéraire">
            <!-- Bouton pour ouvrir le formulaire pop-up -->
            <button @click="showModal = true">Planifier un Itinéraire</button>
          </div>
          <!-- Formulaire de planification en pop-up -->
          <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
              <h2>Planification d'un Itinéraire</h2>
              <form @submit.prevent="planRoute">

                <!-- Sélection du véhicule -->
                <div class="form-group">
                  <label for="vehicle">Véhicule :</label>
                  <select v-model="selectedVehicle" required>
                    <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                      {{ vehicle.model }} - {{ vehicle.registration }}
                    </option>
                  </select>
                </div>

                <!-- Sélection du chauffeur -->
                <div class="form-group">
                  <label for="driver">Chauffeur :</label>
                  <select v-model="selectedDriver" required>
                    <option v-for="driver in drivers" :key="driver.id" :value="driver.id">
                      {{ driver.first_name }} {{ driver.last_name }}
                    </option>
                  </select>
                </div>

                <!-- Point de départ -->
                <div class="form-group">
                  <label for="start_point">Point de Départ :</label>
                  <input type="text" v-model="startPoint" required />
                </div>

                <!-- Point d'arrivée -->
                <div class="form-group">
                  <label for="end_point">Point d'Arrivée :</label>
                  <input type="text" v-model="endPoint" required />
                </div>

                <!-- Bouton de soumission -->
                <button type="submit">Planifier l'Itinéraire</button>
                <button type="button" @click="closeModal">Fermer</button>
              </form>
            </div>
          </div>

        </div>
        <div class="map-container">
          <MapComponent :routes="routes" />
        </div>
      </div>

      <div class="in_container" v-if="currentPage === 'maintenance'">
        <div class="container">
          <!-- Table for maintenance presentation -->
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>NOM</th>
                  <th>TYPE</th>
                  <th>DATE</th>
                  <th>VEHICULE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="maintenance in maintenances" :key="maintenance.id">
                  <td>{{ maintenance.nom }}</td>
                  <td>{{ maintenance.type }}</td>
                  <td>{{ maintenance.date }}</td>
                  <td>{{ maintenance.vehicule }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Buttons for Add, Edit, and Delete -->
          <!-- <div class="buttons-container">
            <button @click="showPopup('add')">AJOUTER</button>
            <button @click="showPopup('edit')">MODIFIER</button>
            <button @click="showPopup('delete')">SUPPRIMER</button>
          </div> -->

          <!-- Pop-up Form for Adding/Editing -->
          <div v-if="showForm && (actionType === 'add' || actionType === 'edit')" class="popup">
            <div class="popup-content">
              <span class="close" @click="closePopup">&times;</span>
              <h3>{{ formTitle }}</h3>
              <form @submit.prevent="handleSubmit">
                <label for="nom">NOM</label>
                <input type="text" id="nom" v-model="form.nom" required>

                <label for="type">TYPE</label>
                <input type="text" id="type" v-model="form.type" required>

                <label for="date">DATE</label>
                <input type="date" id="date" v-model="form.date" required>

                <label for="vehicule">VEHICULE</label>
                <input type="text" id="vehicule" v-model="form.vehicule" required>

                <button type="submit">{{ formAction }}</button>
              </form>
            </div>
          </div>

          <!-- Pop-up Form for Deleting -->
          <div v-if="showForm && actionType === 'delete'" class="popup">
            <div class="popup-content">
              <span class="close" @click="closePopup">&times;</span>
              <h3>Supprimer Maintenance</h3>
              <form @submit.prevent="handleDelete">
                <label for="delete-maintenance">Choisissez une maintenance à supprimer</label>
                <select id="delete-maintenance" v-model="selectedMaintenance" required>
                  <option v-for="maintenance in maintenances" :key="maintenance.id" :value="maintenance.id">
                    {{ maintenance.nom }} - {{ maintenance.date }}
                  </option>
                </select>
                <button type="submit">Supprimer</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="in_container" v-if="currentPage === 'parametre'">
        <div class="settings-container">
          <div class="box admin-management">
            <h2>Gestion des Administrateurs</h2>
            <button @click="showAddAdminForm = true" class="add-button">Ajouter un Admin</button>
            <div class="icons">
              <img src="@/assets/delete-icon.png" alt="Supprimer" @click="deleteAdmin" class="icon delete-icon">
              <img src="@/assets/edit-icon.png" alt="Modifier" @click="editAdmin" class="icon edit-icon">
            </div>
            <!-- Formulaire pop-up pour ajouter un admin -->
            <div v-if="showAddAdminForm" class="popup">
              <div class="popup-contents">
                <h3>Ajouter un Administrateur</h3>
                <form @submit.prevent="addAdmin">
                  <label>Email</label>
                  <input v-model="newAdmin.email" type="email" required>
                  <label>Nom</label>
                  <input v-model="newAdmin.name" type="text" required>
                  <label>Type</label>
                  <input v-model="newAdmin.type" type="text" required>
                  <label>Mot de Passe</label>
                  <input v-model="newAdmin.password" type="password" required>
                  <label>Prénom</label>
                  <input v-model="newAdmin.surname" type="text" required>
                  <button type="submit">Ajouter</button>
                  <button type="button" @click="showAddAdminForm = false">Annuler</button>
                </form>
              </div>
            </div>
          </div>

          <div class="box mission-display">
            <h2>Affichage des Missions de la Flotte</h2>
          </div>

          <div class="box cargo-list">
            <h2>Liste des Marchandises</h2>
          </div>

          <div class="box incident-report">
            <h2>Présentation des Incidents</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import attrivehicle from './AttribuerPage.vue'
import axios from 'axios'
import config from "../config";

export default {

  components: {
    attrivehicle,
  },
  data() {
    return {
      addVehicle: false,
      currentPage: 'home',
      selectedButton: 'button4',
      upvehicle: false,
      attvehicle: false,
      DriverProfil: [],
      tableauData: [],
      tabData: [],
      addDriver: false,
      ModDriver: false,
      showModal: false,       // Contrôle de l'affichage du pop-up
      vehicles: [],           // Liste des véhicules récupérés depuis l'API
      selectedVehicle: null,  // Véhicule sélectionné
      selectedDriver: null,   // Chauffeur sélectionné
      startPoint: '',         // Point de départ saisi
      endPoint: '',

      successMessage: '',
      errorMessage: '',

      isEditModalOpen: false,
      editForm: {
        DrivingLicense: '',
        name: '',
        email: '',
        DateOfBirth: '',
        vehicleId: '',
      },
      currentDriverId: null,

      isOpportunityFormVisible: false,
      opportunity: {
        description: '',
        address: '',
        date: '',
      },


      showForm: false,
      actionType: '',
      formTitle: '',
      formAction: '',
      form: {
        nom: '',
        type: '',
        date: '',
        vehicule: ''
      },
      maintenances: [], // This will hold the list of maintenances
      selectedMaintenance: '',
      showAddAdminForm: false,
      newAdmin: {
        email: '',
        name: '',
        type: '',
        password: '',
        surname: ''
      },
      admins: [], // Liste des administrateurs
      missions: [], // Liste des missions
      cargos: [], // Liste des marchandises
      incidents: [], // Liste des incidents
      selectedAdmin: null, // Administrateur sélectionné pour modification ou suppression

    };


  },
  methods: {
    closePage() {
      this.addVehicle = false
      this.upvehicle = false
      this.attvehicle = false
      this.addDriver = false
      this.ModDriver = false

    },
    
    logout() {
      localStorage.removeItem('userId')
      localStorage.removeItem('isAuthentify')
      this.$router.push('/');
      window.location.reload();
    },

    openEditModal(driverProfil) {
      this.editForm = { ...driverProfil }; // Remplir le formulaire avec les données existantes
      this.currentDriverId = driverProfil.id;
      this.isEditModalOpen = true;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
      this.editForm = {}; // Réinitialiser le formulaire
    },

    async updateDriverProfil() {
      try {
        const token = localStorage.getItem('token');
        // console.log("Voici l'id de la tache:");
        // console.log(this.movedItemId);
        const response = await axios.patch(`${config.apiBaseUrl}/driverprofil/${this.currentDriverId}`, {
          // Les données de la tâche à mettre à jour
          DrivingLicense: this.editForm.DrivingLicense,
          name: this.editForm.name,
          email: this.editForm.email,
          vehicleId: this.editForm.vehicleId,
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        this.driverEdit = response.data;
        this.closeEditModal();
        console.log("Tache modifiée avec succès");
        window.location.reload();

      } catch (error) {
        console.error('Erreur lors de la modification de la tâche :', error);
      }
    },

    async fetchData() {
      try {
        const [adminsRes, missionsRes, cargosRes, incidentsRes] = await Promise.all([
          axios.get('/api/admins'),
          axios.get('/api/missions'),
          axios.get('/api/cargos'),
          axios.get('/api/incidents')
        ]);
        this.admins = adminsRes.data;
        this.missions = missionsRes.data;
        this.cargos = cargosRes.data;
        this.incidents = incidentsRes.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    },
    async addAdmin() {
      try {
        await axios.post('/api/admins', this.newAdmin);
        this.newAdmin = { email: '', name: '', type: '', password: '', surname: '' };
        this.showAddAdminForm = false;
        this.fetchData(); // Recharger les données après ajout
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'administrateur:", error);
      }
    },
    async deleteAdmin() {
      if (this.selectedAdmin) {
        try {
          await axios.delete(`/api/admins/${this.selectedAdmin.id}`);
          this.selectedAdmin = null;
          this.fetchData(); // Recharger les données après suppression
        } catch (error) {
          console.error("Erreur lors de la suppression de l'administrateur:", error);
        }
      }
    },


    async deleteDriver(id) {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce chauffeur?")) {
        try {
          const response = await fetch(`${config.apiBaseUrl}/driverprofil/${id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            // Filtrer le chauffeur supprimé de la liste
            this.DriverProfil = this.DriverProfil.filter(driver => driver.id !== id);
            alert("Le chauffeur a été supprimé avec succès.");
          } else {
            alert("Une erreur s'est produite lors de la suppression du chauffeur.");
          }
        } catch (error) {
          console.error("Erreur lors de la suppression du chauffeur :", error);
        }
      }
    },

    async deleteVehicle(vehicleId) {
      // Demander confirmation avant de supprimer le véhicule
      if (confirm("Êtes-vous sûr de vouloir supprimer ce véhicule?")) {
        try {
          // Envoie la requête de suppression au backend
          await axios.delete(`${config.apiBaseUrl}/vehicles/${vehicleId}`);

          // Met à jour la liste des véhicules après suppression
          this.vehicles = this.vehicles.filter(vehicle => vehicle.vehicleId !== vehicleId);

          // Affiche un message de succès
          this.successMessage = 'Véhicule supprimé avec succès !';
          alert(this.successMessage);
        } catch (error) {
          // Affiche un message d'erreur en cas d'échec
          this.errorMessage = 'Échec lors de la suppression : ' + (error.response?.data?.message || error.message);
          alert(this.errorMessage);
        }
      }
    },


    async updateAdmin() {
      if (this.selectedAdmin) {
        try {
          await axios.put(`/api/admins/${this.selectedAdmin.id}`, this.selectedAdmin);
          this.selectedAdmin = null;
          this.fetchData(); // Recharger les données après modification
        } catch (error) {
          console.error("Erreur lors de la mise à jour de l'administrateur:", error);
        }
      }
    },

    prepareToDeleteAdmin() {
      // Préparer la suppression de l'administrateur (par exemple, en affichant un prompt de confirmation)
    },
    prepareToEditAdmin() {
      // Préparer la modification de l'administrateur (par exemple, en affichant un formulaire de modification)
    },
    selectAdminForEdit(admin) {
      this.selectedAdmin = { ...admin };
      // Afficher le formulaire de modification si nécessaire
    },
    selectAdminForDelete(admin) {
      this.selectedAdmin = admin;
      // Afficher la confirmation de suppression si nécessaire
    },

    showOpportunityForm() {
      this.isOpportunityFormVisible = true;
    },
    closeOpportunityForm() {
      this.isOpportunityFormVisible = false;
    },

    submitOpportunity() {
      // Logique pour soumettre l'opportunité
      console.log('Opportunité soumise :', this.opportunity);
      this.closeOpportunityForm();
    },

    showPopup(action) {
      this.actionType = action;
      if (action === 'add') {
        this.formTitle = 'Ajouter Maintenance';
        this.formAction = 'Ajouter';
      } else if (action === 'edit') {
        this.formTitle = 'Modifier Maintenance';
        this.formAction = 'Modifier';
      } else if (action === 'delete') {
        this.formTitle = 'Supprimer Maintenance';
      }
      this.showForm = true;
    },
    closePopup() {
      this.showForm = false;
      this.resetForm();
    },
    resetForm() {
      this.form = {
        nom: '',
        type: '',
        date: '',
        vehicule: ''
      };
      this.selectedMaintenance = null;
    },
    handleSubmit() {
      if (this.actionType === 'add') {
        console.log('Adding maintenance:', this.form);
        // Add your logic to add a maintenance
      } else if (this.actionType === 'edit') {
        console.log('Editing maintenance:', this.form);
        // Add your logic to edit a maintenance
      }
      this.closePopup();
    },
    handleDelete() {
      if (this.selectedMaintenance) {
        console.log('Deleting maintenance with ID:', this.selectedMaintenance);
        // Add your logic to delete a maintenance
      }
      this.closePopup();
    },
    async fetchVehicles() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.apiBaseUrl}/vehicles`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.vehicles = response.data;
        console.log("Voici la liste des vehicles");
        console.log(this.vehicles);
      } catch (error) {
        this.errorMessage = 'Erreur lors de la récupération des véhicules : ' + (error.response ? error.response.data.message : error.message);
      }
    },

    async fetchDriverProfil() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.apiBaseUrl}/driverprofil`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.DriverProfil = response.data;
        console.log("Voici la liste des chauffeurs");
        console.log(this.DriverProfil);
      } catch (error) {
        this.errorMessage = 'Erreur lors de la récupération des chauffeurs : ' + (error.response ? error.response.data.message : error.message);
      }
    },




    async planRoute() {
      try {
        const response = await fetch('http://192.168.100.97:3000/api/plan-route', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            vehicle_id: this.selectedVehicle,
            driver_id: this.selectedDriver,
            start_point: this.startPoint,
            end_point: this.endPoint
          })

        });

        if (response.ok) {
          alert('Itinéraire planifié avec succès !');
          this.closeModal(); // Fermer le pop-up après la soumission
        } else {
          alert('Erreur lors de la planification.');
        }
      } catch (error) {
        console.error('Erreur lors de la planification :', error);
      }

    },

    // Méthode pour fermer le formulaire pop-up
    closeModal() {
      this.showModal = false;
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
    redirectToAddPage() {
      this.addDriver = true;
    },
    redirectToModifierPage() {
      this.ModDriver = true;
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
  },

  mounted() {

    this.fetchVehicles();

    this.fetchData();
    this.fetchDriverProfil();

    this.maintenances = [
      { id: '', nom: '', type: '', date: '', vehicule: '' },

    ];

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
  text-align: center;
}

table th {
  background-color: white;
  color: rgb(5, 5, 69)!important;
  color: white;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 25px;
  font-weight: 700;
}


.ajouter {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;

}


.attribuer {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;

}

.Modifier {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
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

.sidebar {
  width: 15%;
  height: 100%;
  background-color: white;
  color: #092c52;
  position: fixed;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
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
  color: rgba(0, 0, 0, 1) ;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  /* width: 95%; */
  margin: auto;
  text-align: left;
  padding: 8px 0;
  transition: all 0.3s;
}

.sidebar-nav li i {
  padding: 0 15px;
  /* width: 10%; */
}

.sidebar-nav li a {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  font-size: 1rem;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: left;
  /* width: 80%; */
}

.sidebar-nav li :hover {
  cursor: pointer;
}

.sidebar-nav li a:hover {
  cursor: pointer;
}

.logout{
  padding: 0 20px;
  margin: 0;
  width: 100%;
}

.logout a{
  display: flex;
  gap: 15px;
  text-decoration: none;
  color: #092c52;
}

/* Main Content Styles */
.main-content {
  width: 83%;
  margin-left: 15%;
  height: 100%;
  padding: 10px;
  position: fixed;
  background-color: #4444442c;
}

.in_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
}

.fa-arrow-right {
  color: #092c52;
  align-items: end;
  justify-content: end;
  text-align: right;
}

.top{
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.bottom{
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
}

@media (max-width: 768px) {}

.container1 {
  display: flex;
  justify-content: space-between;
  margin: 1%;
  width: 98%;
}

.top-blocks {
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  gap:16px;
}

.top-blocks img {
  width: 30%;
  height: 120px;
}

.top-blocks span {
  width: 65%;
  padding: 19px 0;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* .contain2 {
  border-radius: 10px;
  margin-top: 15px;
  width: 24.5%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1)
}

.contain2 img {
  width: 30%;
  height: 120px;
}

.p2 {
  width: 65%;
  padding: 19px 0;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
} */

/* .contain3 {
  border-radius: 10px;
  margin-top: 15px;
  width: 24.5%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1)
} */


button {
  padding: 10px 20px;
  background-color: #092c52;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  font-size: 16px;
}
/* Styles pour le pop-up (modal) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #092c52;
  margin-bottom: 1em;
}

.form-group {
  margin-bottom: 1.5em;
  width: 40rem;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;

}

.ittinéraire button {
  position: relative;
  margin-top: 55%;
  margin-left: 80%;
}

input,
select {
  width: 30rem;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

/* .contain3 img {
  width: 30%;
  height: 120px;
}

.p3 {
  width: 65%;
  padding: 19px 0;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.contain4 {
  border-radius: 10px;
  margin-top: 15px;
  width: 24.5%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1)
}

.contain4 img {
  width: 30%;
  height: 120px;
}

.p4 {
  width: 65%;
  padding: 19px 0;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
} */

.containes1 {
  position: absolute;
  margin-top: 12%;
  display: flex;
  justify-content: space-between;

}

.contais {
  width: 31rem;
  margin: 0.1%;
  background-color: white;
  border-radius: 2%;
  box-shadow: 0PX 0PX 2PX 2PX white;
}

.contais h1 {
  /* position: relative; */
  left: 4%;
  color: green;
  margin: 10%
}

.contais h3 {
  font-size: 1rem;
  /* position: relative; */
  left: 4%;
  color: #031d36;
  margin: 4.5%
}

.contais span {
  font-size: 1rem;
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
  color: green;
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
  color: green;
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
  width: 95%;
  height: 8%;
  margin: auto;
}

.trainContain {
  width: 100%;
  background-color: white;
  height: 50%;
  margin-top: 2.5%;
  
}
.trainContainIn{
  display: flex;
  width: 30%;
  margin-left: 70%;
  justify-content: space-between;
  margin-top: 0.5%;
}
.trainContain button {
  width: 40%;
  font-size: 25px;
  background-color: transparent;
  font-weight: bold;
  color: rgb(5, 5, 69);
}

.trainContainIn button:hover {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
}

table {
  width: 95%!important;
  margin: auto;
  font-size: 1.4rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  cursor: pointer;
  background-color: #f2f2f2;
}
.sorted-asc::after {
  content: " ▲";
}

.sorted-desc::after {
  content: " ▼";
}


.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.table-container {
  flex: 1;
  padding: 20px;

  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ffffff;
  /* White border for contrast */
  padding: 10px;
  text-align: left;
}

.buttons-container {
  padding: 10px;
  text-align: center;
  position: relative;
  bottom: 90%;
  left: 33rem;

}

button {
  font-size: 1.2rem;
  margin: 1%;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  ;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 40rem;
  height: 28rem;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
}

#appi {
  font-size: 1.4rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  padding: 20px;
  font-weight: bold;
}

header h1 {
  color: #092c52;
}

.services-overview {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.service-box {
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  width: 30%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.opportunity-section {
  background-color: #e8f0fe;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
}

.opportunity-section button {
  background-color: #092c52;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;
}

.opportunity-section button:hover {
  background-color: #064080;
}

.popup-form {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 450PX;
  width: 33rem;
  height: 35rem;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input,
form textarea {
  width: 28rem;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  background-color: #092c52;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;
}

form button[type="button"] {
  background-color: #e0e0e0;
  color: #333;
  margin-left: 10px;
}

form button:hover {
  background-color: #064080;
}

.settings-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.box {
  width: 80%;
  max-width: 1200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.admin-management {
  background-color: white;
}

.mission-display,
.cargo-list,
.incident-report {
  background-color: #e0f7fa;
  /* Bleu clair */
}

.add-button {
  background-color: #4CAF50;
  /* Vert */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #45a049;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-contents {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 30rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.popup form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.popup form label {
  text-align: left;
}

.popup form input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.delete-icon {
  color: green;
}

.edit-icon {
  color: green;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.icone {
  height: 2rem;
  width: 2rem;

}

.modali {
  display: flex;
  /* Utiliser flexbox pour centrer le modal */
  justify-content: center;
  align-items: center;
  position: fixed;
  /* Position fixe pour couvrir l'écran */
  z-index: 1000;
  /* S'assurer qu'il est au-dessus des autres éléments */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  /* Fond semi-transparent */
}

.modali-content {
  background-color: white;
  /* Fond blanc pour le contenu du modal */
  border-radius: 8px;
  /* Coins arrondis */
  padding: 20px;
  /* Espacement interne */
  width: 400px;
  /* Largeur du modal */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  /* Ombre pour le modal */
  position: relative;
  /* Position relative pour le bouton de fermeture */
}

.close {
  position: absolute;
  /* Bouton de fermeture dans le coin supérieur droit */
  top: 10px;
  right: 10px;
  cursor: pointer;
  /* Curseur pointer pour le bouton */
  font-size: 20px;
  /* Taille du texte */
}

h2 {
  margin: 0 0 20px;
  /* Marge pour le titre */
}

form {
  display: flex;
  flex-direction: column;
  /* Disposition verticale des champs */
}

label {
  margin-bottom: 5px;
  /* Marge sous les labels */
}

input {
  margin-bottom: 15px;
  /* Marge sous les champs de saisie */
  padding: 10px;
  /* Espacement interne */
  border: 1px solid #ccc;
  /* Bordure grise */
  border-radius: 4px;
  /* Coins arrondis pour les champs */
}

button {
  padding: 10px;
  /* Espacement interne */
  background-color: #007bff;
  /* Couleur de fond du bouton */
  color: white;
  /* Couleur du texte */
  border: none;
  /* Pas de bordure */
  border-radius: 4px;
  /* Coins arrondis */
  cursor: pointer;
  /* Curseur pointer pour le bouton */
}


/* Styles responsives */
@media (max-width: 500px) {
  .modal-content {
    width: 90%;
    /* Largeur du modal sur mobile */
  }
}

</style>