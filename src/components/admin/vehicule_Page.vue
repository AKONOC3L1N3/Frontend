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
                    <!-- <tr class="hover:bg-gray-50" v-for="vehicle in vehicules" :key="vehicle.vehicleId">
                        <td class="px-6 py-4 whitespace-nowrap">{{vehicules.name}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{vehicules.type}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{vehicules.tonnage}}c</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{vehicules.model}}e</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{vehicules.state}}</td>
                        <td class="px-6 py-4 whitespace-nowrap flex gap-2">
                            <button class="w-9 h-9">
                                <img src="@/assets/edit-icon.png" alt="Modifier" @click="modifyVehicule"
                                    class="icon edit-icon w-full h-full hover:w-11 hover:h-11">
                            </button>
                            <button class="w-9 h-9 ">
                                <img src="@/assets/delete-icon.png" alt="Supprimer" @click="deleteVehicule"
                                    class="icon delete-icon w-full h-full hover:w-11 hover:h-11">
                            </button>
                        </td>
                    </tr> -->

                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                        <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                        <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                        <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                        <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                        <td class="px-6 py-4 whitespace-nowrap flex gap-2">
                            <button class="w-9 h-9">
                                <img src="@/assets/edit-icon.png" alt="Modifier" @click="modifyVehicule"
                                    class="icon edit-icon w-full h-full hover:w-11 hover:h-11">
                            </button>
                            <button class="w-9 h-9 ">
                                <img src="@/assets/delete-icon.png" alt="Supprimer" @click="deleteVehicule"
                                    class="icon delete-icon w-full h-full hover:w-11 hover:h-11">
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

                    <div class="btns">
                        <button @click="createAccount" class="button btn1">Ajouter</button>
                        <button @click="closeAjouteModal" class="button btn2">Annule</button>
                    </div>
                </form>
            </div>
        </div>

        <div v-if="modifyVoitureModal" class="contain">
            <div class="form-contain">
                <h2 class="text-2xl font-semibold text-center">Modifier le Profil</h2>
                <form @submit.prevent="updateDriverProfil" class="flex flex-col gap-4">
                    <!-- <div class="flex flex-col gap-2">
                       <div>
                           <label for="name">Nom</label>
                            <input type="text" v-model="editForm.name" required />
                       </div> 
    
                       <div>
                           <label for="type">Type</label>
                            <input type="text" v-model="editForm.type" required />
                       </div> 
    
                       <div>
                           <label for="state">État</label>
                            <input type="email" v-model="editForm.state" required />
                       </div> 
    
                       <div>
                           <label for="model">Modèle</label>
                            <input type="text" v-model="editForm.model" required />
                       </div> 
    
                       <div>
                           <label for="tonnage">Tonnage</label>
                            <input type="number" v-model="editForm.tonnage" required />
                       </div> 
    
                       <div>
                           <label for=" firstYearTakeoff">Date </label>
                            <input type="text" v-model="editForm.firstYearTakeoff" required />
                       </div> 
                    </div>

                    <div class="btns">
                        <button type="submit" class="button btn1">Sauvegarder</button>
                        <button @click="closeModifyVehicle" class="button btn2">Annule</button>
                    </div> -->

                    <div class="flex flex-col gap-2">
                        <div>
                            <label for="name">Nom</label>
                            <input type="text" required />
                        </div>

                        <div>
                            <label for="type">Type</label>
                            <input type="text" required />
                        </div>

                        <div>
                            <label for="state">État</label>
                            <input type="email" required />
                        </div>

                        <div>
                            <label for="model">Modèle</label>
                            <input type="text" required />
                        </div>

                        <div>
                            <label for="tonnage">Tonnage</label>
                            <input type="number" required />
                        </div>

                        <div>
                            <label for=" firstYearTakeoff">Date </label>
                            <input type="text" required />
                        </div>
                    </div>

                    <div class="btns">
                        <button type="submit" class="button btn1">Sauvegarder</button>
                        <button @click="closeModifyVehicle" class="button btn2">Annule</button>
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
            successMessage: '',
            errorMessage: '',

            ajouteVoitureModal: false,
            modifyVoitureModal: false,
            vehicules: [],
        };
    },

    mounted() {

    },

    methods: {
        ajouterVoiture() {
            this.ajouteVoitureModal = true;
        },
        closeAjouteModal() {
            this.ajouteVoitureModal = false;
            this.resetForm();
        },

        modifyVehicule() {
            this.modifyVoitureModal = true;
        },
        closeModifyVehicle() {
            this.modifyVoitureModal = false;
        },

        async createAccount() {
            try {
                const vehiclesData = {
                    name: this.name,
                    type: this.type,
                    state: this.state,
                    model: this.model,
                    tonnage: this.tonnage,
                    firstYearTakeoff: new Date(this.firstYearTakeoff)
                };

                console.log("vehiclesData being sent to backend:", vehiclesData);

                const response = await axios.post(`${config.apiBaseUrl}/vehicles`, vehiclesData);
                this.successMessage = response.data.message;
                console.log("véhicule ajouté avec succès", response.data);
                alert('véhicule ajouté avec succès');
                window.location.reload();
                this.resetForm();
            } catch (error) {
                this.errorMessage = 'Échec de l\'ajout : ' + error.response.data.message;
                alert('Echec lors de l\'ajout')
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
                const response = await axios.get(`${config.apiBaseUrl}/vehicles`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.vehicules = response.data;
                console.log("Voici la liste des vehicles");
                // console.log(this.vehicles);
            } catch (error) {
                this.errorMessage = 'Erreur lors de la récupération des véhicules : ' + (error.response ? error.response.data.message : error.message);
            }
        },

        async updateDriverProfil() {
            const editForm = {
                name: this.editForm.name,
                type: this.editForm.type,
                state: this.editForm.state,
                model: this.editForm.model,
                tonnage: this.editForm.tonnage,
                firstYearTakeoff: this.editForm.firstYearTakeoff
            };

            try {
                console.log('Updating vehicle profile with:', editForm);

                const response = await axios.post(`${config.apiBaseUrl}/updateVehicleProfile`, editForm);
                console.log('Profile updated successfully:', response.data);
            } catch (error) {
                console.error('Error updating profile:', error);
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