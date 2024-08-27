<template>
  <div class="containere">
    <div class="form-containere"> 
      <form @submit.prevent="createAccount">
    <h2>Inscription</h2>

      <div class="input_field">
        <label for="name">Nom :</label>
        <input type="text" id="nom" v-model="name" required>
      </div>
      <div class="input_field">
        <label for="surname">Prénom :</label>
        <input type="text" id="prenom" v-model="surname" required>
      </div>
      <div class="input_field">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="input_field">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="input_field">
        <label for="type">Type :</label>
        <select id="type" v-model="type" required>
          <option value="SUPERADMIN">SUPER ADMINISTRATEUR</option>
          <option value="ADMIN">ADMINISTRATEUR</option>
          <option value="CHAUFFEUR">CHAUFFEUR</option>
        </select>
      </div>
      
      <div class="input_field">
        <label for="roleid">Role :</label>
        <input type="text" id="roleid" v-model="roleId">
      </div>
      <div class="input_field">
        <label for="avatarUrl">AvatarUrl :</label>
        <input type="text" id="avatarUrl" v-model="avatarUrl">
      </div>
      <button type="submit">Inscrire</button>
    </form>
    <p>Vous avez deja un compte? <router-link to="/">Se connecter</router-link></p>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            Nom: '',
            Surname: '',
            email: '',
            password: '',
            type:'',
            roleId:'',
            avatarUrl:'',
            successMessage: '',
            errorMessage: ''
        };
    },
    methods: {
        async createAccount() {
            try {
                await axios.post('http://localhost:3001/users', {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    password: this.password,
                    type: this.type,
                    roleId: this.roleId,
                    avatarUrl: this.avatarUrl
                    
                });
                this.successMessage = 'Inscription réussie !';
                alert('Compte crée avec Success');
                this.resetForm();
            } catch (error) {
                this.errorMessage = 'Échec de l\'inscription : ' + error.response.data.message;
                alert('Echec lors de la création du compte')
            }
        },
        resetForm() {
            this.name = '';
            this.surname = '';
            this.email = '';
            this.password = '';
            this.type = '';
            this.roleId = '';
            this.avatarUrl = '';
            this.dateOfBirth = '';
            this.successMessage = '';
            this.errorMessage = '';
        }
    }
};
</script>

<style scoped>
.containere {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #092c52!important;
  margin: 0;
}

.form-containere {
  padding: 15px;
  max-width: 500px;
  width: 100%;
  margin-top: 30px !important;
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
.input_field{
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
h2{
  font-size: 30px;
  color: #092c52;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>