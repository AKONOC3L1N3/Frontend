<template>
    <div class="h-full w-full">
        <div class="h-full w-full flex flex-col gap-2">
            <div class="flex gap-2 w-full justify-end">
                <button @click="openAjoute"
                    class="text-blue-900 py-2 px-4 bg-gray-100 rounded-xl hover:bg-blue-900 hover:text-white">AJOUTER</button>
            </div>

            <div>
                <table class="min-w-full divide-y divide-gray-200 text-left">
                    <thead class="bg-gray-50 px-6 ">
                        <tr>
                            <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">Driving License</th>
                            <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">Nom</th>
                            <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">Email</th>
                            <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">Date de naissance</th>
                            <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">Vehicule</th>
                            <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>

                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr class="hover:bg-gray-50" v-for="DriverProfil in DriverProfils" :key="DriverProfil.id">
                            <td class="px-6 py-4 whitespace-nowrap">{{ DriverProfil.DrivingLicense }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ DriverProfil.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ DriverProfil.email }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ new
                                Date(DriverProfil.DateOfBirth).toLocaleDateString() }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ DriverProfil.vehicleId }}</td>
                            <td class="px-6 py-4 whitespace-nowrap flex gap-2">
                                <button class="w-9 h-9" @click="openEditDriverForm(driverProfil)">
              <img src="@/assets/edit-icon.png" alt="Modifier" class="icon edit-icon w-full h-full hover:w-11 hover:h-11">
            </button>
                                <button class="w-9 h-9 ">
                                    <img src="@/assets/delete-icon.png" alt="Supprimer" @click="deleteDriver"
                                        class="icon delete-icon w-full h-full hover:w-11 hover:h-11">
                                </button>
                            </td>
                        </tr>

                     
                    </tbody>
                </table>
            </div>
        </div>

        <div>
            <div class="contain" v-if="ajouteChaufeurModal">
                <div class="form-contain">
                    <h2 class="form-title">Ajouter un chauffeur</h2>
                    <form @submit.prevent="submitForm">
                        <div class="form-grou">
                            <label for="name">Nom</label>
                            <input type="text" id="name" v-model="name" required />
                        </div>
                        <div class="form-grou">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" v-model="email" required />
                        </div>
                        <div class="form-grou">
                            <label for="password">Password</label>
                            <input type="password" id="password" v-model="password" required />
                        </div>
                        <div class="form-grou">
                            <label for="DrivingLicense">Driving License</label>
                            <input type="text" id="DrivingLicense" v-model="DrivingLicense" required />
                        </div>
                        <div class="form-grou">
                            <label for="DateOfBirth">Date de naissance</label>
                            <input type="date" id="DateOfBirth" v-model="DateOfBirth" required />
                        </div>
                        <div class="form-grou">
                            <label for="DrivingLicenseRectoUrl">Driving License Recto</label>
                            <input type="text" id="DrivingLicenseRectoUrl" v-model="DrivingLicenseRectoUrl" required />
                        </div>
                        <div class="form-grou">
                            <label for="DrivingLicenseVersoUrl">Driving License Verso</label>
                            <input type="text" id="DrivingLicenseVersoUrl" v-model="DrivingLicenseVersoUrl" required />
                        </div>
                        <div class="input_field">
        <label for="type">Type :</label>
        <select id="type" v-model="type" required>
         
          <option value="CHAUFFEUR">CHAUFFEUR</option>
          
        </select>
      </div>
                        <div class="btns">
                            <button @click="createAccount" class="button btn1">Ajouter</button>
                            <button @click="closeAjouteModal" class="button btn2">Annule</button>
                        </div>
                    </form>
                </div>
            </div>
            
            <div v-if="showEditForm" class="modal">
      <h2>Modifier le Chauffeur</h2>
      <form @submit.prevent="submitUpdateDriver">
        <div>
          <label for="DrivingLicense">Permis de conduire</label>
          <input type="text" v-model="editForm.DrivingLicense" required>
        </div>
        <div>
          <label for="name">Nom</label>
          <input type="text" v-model="editForm.name" required>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="editForm.email" required>
        </div>
        <div>
          <label for="DateOfBirth">Date de naissance</label>
          <input type="date" v-model="editForm.DateOfBirth" required>
        </div>
        <div>
          <label for="vehicleid">Véhicule ID</label>
          <input type="text" v-model="editForm.vehicleid">
        </div>
        <button type="submit">Modifier</button>
        <button type="button" @click="closeEditDriverForm">Annuler</button>
      </form>
    </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from "@/config";

export default {
    data() {
        return {
            DrivingLicense: '',
            DateOfBirth: '',
            DrivingLicenseRectoUrl: '',
            DrivingLicenseVersoUrl: '',
            name: '',
            email: '',
            password: '',
            type:'',
            driverProfil:'',
            successMessage: '',
            errorMessage: '',
            userId: localStorage.getItem('userId'),
            ajouteChaufeurModal: false,
            modifyChaufeurModal: false,
            DriverProfils: [], // Tableau des chauffeurs
      showEditForm: false, // État d'affichage du formulaire de modification
      editForm: { // Données du formulaire de modification
        DrivingLicense: '',
        name: '',
        email: '',
        DateOfBirth: '',
        vehicleId: '',
        id: '',
        UserId: ''
      },
        };
    },

    mounted() {
        if (this.isConnected()) {
            this.userId = localStorage.getItem('userId');
            this.fetchDriverProfil();
        } else {
            this.errorMessage = 'Utilisateur non connecté';
            this.$router.push('/'); // Rediriger vers la page de connexion
        }
    },

    methods: {
        isConnected() {
            return localStorage.getItem('token') !== null;
        },
        openAjoute() {
            this.ajouteChaufeurModal = true;
        },
        closeAjouteModal() {
            this.ajouteChaufeurModal = false;
            this.resetForm();
        },

        
    
    async fetchDrivers() {
      // Fonction pour récupérer les chauffeurs depuis l'API
      const token = localStorage.getItem('token');
      const response = await axios.get(`${config.apiBaseUrl}/driverprofil`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      this.driverProfiles = response.data;
    },
    
  

    openEditDriverForm(driverProfil) {
  // Vérifier que le chauffeur a un ID
  if (!driverProfil.id) {
    console.error("Erreur: ID du chauffeur manquant.");
    alert("Erreur: ID du chauffeur manquant."); // Afficher une alerte pour l'utilisateur
    return;
  }

  // Pré-remplir le formulaire avec les données du chauffeur
  this.editForm = { ...driverProfil };
  this.editForm.UserId = this.userId; // Récupérer l'ID utilisateur
  this.showEditForm = true; // Afficher le formulaire de modification
},
    async submitUpdateDriver() {
      try {
        const driverId = this.editForm.id;

        // Vérifiez si l'ID est valide
        if (!driverId) {
          console.error("Erreur: l'ID du chauffeur est manquant.");
          alert("Erreur: l'ID du chauffeur est manquant.");
          return;
        }

        // Préparer les données pour la mise à jour
        const updateData = {
          DrivingLicense: this.editForm.DrivingLicense,
          name: this.editForm.name,
          email: this.editForm.email,
          DateOfBirth: this.editForm.DateOfBirth,
          vehicleid: this.editForm.vehicleid, // Si vous souhaitez également modifier le véhicule
        };

        // Requête PUT pour mettre à jour le chauffeur
        const token = localStorage.getItem('token');
        const response = await axios.put(
            
          `${config.apiBaseUrl}/driverprofil/updateDriverProfilByUserId/${this.userId}/${driverId}`,
          updateData,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        console.log("Chauffeur mis à jour:", response.data);
        alert('Chauffeur mis à jour avec succès');
        this.showEditForm = false; // Masquer le formulaire après la mise à jour
        this.fetchDrivers(); // Appeler pour rafraîchir la liste des chauffeurs
      } catch (error) {
        console.error("Erreur lors de la mise à jour du chauffeur:", error);
        alert("Échec lors de la mise à jour du chauffeur: " + (error.response?.data?.message || error.message));
      }
    },

    closeEditDriverForm() {
      this.showEditForm = false; // Masquer le formulaire de modification
    },
        
        
        async createAccount() {
            try {
                const token = localStorage.getItem('token');
                const userId = this.userId; 

                const chauffeurData = {
                    name: this.name,
                    email: this.email,
                    UserId: userId,
                    password: this.password,
                    DrivingLicense: this.DrivingLicense,
                    DateOfBirth: new Date(this.DateOfBirth),
                    DrivingLicenseRectoUrl: this.DrivingLicenseRectoUrl, // Corrected typo
                    DrivingLicenseVersoUrl: this.DrivingLicenseVersoUrl,
                    type: this.type
                };

                console.log("chauffeurData being sent to backend:", chauffeurData);

                const response = await axios.post(`${config.apiBaseUrl}/driverprofil/newDriver`, chauffeurData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                this.successMessage = response.data.message;
                console.log("Chauffeur ajouté avec succès", response.data);
                alert('Chauffeur ajouté avec succès');
                this.resetForm();
            } catch (error) {
                this.errorMessage = 'Échec de l\'ajout : ' + (error.response?.data?.message || error.message);
                alert("Échec lors de l'ajout du chauffeur");
            }
        },

        resetForm() {
            this.name = '',
                this.email = '',
                this.password = '',
                this.DrivingLicense = '',
                this.DateOfBirth = '';
            this.DrivingLicenseRectoUrl = '';
            this.DrivingLicenseVersoUrl = '';
            this.successMessage = '';
            this.errorMessage = '';
            this.type=''
        },

        async fetchDriverProfil() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/driverprofil/allDriverByUserId/${this.userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.DriverProfils = response.data;
                console.log("Voici la liste des chauffeurs",response.data);
                console.log(this.DriverProfil);
            } catch (error) {
                this.errorMessage = 'Erreur lors de la récupération des chauffeurs : ' + (error.response ? error.response.data.message : error.message);
            }
        },

        async updateDriverProfil() {
            const editForm = {
                DrivingLicense: this.DrivingLicense,
                name: this.name,
                email: this.email,
                DateOfBirth: this.DateOfBirth,
                vehicleId: this.vehicleId
            };

            try {
                console.log('Updating driver profile with:', editForm);
                const token = localStorage.getItem('token');

                const response = await axios.post(`${config.apiBaseUrl}/driverprofil/updateDriverProfilByUserId/userId/driverProfilId`, editForm, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log('Profile updated successfully:', response.data);
            } catch (error) {
                console.error('Error updating profile:', error);
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
    }
};
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