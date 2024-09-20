<template>
    <div class="dashboard-container">
      <header class="header">
        <h1>Bienvenue, {{ DriverProfilname }}</h1>
        <button @click="logout" class="logout-button">Déconnexion</button>
      </header>
  
      <div class="main-content">
        <aside class="sidebar">
          <ul>
            <li><button @click="showSection('vehicle')" :class="{ active: currentSection === 'vehicle' }">Véhicule Assigné</button></li>
            <li><button @click="showSection('opportunities')" :class="{ active: currentSection === 'opportunities' }">Opportunités</button></li>
            <li><button @click="showSection('itinerary')" :class="{ active: currentSection === 'itinerary' }">Itinéraire</button></li>
          </ul>
        </aside>
  
        <main class="content">
          <section v-if="currentSection === 'vehicle'" class="section vehicle-box">
            <h2>Détails du Véhicule Assigné</h2>
            <div class="vehicle-info">
              <p><strong>NOM:</strong> {{ vehicle.name }}</p>
              <p><strong>TYPE:</strong> {{ vehicle.type }}</p>
              <p><strong>TONNAGE:</strong> {{ vehicle.tonnage }}</p>
              <p><strong>MODÈLE:</strong> {{ vehicle.model }}</p>
              <p><strong>ÉTAT:</strong> {{ vehicle.state }}</p>
            </div>
          </section>
  
          <section v-if="currentSection === 'opportunities'" class="section">
            <h2>Signalement d'Opportunité</h2>
            <button @click="openOpportunityForm" class="signal-button">Signaler une Opportunité</button>
            <opportunity-form v-if="showForm" @close="showForm = false" />
          </section>
  
          <section v-if="currentSection === 'itinerary'" class="section">
            <h2>Itinéraire</h2>
            <p>Vous pouvez voir et suivre l'itinéraire planifié ici.</p>
            <!-- Intégrer une carte ou un plan pour afficher l'itinéraire -->
          </section>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import OpportunityForm from './OpportunityForm.vue'; 
  
  export default {
    components: {
      OpportunityForm
    },
    data() {
      return {
        currentSection: 'vehicle',
        DriverProfilname: '', // Récupérez ce nom depuis votre backend ou session
        vehicle: {
          name: 'Nom du Véhicule',
          type: 'Type du Véhicule',
          tonnage: 'Tonnage du Véhicule',
          model: 'Modèle du Véhicule',
          state: 'État du Véhicule'
        },
        showForm: false
      };
    },
    methods: {
      showSection(section) {
        this.currentSection = section;
      },
      openOpportunityForm() {
        this.showForm = true;
      },
      logout() {
        // Implémentez la logique de déconnexion
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        this.$router.push('/login');
      }
    },
    created() {
      // Fetch user profile and vehicle details here
      this.DriverProfilname = 'Nom de l’utilisateur'; // Remplacez par le nom récupéré depuis l'API
      // Ajoutez la logique pour récupérer les détails du véhicule
    }
  };
  </script>
  
  <style scoped>
  .dashboard-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  background-color: #e9ecef;
  overflow: hidden;
}

.header {
  padding: 20px;
  background-color: #343a40;
  color: white;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1.5em;
  font-weight: bold;
}

.logout-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
}

.logout-button:hover {
  background-color: #c82333;
}

.main-content {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-right: 1px solid #dee2e6;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 15px;
}

.sidebar button {
  width: 100%;
  background-color: #ffffff;
  color: #495057;
  border: 2px solid transparent;
  padding: 12px;
  cursor: pointer;
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
  transition: all 0.3s ease;
  border-radius: 5px;
}

.sidebar button.active {
  border-bottom: 2px solid #007bff;
  background-color: #e9ecef;
  color: #007bff;
}

.sidebar button:hover {
  background-color: #f1f3f5;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.section {
  width: 100%;
  max-width: 800px; /* Largeur maximale pour centrer le contenu */
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto; /* Centre le conteneur verticalement et horizontalement */
  text-align: center;
}

.vehicle-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vehicle-info {
  background-color: #f1f3f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  text-align: left;
}

.signal-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 25px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.signal-button:hover {
  background-color: #218838;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

  </style>
  