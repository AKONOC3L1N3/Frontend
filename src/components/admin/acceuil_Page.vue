<template>
    <div class="h-full w-full flex flex-col gap-4">
        <!-- Top Section -->
        <div class="flex justify-between space-x-4 h-1/6">
            <div class="flex rounded-xl items-center bg-white p-4 w-1/3">
                <img src="../../assets/icvoiture.png" alt="">
                <span class="ml-2">{{ vehiculeCount }} véhicule(s) disponibles actuellement</span>
            </div>

            <div class="flex rounded-xl items-center bg-white p-4 w-1/3">
                <img src="../../assets/chaur.png" alt="">
                <span class="ml-2">{{ Chauffeurcount }} chauffeurs disponibles</span>
            </div>

            <div class="flex rounded-xl items-center bg-white p-4 w-1/3">
                <img src="../../assets/maintenance.png" alt="">
                <span class="ml-2">service de maintenance disponible</span>
            </div>
        </div>

        <!-- Bottom Section -->
        <div class="flex justify-between space-x-4 flex-grow">
            <div class="bg-white p-4 w-1/3 rounded-xl flex flex-col gap-5">
                <h3 class="text-green-600 text-2xl">Listes des opportunités Signalées ce mois</h3>
                <div class="flex flex-col gap-2">
                    <div class="flex justify-between">
                        <span class="block">DOUALA: Bonapriso:</span> <span>Cinq chargements</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">KRIBI: Bonadikombo:</span> <span>Huit dépôts</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">YAOUNDE: Essos:</span> <span>Quatre chargements</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">YAOUNDE: Mokolo:</span> <span>Quinze dépôts</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">Bertoua: Yadémé:</span> <span>Sept chargements</span>
                    </div>
                </div>
            </div>

            <div class="bg-white p-4 w-1/3 rounded-xl flex flex-col gap-5">
                <h3 class="text-green-600 text-2xl">Listes des alertes de ce mois</h3>
                <div class="flex flex-col gap-2">
                    <div class="flex justify-between">
                        <span class="block">Maintenance:</span> <span>Treize</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">Arrêts pour chargement:</span> <span>Trente un</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">Arrêts pour dépôts:</span> <span>Treize</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">Arrêts pour vérification:</span> <span>Quinze</span>
                    </div>
                </div>
            </div>

            <div class="bg-white p-4 w-1/3 rounded-xl flex flex-col gap-5">
                <h3 class="text-green-600 text-2xl">Prestances de services</h3>
                <div class="flex flex-col gap-2">
                    <div class="flex justify-between">
                        <span class="block">intégration d'API</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">Devenir un partenaire</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">Analyse des flottes de données:</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="block">Solutions pour les constructeurs automobiles</span>
                    </div>
                </div>
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
            vehiculeCount: 0,
            Chauffeurcount: 0,
        };
    },
    mounted() {
        if (this.isConnected()) {
            this.userId = localStorage.getItem('userId');
            this.fetchVehiculeCount();
            this.fetchChauffeurCount();
        } else {
            this.errorMessage = 'Utilisateur non connecté';
            this.$router.push('/'); // Rediriger vers la page de connexion
        }
    },

    methods:{
        isConnected() {
            return localStorage.getItem('token') !== null;
        },
        async fetchVehiculeCount() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/vehicles/countVehiculeByUserId/${this.userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.vehiculeCount = response.data;
                console.log(this.vehiculeCount);
                
                
            } catch (error) {
                console.error('Erreur lors de la récupération du nombre de vehicule :', error);
            }
        },

        async fetchChauffeurCount() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${config.apiBaseUrl}/driverprofil/countAllDriverProfilByUserId/${this.userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.Chauffeurcount = response.data;
                console.log(this.chauffeurCount);
                
                
            } catch (error) {
                console.error('Erreur lors de la récupération du nombre de vehicule :', error);
            }
        },
    }
}
</script>