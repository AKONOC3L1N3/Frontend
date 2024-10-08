<template>
    <div class="w-full h-full">
        <div class="w-full h-full flex flex-col gap-4">
            <div>
                <h3 class="text-2xl font-semibold text-blue-950">Présentation des Services</h3>
                <p>Bienvenue dans l'application de gestion de flotte automobile. Explorez nos services :</p>
            </div>

            <div class="w-full flex justify-between gap-4">
                <div class="p-4 bg-white rounded-xl text-center flex flex-col gap-4">
                    <h3 class="font-semibold text-blue-800">Gestion des Véhicules</h3>
                    <p class="text-left">Gérez l'ajout, la modification, et la suppression des véhicules de votre
                        flotte.</p>
                </div>

                <div class="p-4 bg-white rounded-xl text-center flex flex-col gap-4">
                    <h3 class="font-semibold text-blue-800">Gestion des Chauffeurs</h3>
                    <p class="text-left">Suivez les chauffeurs, attribuez des véhicules, et gérez leurs itinéraires.</p>
                </div>

                <div class="p-4 bg-white rounded-xl text-center flex flex-col gap-4">
                    <h3 class="font-semibold text-blue-800">Gestion des Itinéraires</h3>
                    <p class="text-left">Planifiez et optimisez les itinéraires pour vos chauffeurs et véhicules.</p>
                </div>

            </div>

            <div class="flex flex-col gap-2 text-center bg-slate-200 py-4">
                <h3 class="text-2xl text-blue-900 font-semibold">Opportunités</h3>
                <p>Découvrez et signalez des opportunités pour optimiser la gestion de votre flotte.</p>
                <div>
                    <button @click="showOpportunityForm"
                        class="w-auto text-white p-2 rounded bg-blue-950 hover:bg-blue-900">
                        Signaler Opportunité
                    </button>
                </div>
            </div>
        </div>

        <div v-if="isOpportunityFormVisible" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div class="bg-white flex flex-col p-8 gap-5 rounded-lg shadow-lg">
                <div class="flex justify-between">
                    <h3 class="text-2xl text-center">Signaler une Opportunité</h3>
                </div>

                <form @submit.prevent="submitOpportunity" class="flex flex-col gap-2">
                    <div class="flex flex-col gap-2">
                        <label for="country">Pays :</label>
                        <input id="country" v-model="country" class="border" required>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="city">Ville :</label>
                        <input type="text" id="city" v-model="city" class="border" required>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="quarter">Quartier :</label>
                        <input type="text" id="quarter" v-model="quarter" class="border" required>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="order">N° de commande :</label>
                        <input type="number" id="order" v-model="order" class="border" required>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="detStart">Date de debut :</label>
                        <input type="date" id="detStart" v-model="detStart" class="border" required>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="detEnd">Date de fin :</label>
                        <input type="date" id="detEnd" v-model="detEnd" class="border" required>
                    </div>

                    <div class="flex gap-4 justify-center w-full">
                        <button type="submit"
                            class="p-2 bg-blue-950 hover:bg-green-800 text-white rounded-xl w-full">Soumettre</button>
                        <button type="button" @click="closeOpportunityForm"
                            class="p-2 bg-blue-950 hover:bg-red-600 text-white rounded-xl w-full">Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import config from "../../config";

export default {
    data() {
        return {
            isOpportunityFormVisible: true,
            opportunity: {
                country: '',
                city: '',
                quarter: '',
                order: '',
                detStart: '',
                detEnd: '',
            }
        }
    },
    methods: {
        showOpportunityForm() {
            this.isOpportunityFormVisible = true
        },
        closeOpportunityForm() {
            this.isOpportunityFormVisible = false
        },
        async submitOpportunity() {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');

                const address = {
                    country: this.country,
                    city: this.city,
                    quarter: this.quarter,
                    order: this.order,
                    detStart: this.detStart,
                    detEnd: this.detEnd,
                    userId: userId
                };


                console.log("qwewqe,", address);

                const response = await axios.post(`${config.apiBaseUrl}/address`, address, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log('asdasdd', response.data);

                this.closeOpportunityForm()
                this.$toast.success('Opportunité signalée avec succès!')
            } catch (error) {
                this.$toast.error('Erreur lors de la soumission de l\'opportunité.')
            }
        },

        async createAccount() {
            try {
                const token = localStorage.getItem('token');
                const userId = this.userId;

                const chauffeurData = {
                    UserId: userId,
                    name: this.name,
                    // surname: this.surname,
                    email: this.email,
                    password: '1234',
                    DrivingLicense: this.DrivingLicense,
                    DateOfBirth: new Date(this.DateOfBirth),
                    DrivingLicenseRectoUrl: this.DrivingLicenseRectoUrl,
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
                this.fetchDrivers();
                console.log("Chauffeur ajouté avec succès", response.data);
                alert('Chauffeur ajouté avec succès');
                this.resetForm();
            } catch (error) {
                this.errorMessage = 'Échec de l\'ajout : ' + (error.response?.data?.message || error.message);
                alert("Échec lors de l'ajout du chauffeur");
            }
        },

        async iteneraires() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/address/allAdressByUserC/${this.userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.iteneraires = response.data;
                console.log("Voici la liste des vehicles", this.iteneraires);
            } catch (error) {
                this.errorMessage = 'Erreur lors de la récupération des véhicules : ' + (error.response ? error.response.data.message : error.message);
            }

        },
    }
}
</script>