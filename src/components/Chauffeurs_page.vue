<template>
    <div class="h-full w-full">
        <div class="h-full w-full flex flex-col gap-2">
            <div class="flex gap-2 w-full justify-end">
                <button @click="openAjoute" class="text-blue-900 p-2 bg-gray-100 rounded-xl hover:bg-gray-300">AJOUTER</button>
            </div>
    
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 text-left">
                    <thead class="bg-gray-50 px-6 border ">
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
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">qweqe</td>
                            <td class="px-6 py-4 whitespace-nowrap">asds</td>
                            <td class="px-6 py-4 whitespace-nowrap">zczxc</td>
                            <td class="px-6 py-4 whitespace-nowrap">qweqe</td>
                            <td class="px-6 py-4 whitespace-nowrap">7456</td>
                            <td class="px-6 py-4 whitespace-nowrap">78979</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
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
                        <label for="DrivingLicenseRestoUrl">Driving License Recto</label>
                        <input type="text" id="DrivingLicenseRestoUrl" v-model="DrivingLicenseRestoUrl" required />
                    </div>
                    <div class="form-grou">
                        <label for="DrivingLicenseVersoUrl">Driving License Verso</label>
                        <input type="text" id="DrivingLicenseVersoUrl" v-model="DrivingLicenseVersoUrl" required />
                    </div>
                    <div class="btns">
                        <button @click="createAccount" class="button">Ajouter</button>
                        <button @click="createAccount" class="button">Annule</button>
                    </div>
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
            successMessage: '',
            errorMessage: '',

            ajouteChaufeurModal: false,
        };
    },

    mounted () {
        
    },

    methods: {
        openAjoute() {
            this.ajouteChaufeurModal = true;
        },
        async createAccount() {
            try {
                await axios.post(`${config.apiBaseUrl}/driverprofil`, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    DrivingLicense: this.DrivingLicense,
                    DateOfBirth: new Date(this.DateOfBirth),
                    DrivingLicenseRectoUrl: this.DrivingLicenseRectoUrl,
                    DrivingLicenseVersoUrl: this.DrivingLicenseVersoUrl,

                });
                this.successMessage = 'ajout réussie !';
                alert('chauffeur ajouté avec succès');
                window.location.reload();
                this.resetForm();
            } catch (error) {
                this.errorMessage = 'Échec de l\'ajout : ' + error.response.data.message;
                alert('Echec lors de l\'ajout')
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
        }
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

.btns{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.btns  :hover {
    background-color: green;
}

.btns :last-child :hover {
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