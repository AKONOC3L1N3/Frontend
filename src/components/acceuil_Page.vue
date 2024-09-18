<template>
    <div class="h-full w-full flex flex-col gap-4">
        <!-- Top Section -->
        <div class="flex justify-between space-x-4 h-1/6">
            <div class="flex rounded-xl items-center bg-white p-4 w-1/3">
                <img src="..//assets/icvoiture.png" alt="">
                <span class="ml-2">24 véhicules disponibles actuellement</span>
            </div>

            <div class="flex rounded-xl items-center bg-white p-4 w-1/3">
                <img src="..//assets/chaur.png" alt="">
                <span class="ml-2">20 chauffeurs disponibles</span>
            </div>

            <div class="flex rounded-xl items-center bg-white p-4 w-1/3">
                <img src="..//assets/maintenance.png" alt="">
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