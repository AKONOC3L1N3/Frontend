<template>
    <div class="login-container">
      <h2>Connexion</h2>
      <div v-if="user">
        <div class="profile-info">
          <div class="profile-preview">
            <img :src="user.profileImage" alt="Photo de profil" />
          </div>
          <h3>Type d'utilisateur : {{ user.type }}</h3>
        </div>
      </div>
      <form @submit.prevent="handleLogin">
      
        <label for="login">Login :</label>
        <input type="text" id="login" v-model="form.login" required placeholder="Entrez votre login">
  
      
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="form.password" required placeholder="Entrez votre mot de passe">
  
      
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          login: '',
          password: ''
        },
        user: null
      };
    },
    created() {
     
      this.loadUser();
    },
    methods: {
      loadUser() {
       
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          this.user = user;
        }
      },
      handleLogin() {
   
        if (this.form.password === this.user.password) {
          
          this.$router.push('/home');
        } else {
          alert('Mot de passe incorrect.');
        }
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
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  }
  
  .login-container {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 30px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .profile-info {
    margin-bottom: 20px;
  }
  
  .profile-preview {
    margin-bottom: 10px;
  }
  
  .profile-preview img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: bold;
  }
  
  input {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #f0f0f0;
    color: #333;
    box-sizing: border-box;
  }
  
  input::placeholder {
    color: #888;
  }
  
  button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  