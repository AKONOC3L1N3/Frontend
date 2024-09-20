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
                            <button class="w-9 h-9">
                                <img src="@/assets/edit-icon.png" alt="Modifier" @click="modifyVehicule"
                                    class="icon edit-icon w-full h-full hover:w-11 hover:h-11">
                            </button>
                            <button class="w-9 h-9 ">
                                <img src="@/assets/delete-icon.png" alt="Supprimer" @click="deleteVehicule(vehicule.id)"
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

                    <div class="btns pt-2">
                        <button @click="createAccount" class="button btn1">Ajouter</button>
                        <button @click="closeAjouteModal" class="button btn2">Annule</button>
                    </div>
                </form>
            </div>
        </div>

        <div v-if="modifyVoitureModal" class="contain">
            <div class="form-contain">
                <h2 class="text-2xl font-semibold text-center">Modifier le Vehicule</h2>
                <form @submit.prevent="updateVehicleProfile" class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <div>
                            <label for="name">Nom</label>
                            <input type="text" v-model="name" required />
                        </div>

                        <div>
                            <label for="type">Type</label>
                            <input type="text" v-model="type" required />
                        </div>

                        <div>
                            <label for="state">État</label>
                            <input type="text" v-model="state" required />
                        </div>

                        <div>
                            <label for="model">Modèle</label>
                            <input type="text" v-model="model" required />
                        </div>

                        <div>
                            <label for="tonnage">Tonnage</label>
                            <input type="number" v-model="tonnage" required />
                        </div>

                        <div>
                            <label for=" firstYearTakeoff">Date </label>
                            <input type="date" v-model="firstYearTakeoff" required />
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

        modifyVehicule() {
            this.name = this.vehicules.name;
            this.modifyVoitureModal = true;
        },
        closeModifyVehicle() {
            this.modifyVoitureModal = false;
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
                console.log("Voici la liste des vehicles", response.data);
                // console.log(this.vehicles);
            } catch (error) {
                this.errorMessage = 'Erreur lors de la récupération des véhicules : ' + (error.response ? error.response.data.message : error.message);
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

        async deleteVehicule() {

            // Demander confirmation avant de supprimer le véhicule
            if (confirm("Êtes-vous sûr de vouloir supprimer ce véhicule?")) {
                this.selectedVehicule();
                // const selectedVehiculeId = localStorage.getItem('selectedVehiculeId');
                this.selectedVehiculeId = localStorage.getItem('selectedVehiculeId');
                const token = localStorage.getItem('token');
                try {
                    // Envoie la requête de suppression au backend
                    await axios.patch(`${config.apiBaseUrl}/vehicles/deleteVehiculeByUserId/${this.userId}/${this.selectedVehiculeId}`, {
                        isDelete: true,
                    }, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    this.fetchVehicles();
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