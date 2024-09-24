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
                                <button class="w-9 h-9">
                                    <img src="@/assets/edit-icon.png" alt="Modifier" @click="modifierDriver"
                                        class="icon edit-icon w-full h-full hover:w-11 hover:h-11">
                                </button>
                                <button class="w-9 h-9 ">
                                    <img src="@/assets/delete-icon.png" alt="Supprimer" @click="deleteDriver"
                                        class="icon delete-icon w-full h-full hover:w-11 hover:h-11">
                                </button>
                            </td>
                        </tr>

                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                            <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                            <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                            <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                            <td class="px-6 py-4 whitespace-nowrap">asdad</td>
                            <td class="px-6 py-4 whitespace-nowrap flex gap-2">
                                <button class="w-9 h-9">
                                    <img src="@/assets/edit-icon.png" alt="Modifier" @click="modifierDriver"
                                        class="icon edit-icon w-full h-full hover:w-11 hover:h-11">
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
                            <input type="text" id="password" v-model="password" required />
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
                        <div class="btns">
                            <button @click="createAccount" class="button btn1">Ajouter</button>
                            <button @click="closeAjouteModal" class="button btn2">Annule</button>
                        </div>
                    </form>
                </div>
            </div>

            <div v-if="modifyChaufeurModal" class="contain">
                <div class="form-contain">
                    <h2 class="text-2xl font-semibold text-center">Modifier le Profil</h2>
                    <form @submit.prevent="updateDriverProfil">
                        <label for="drivingLicense">Driving License:</label>
                        <input type="text" v-model="DrivingLicense" required />

                        <label for="name">Nom:</label>
                        <input type="text" v-model="name" required />

                        <label for="email">Email:</label>
                        <input type="email" v-model="email" required />

                        <label for="dateOfBirth">Date de Naissance:</label>
                        <input type="date" v-model="DateOfBirth" required />

                        <label for="vehicleId">Véhicule:</label>
                        <input type="text" v-model="vehicleId" required />

                        <div class="btns">
                            <button type="submit" class="button btn1">Sauvegarder</button>
                            <button @click="closeModifyDriver" class="button btn2">Annule</button>
                        </div>

                        
                    </form>
                </div>
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
            successMessage: '',
            errorMessage: '',
            userId: localStorage.getItem('userId'),
            ajouteChaufeurModal: false,
            modifyChaufeurModal: false,
            DriverProfils: [],
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

        modifierDriver(driverProfil) {
            this.modifyChaufeurModal = true;
            this.DriverProfil = driverProfil;
        },
        closeModifyDriver() {
            this.modifyChaufeurModal = false;
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