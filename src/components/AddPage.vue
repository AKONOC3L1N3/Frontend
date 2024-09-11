

<template>
    <div class="contain">
    <div class="form-contain">
      <h2 class="form-title">Ajouter un chauffeur</h2>
      <form @submit.prevent="submitForm">
        <div class="form-grou">
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-grou">
          <label for="email">E-mail</label>
          <input type="mail" id="email" v-model="email" required />
        </div>
        <div class="form-grou">
          <label for="password">password</label>
          <input type="text" id="password" v-model="password" required />
        </div>
       
        <div class="form-grou">
          <label for="DrivingLicense">DrivingLicense</label>
          <input type="text" id="DrivingLicense" v-model="DrivingLicense" required />
        </div>
  
  
        <div class="form-grou">
          <label for="DateOfBirth">Date de naissance</label>
          <input type="date" id="DateOfBirth" v-model="DateOfBirth" required />
        </div>
  
        <div class="form-grou">
          <label for="DrivingLicenseRestoUrl">DrivingLicenseRecto</label>
          <input type="text" id="DrivingLicenseRestoUrl" v-model="DrivingLicenseRestoUrl" required />
        </div>
  
        <div class="form-grou">
          <label for="DrivingLicenseVersoUrl">DrivingLicenseVerso</label>
          <input type="text" id="DrivingLicenseVersoUrl" v-model="DrivingLicenseVersoUrl" required />
        </div>
  
        <button @click="createAccount"   class="submit-button">Ajouter</button>
      </form>
    </div>
    </div>
    
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
      data() {
          return {
              DrivingLicense: '',
              DateOfBirth: '',
              DrivingLicenseRectoUrl: '',
             DrivingLicenseVersoUrl: '',
             name:'',
             email:'',
             password:'',
              successMessage: '',
              errorMessage: ''
          };
      },
      methods: {
          async createAccount() {
              try {
                  await axios.post('http://192.168.100.97:3001/driverprofil', {
                    name: this. name,
                    email: this. email,
                    password: this. password,
                      DrivingLicense: this. DrivingLicense,
                      DateOfBirth:  new Date(this.DateOfBirth),
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
  .contain{
    height: 100vh;
  }
  .form-contain {
    width: 35%;
    margin: 0 auto;
    padding: 15px;
    height: 70vh;
    background-color:white;
    margin-top: 35px;
    border-radius: 10px;
    position: relative;
    top: 50px;

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
    background-color:#fff;
  }
  
  input:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.3);
  }
  
  .submit-button {
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
  
  .submit-button:hover {
    background-color: #0a3e6f; /* Une teinte plus claire pour le survol */
  }
  
  @media (max-width: 768px) {
    .form-container {
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
  