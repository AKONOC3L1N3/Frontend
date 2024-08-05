<template>
    <div class="form-container">
      <h2>Inscription</h2>
      <form @submit.prevent="handleSubmit">
        <div class="profile-section">
          <label for="profile">Profil :</label>
          <input type="file" id="profile" @change="handleFileChange" accept="image/*">
          <div v-if="profileImage">
            <img :src="profileImage" alt="Photo de profil" class="profile-preview">
          </div>
        </div>
  
        <label for="nom">Nom :</label>
        <input type="text" id="nom" v-model="form.nom" required>
  
        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" v-model="form.prenom" required>
  
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="form.password" required>
  
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="form.email">
  
        <label for="type">Type :</label>
        <select id="type" v-model="form.type" required>
          <option value="SUPER ADMINISTRATEUR">SUPER ADMINISTRATEUR</option>
          <option value="ADMINISTRATEUR">ADMINISTRATEUR</option>
          <option value="CHAUFFEUR">CHAUFFEUR</option>
        </select>
  
        <label for="dateOfBirth">Date de naissance :</label>
        <input type="date" id="dateOfBirth" v-model="form.dateOfBirth">
  
        <label for="phone">Numéro de téléphone :</label>
        <select id="phone" v-model="form.phone" required>
          
          <option value="+33">France (+33)</option>
          <option value="+1">États-Unis (+1)</option>
          <
        </select>
  
        <button type="submit">Inscrire</button>
      </form>
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
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: #f5f5f5;
  }
  .form-container {
    background: #ffffff;
    border-radius: 10px;
    padding: 20px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .profile-section {
    margin-bottom: 20px;
  }
  .profile-preview {
    margin-top: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
  label {
    display: block;
    margin-bottom: 8px;
    color: #000;
  }
  input,
  select {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #e0e0e0;
  }
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  