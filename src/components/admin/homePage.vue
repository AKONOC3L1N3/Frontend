<template>
    <div class="flex flex-col md:flex-row w-full h-screen p-2 bg-white monda-font">
        <div class="md:hidden p-4 flex">
            <h2 class="text-3xl w-full text-center text-blue-950">Dashboard</h2>
            <button @click="openMenu">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </div>

        <nav
            :class="['fixed', 'md:relative', 'inset-0', 'bg-white', 'z-50', 'transition-transform', 'duration-300', menuOpen ? 'translate-x-0' : '-translate-x-full', 'md:translate-x-0', 'h-full', 'md:w-1/6', 'flex', 'flex-col', 'justify-between', 'items-center']">
            <div class="w-full py-5 flex flex-col gap-6">
                <div class="flex px-4">
                    <h2 class="text-3xl w-full text-center text-blue-950">Dashboard</h2>
                    <button class="text-2xl md:hidden" @click="closeMenu">X</button>
                </div>

                <ul class="w-full flex flex-col gap-4">
                    <li>
                        <button @click="showPage('acceuil_Page')"
                            :class="{ 'bg-gray-200 shadow-lg': currentPage === 'acceuil_Page' }"
                            class="flex w-full gap-2 justify-between items-center rounded p-5 hover:bg-gray-200">
                            <div class="flex gap-3 items-center">
                                <i class="fas fa-home"></i>
                                <span>Acceuil</span>
                            </div>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </li>
                    <li>
                        <button @click="showPage('vehicule_page')"
                            :class="{ 'bg-gray-200 shadow-lg': currentPage === 'vehicule_page' }"
                            class="flex w-full gap-2 justify-between items-center rounded p-5 hover:bg-gray-200">
                            <div class="flex gap-3 items-center">
                                <i class="fas fa-car"></i>
                                <span>Vehicles</span>
                            </div>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </li>
                    <li>
                        <button @click="showPage('Chauffeurs_page')"
                            :class="{ 'bg-gray-200 shadow-lg': currentPage === 'Chauffeurs_page' }"
                            class="flex w-full gap-2 justify-between items-center rounded p-5 hover:bg-gray-200">
                            <div class="flex gap-3 items-center">
                                <i class="fa fa-users"></i>
                                <span>Chauffeurs</span>
                            </div>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </li>
                    <li>
                        <button @click="showPage('Services_page')"
                            :class="{ 'bg-gray-200 shadow-lg': currentPage === 'Services_page' }"
                            class="flex w-full gap-2 justify-between items-center rounded p-5 hover:bg-gray-200">
                            <div class="flex gap-3 items-center">
                                <i class="fas fa-cogs"></i>
                                <span>Services</span>
                            </div>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </li>
                    <li>
                        <button @click="showPage('Itineraires_page')"
                            :class="{ 'bg-gray-200 shadow-lg': currentPage === 'Itineraires_page' }"
                            class="flex w-full gap-2 justify-between items-center rounded p-5 hover:bg-gray-200">
                            <div class="flex gap-3 items-center">
                                <i class="fas fa-chart-line"></i>
                                <span>Itineraires</span>
                            </div>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </li>
                    <li>
                        <button @click="showPage('Maintenances_page')"
                            :class="{ 'bg-gray-200 shadow-lg': currentPage === 'Maintenances_page' }"
                            class="flex w-full gap-2 justify-between items-center rounded p-5 hover:bg-gray-200">
                            <div class="flex gap-3 items-center">
                                <i class="fas fa-wrench"></i>
                                <span>Maintenances</span>
                            </div>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <button @click="logout"
                class="flex gap-2 items-center hover:text-blue-500 hover:bg-gray-100 p-2 rounded-xl">
                <span>Deconexion</span>
                <i style="color: red;" class="fa fa-power-off"></i>
            </button>
        </nav>

        <!-- Main Content -->
        <main class="bg-gray-300 w-full md:w-5/6 rounded-xl p-4 h-full">
            <div class="h-full page" v-if="currentPage === 'acceuil_Page'">
                <acceuil_Page />
            </div>
            <div class="h-full page" v-if="currentPage === 'vehicule_page'">
                <vehicule_Page />
            </div>
            <div class="h-full page" v-if="currentPage === 'Chauffeurs_page'">
                <Chauffeurs_page />
            </div>
            <div class="h-full page" v-if="currentPage === 'Services_page'">
                <Services_page />
            </div>
            <div class="h-full page" v-if="currentPage === 'Itineraires_page'">
                <Itineraires_page />
            </div>
            <div class="h-full page" v-if="currentPage === 'Maintenances_page'">
                <Maintenances_page />
            </div>
        </main>
    </div>
</template>

<script>
// import axios from "axios";
// import config from "../ ../config";
import acceuil_Page from "./acceuil_Page.vue";
import vehicule_Page from "./vehicule_Page.vue";
import Chauffeurs_page from "./Chauffeurs_page";
import Services_page from "./Services_page";
import Itineraires_page from "./Itineraires_page";
import Maintenances_page from "./Maintenances_page";

export default {
    components: {
        acceuil_Page,
        vehicule_Page,
        Chauffeurs_page,
        Services_page,
        Itineraires_page,
        Maintenances_page,
    },

    data() {
        return {
            currentPage: 'Chauffeurs_page',
            menuOpen: false,
        };
    },
    methods: {
        openMenu() {
            this.menuOpen = true;
        },
        closeMenu() {
            this.menuOpen = false;
        },
        showPage(page) {
            this.currentPage = page;
        },
        async logout() {
            this.logoutLoader = true;
            try {
                // const token = localStorage.getItem('token');
                // if (token) {
                //     await axios.post(`${config.apiBaseUrl}/logout`, {}, {
                //         headers: {
                //             'Authorization': `Bearer ${token}`
                //         }
                //     });
                // }
                localStorage.clear();
                this.$router.push('/'); // Redirect to login page
            } catch (error) {
                console.error('Error logging out:', error);
                this.logoutLoader = true;
            }
        }
    },

};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Monda:wght@100;200;300;400;500;600;700&display=swap);
</style>