<template>
    <div class="container">
        <div class="form-container">
            <h2>Inscription</h2>
            <form @submit.prevent="handleSubmit">
                <div class="input_field">
                    <label for="email">Email :</label>
                    <input type="email" id="email" v-model="form.email">
                </div>

                <div class="input_field">
                    <label for="password">Mot de passe :</label>
                    <input type="password" id="password" v-model="form.password" required>
                </div>
                <button type="submit">Inscrire</button>
            </form>
            <p>Vous avez deja un compte? <router-link to="/inscription">Se connecter</router-link></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profileImage: null,
            form: {
                nom: '',
                prenom: '',
                password: '',
                email: '',
                type: '',
                dateOfBirth: '',
                phone: ''
            }
        };
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.profileImage = URL.createObjectURL(file);
            }
        },
        handleSubmit() {

            this.$router.push('/connexion');

        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #092c52 !important;
    margin: 0;
}

.form-container {
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