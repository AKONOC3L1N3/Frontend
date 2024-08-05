<template>
<<<<<<< HEAD
    <div class="container">
        <div class="form-container">
            <h2>connexion</h2>
            <form @submit.prevent="handleSubmit">
                <div class="input_field">
                    <label for="email">Email :</label>
                    <input type="email" id="email" v-model="form.email">
                </div>
                <div class="input_field">
                    <label for="password">Mot de passe :</label>
                    <input type="password" id="password" v-model="form.password" required>
                </div>
                <button type="submit">Se connecter</button>
            </form>
            <p>Vous n'avez pas de compte? <router-link to="/inscription">S'inscrire</router-link></p>
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
=======
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
>>>>>>> 33a0f3a12fd85807f8f63e4d3d2fba7208455a9d
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
<<<<<<< HEAD
    background-color: #092c52 !important;
    margin: 0;
}

.form-container {
    padding: 20px;
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
    height: 33px;
    outline: none;
}

.input_field {
    margin-top: 17px;
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
=======
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
  
>>>>>>> 33a0f3a12fd85807f8f63e4d3d2fba7208455a9d
