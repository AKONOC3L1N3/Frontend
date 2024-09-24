<template>
    <div class="h-full w-full flex flex-col gap-2">
        <div class="flex gap-2 w-full justify-end">
            <button @click="ajouterVoiture"
                class="text-blue-900 py-2 px-4 bg-gray-100 rounded-xl hover:bg-blue-900 hover:text-white">AJOUTER</button>
            <button
                class="text-blue-900 py-2 px-4 bg-gray-100 rounded-xl hover:bg-blue-900 hover:text-white">ATTRIBUER</button>
        </div>

        <div class="">
            <table class="min-w-full divide-y divide-gray-200 text-left">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">NOM</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">TYPE</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">TONNAGE</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">MODEL</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">ETAT</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">Action</th>
                    </tr>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50" v-for="vehicule in vehicules" :key="vehicule.vehicleId">
                        <td class="px-6 py-4 whitespace-nowrap">{{ vehicule.name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ vehicule.type }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ vehicule.tonnage }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ vehicule.model }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ vehicule.state }}</td>
                        <td class="px-6 py-4 whitespace-nowrap flex gap-2">
                            <button class="w-9 h-9" @click="openEditForm(vehicule)">
              <img src="@/assets/edit-icon.png" alt="Modifier" class="icon edit-icon w-full h-full hover:w-11 hover:h-11">
            </button>
            <button class="w-9 h-9" @click="confirmDelete(vehicule.id)">
  <img src="@/assets/delete-icon.png" alt="Supprimer" class="icon delete-icon w-full h-full hover:w-11 hover:h-11">
</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="contain" v-if="ajouteVoitureModal">
            <div class="form-contain">
                <h2 class="form-title">Ajouter un véhicule</h2>
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Nom</label>
                        <input type="text" id="name" v-model="name" required />
                    </div>

                    <div class="form-group">
                        <label for="type">Type</label>
                        <input type="text" id="type" v-model="type" required />
                    </div>

                    <div class="form-group">
                        <label for="state">État</label>
                        <input type="text" id="state" v-model="state" required />
                    </div>

                    <div class="form-group">
                        <label for="model">Modèle</label>
                        <input type="text" id="model" v-model="model" required />
                    </div>

                    <div class="form-group">
                        <label for="tonnage">Tonnage</label>
                        <input type="number" id="tonnage" v-model="tonnage" required />
                    </div>

                    <div class="form-group">
                        <label for=" firstYearTakeoff">Date </label>
                        <input type="date" id=" firstYearTakeoff" v-model="firstYearTakeoff" required />
                    </div>

                    <div class="btns pt-2">
                        <button @click="createAccount" class="button btn1">Ajouter</button>
                        <button @click="closeAjouteModal" class="button btn2">Annule</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="contain" v-if="showEditForm">
            <div class="form-contain">  
      <form @submit.prevent="submitUpdate">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="editForm.name" required />

        <label for="type">Type</label>
        <input type="text" id="type" v-model="editForm.type" required />

        <label for="state">État</label>
        <input type="text" id="state" v-model="editForm.state" required />

        <label for="model">Modèle</label>
        <input type="text" id="model" v-model="editForm.model" required />

        <label for="tonnage">Tonnage</label>
        <input type="number" id="tonnage" v-model="editForm.tonnage" required />

        <label for="firstYearTakeoff">Année de première mise en circulation</label>
        <input type="date" id="firstYearTakeoff" v-model="editForm.firstYearTakeoff" />
        <div class="btns pt-2">
            <button type="submit" class="button btn1">Mettre à jour</button>
            <button type="button" @click="closeEditForm" class="button btn2">Annuler</button> 
                    </div>
        
      </form>
    </div>
</div>
    </div>
</template>

<script>
import axios from 'axios';
import config from "../../config";

export default {
    data() {
        return {
            
            name: '',
            type: '',
            tonnage: '',
            firstYearTakeoff: '',
            state: '',
            model: '',
            vehicle: '',
            userId: '',
            isConfirmingDelete: false, // Variable pour afficher la boîte de confirmation
            vehicleId: '',
            successMessage: '',
            errorMessage: '',
            vehicleToDelete: '',
            vehicles: [], // Liste des véhicules à afficher dans le tableau
      showEditForm: false, // État du formulaire de modification
      editForm: {
        name: "",
        type: "",
        state: "",
        model: "",
        tonnage: '',
        firstYearTakeoff: '',
        editForm: {
        id: "",
        name: "",
        model: "",
        UserId: "", // ID de l'utilisateur associé au véhicule
       
      },
      },
            ajouteVoitureModal: false,
            modifyVoitureModal: false,
            vehicules: [],
        };
    },

    mounted() {
        if (this.isConnected()) {
            this.userId = localStorage.getItem('userId');
            this.selectedVehiculeId = localStorage.getItem('selectedVehiculeId');
            this.fetchVehicles();
        } else {
            this.errorMessage = 'Utilisateur non connecté';
            this.$router.push('/'); // Rediriger vers la page de connexion
        }
    },

    methods: {
        isConnected() {
            return localStorage.getItem('token') !== null;
        },
        ajouterVoiture() {
            this.ajouteVoitureModal = true;
        },
        closeAjouteModal() {
            this.ajouteVoitureModal = false;
            this.resetForm();
        },

        
  
        

        openEditForm(vehicule) {
      // Vérifier que le véhicule a un ID
      if (!vehicule.id) {
        console.error("Erreur: ID du véhicule manquant.");
        return;
      }
      
      this.editForm = { ...vehicule };
      this.editForm.UserId = localStorage.getItem('userId'); // Assurez-vous que l'ID utilisateur est bien récupéré
      this.showEditForm = true;
    },

    // Soumettre la mise à jour
    async submitUpdate() {
  try {
    const vehicleId = this.editForm.id;
    const userId = this.userId; // Assurez-vous que cet ID est défini quelque part

    // Ajout de logs pour voir les valeurs avant l'envoi
    console.log("ID du véhicule:", vehicleId);
    console.log("ID de l'utilisateur:", userId);

    // Vérifiez si les IDs sont valides
    if (!vehicleId || !userId) {
      console.error("Erreur: l'ID du véhicule ou de l'utilisateur est manquant.");
      alert("Erreur: l'ID du véhicule ou de l'utilisateur est manquant.");
      return;
    }

    // Préparer les données pour la mise à jour
    const updateData = {
      name: this.editForm.name,
      type: this.editForm.type,
      state: this.editForm.state,
      model: this.editForm.model,
      tonnage: this.editForm.tonnage,
      firstYearTakeoff: new Date(this.editForm.firstYearTakeoff),
      UserId: userId // Assurez-vous que l'ID de l'utilisateur est inclus
    };

    console.log("Données à envoyer pour la mise à jour:", updateData);

    // Requête PATCH
    const token = localStorage.getItem('token');
    const response = await axios.patch(
      `${config.apiBaseUrl}/vehicles/UpdateVehiculesByUserId/${userId}/${vehicleId}`,
      updateData,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    console.log("Véhicule mis à jour:", response.data);
    alert('Véhicule mis à jour avec succès');
    this.showEditForm = false;
    this.fetchVehicles(); // Appeler pour rafraîchir la liste des véhicules
  } catch (error) {
    console.error("Erreur lors de la mise à jour:", error);
    alert("Échec lors de la mise à jour du véhicule: " + (error.response?.data?.message || error.message));
  }
},
    closeEditForm() {
      this.showEditForm = false;
    },


   
        async createAccount() {
            try {
                const token = localStorage.getItem('token');
                const userId = this.userId;

                const vehiclesData = {
                    name: this.name,
                    type: this.type,
                    state: this.state,
                    model: this.model,
                    tonnage: this.tonnage,
                    firstYearTakeoff: new Date(this.firstYearTakeoff),
                    UserId: userId // Added userId to the data being sent
                };

                console.log("vehiclesData being sent to backend:", vehiclesData);

                const response = await axios.post(`${config.apiBaseUrl}/vehicles`, vehiclesData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                this.successMessage = response.data.message;
                console.log("véhicule ajouté avec succès", response.data);
                this.fetchVehicles();
                alert('véhicule ajouté avec succès');
                this.resetForm();
                this.closeAjouteModal();
            } catch (error) {
                this.errorMessage = 'Échec de l\'ajout : ' + (error.response?.data?.message || error.message);
                alert("Échec lors de l'ajout du vehicule");
            }
        },


        resetForm() {
            this.name = '';
            this.type = '';
            this.state = '';
            this.model = '';
            this.tonnage = '';
            this.firstYearTakeoff = '';
            this.successMessage = '';
            this.errorMessage = '';
        },

        async fetchVehicles() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/vehicles/allDriverByUserId/${this.userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.vehicules = response.data;
                console.log("Voici la liste des vehicles", this.vehicules);
                // console.log(this.vehicles);
            } catch (error) {
                this.errorMessage = 'Erreur lors de la récupération des véhicules : ' + (error.response ? error.response.data.message : error.message);
            }
           
        },

      
        async confirmDelete(vehicleId) {
  try {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token'); // Assurez-vous que le token est correctement récupéré

    console.log('userId:', userId);
    console.log('vehicleId:', vehicleId);

    if (!userId || !token) {
      alert("L'ID de l'utilisateur ou le token est manquant.");
      return;
    }

    if (confirm("Êtes-vous sûr de vouloir supprimer ce véhicule ?")) {
      const response = await axios.patch(`${config.apiBaseUrl}/vehicles/deleteVehiculeByUserId/${userId}/${vehicleId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}` // Ajouter le token dans les en-têtes
        }
      });

      console.log('Réponse après suppression :', response.data);

      if (response.status === 200) {
        alert("Le véhicule a été supprimé avec succès.");
        this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== vehicleId);
      } else {
        alert("Erreur lors de la suppression du véhicule.");
      }
    }
  } catch (error) {
    console.error("Erreur lors de la suppression :", error.response ? error.response.data : error.message);
    alert("Impossible de supprimer le véhicule. Veuillez réessayer plus tard.");
  }
},


        

        selectedVehicule(vehiculeId) {
            localStorage.setItem('selectedVehiculeId', vehiculeId);
        },

        async updateVehicleProfile() {
            const editForm = {
                name: this.name,
                type: this.type,
                state: this.state,
                model: this.model,
                tonnage: this.tonnage,
                firstYearTakeoff: this.firstYearTakeoff
            };

            try {
                console.log('Updating vehicle profile with:', editForm);

                const response = await axios.post(`${config.apiBaseUrl}/updateVehicleProfile`, editForm);
                console.log('Profile updated successfully:', response.data);
            } catch (error) {
                console.error('Error updating profile:', error);
            }
        },

       
    }
}
</script>

<style scoped>
.contain {
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 0px;
    z-index: 999;
    background-color: rgb(0 0 0 / 0.5);
}

.form-contain {
    width: 35%;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    border-radius: 10px;
}

.form-title {
    text-align: center;
    font-size: 24px;
    color: black;
}

.form-grou {
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: black;
}

input {
    width: 100%;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    padding-left: 8px;
    background-color: #fff;
}

input:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.3);
}

.button {
    width: 100%;
    padding: 12px;
    background-color: #092c52;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btns {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.btn1:hover {
    background-color: green;
}

.btn2:hover {
    background-color: red;
}

@media (max-width: 768px) {
    .form-contain {
        padding: 20px;
    }

    .form-title {
        font-size: 20px;
    }

    .submit-button {
        font-size: 16px;
    }
}

</style>