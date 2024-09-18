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

        <div class="w-full h-full">
            <div v-if="isOpportunityFormVisible" class="w-full h-full popup-form fixed inset-0 bg-black/50 z-50">
                <div class="form-container bg-white">
                    <div class="flex items-end">
                        <h3 class="text-2xl text-center">Signaler une Opportunité</h3>
                        <button @click="closeOpportunityForm" class="close-button text-2xl text-end">
                            x
                        </button>
                    </div>
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
</template>

<script>
import axios from 'axios'
import config from "../config";

export default {
    data() {
        return {
            isOpportunityFormVisible: false,
            opportunity: {
                description: '',
                address: '',
                date: ''
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
                await axios.post(`${config.apiUrl}/opportunities`, this.opportunity)
                this.closeOpportunityForm()
                this.$toast.success('Opportunité signalée avec succès!')
            } catch (error) {
                this.$toast.error('Erreur lors de la soumission de l\'opportunité.')
            }
        }
    }
}
</script>