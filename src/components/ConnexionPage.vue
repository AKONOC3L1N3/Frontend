    <template>
    <div class="contain">
        <div class="form-contain">
            <h2>Se connecter</h2>
            <form @submit.prevent="login">
                <div class="input_field">
                    <label for="email">Email :</label>
                    <input type="email" id="email" v-model="email" required>
                </div>
                <div class="input_field">
                    <label for="password">Mot de passe :</label>
                    <input type="password" id="password" v-model="password" required>
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from "../config";

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
            // userInfo:[]
        };
    },
    methods: {
        async login() {
            try {
                // Make a POST request to the /auth/login endpoint on the local server (${config.apiBaseUrl})
                const response = await axios.post(`${config.apiBaseUrl}/auth/login`, {
                    email: this.email,
                    password: this.password
                });
                const userData = response.data;
                localStorage.setItem('userId', userData.user_id);  // Assurez-vous que 'user_id' est correct
                localStorage.setItem('token', userData.access_token);
                console.log(userData);
                this.getUserInfo();

            } catch (error) {
                this.errorMessage = 'Échec de la connexion : ' + error.response.data.message;
                // alert('Echec de la connexion');
                this.$router.push('/ChauffeurPage');
            }
        },
        async getUserInfo() {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');
                const response = await axios.get(`${config.apiBaseUrl}/users/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const userInfo = response.data;
                console.log(userInfo);
                // Vérifiez si l'utilisateur est un administrateur ou un chauffeur pour afficher la page appropriée
                if (userInfo.type === "ADMIN") {
                    this.$router.push('/homePage');
                } else if(userInfo.type === "CHAUFFEUR") {
                    this.$router.push('/ChauffeurPage');
                }
            } catch (error) {
                // console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
                this.$router.push('/ChauffeurPage');
            }
        }
    }
};
</script>


<style scoped>
.contain {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #092c52 !important;
    margin: 0;
}

.form-contain {
    padding: 15px;
    max-width: 500px;
    width: 100%;
    margin-top: 150px !important;
    background-color: white;
    margin: auto;
}

.profile-preview {
    margin-top: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
}

label {
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 20px;
    font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input,
select {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: transparent;
    height: 30px;
    outline: none;
}

.input_field {
    margin-top: 13px;
}

button {
    width: 50%;
    margin-top: 15px;
    padding: 10px 0;
    border: none;
    background-color: #092c52;
    font-weight: bold;
    color: white;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}

h2 {
    font-size: 30px;
    color: #092c52;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>