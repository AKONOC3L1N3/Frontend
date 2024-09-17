<template>
    <div class="container">
    <div class="form-container">
      <h2 class="form-title">Ajouter un véhicule</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="type">Type</label>
          <input type="text" id="type" v-model="type" required />
        </div>

        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        
  
        
  
        <div class="form-group">
          <label for="state">État</label>
          <input type="text" id="state" v-model="state" required />
        </div>
  
        <div class="form-group">
          <label for="model">Modèle</label>
          <input type="text" id="model" v-model="model" required />
        </div>
  
        <div class="form-group">
          <label for="tonnage">Tonnage</label>
          <input type="number" id="tonnage" v-model="tonnage" required />
        </div>
  
        <div class="form-group">
          <label for=" firstYearTakeoff">Date </label>
          <input type="date" id=" firstYearTakeoff" v-model=" firstYearTakeoff" required />
        </div>
  
        <button @click="createAccount" class="submit-button">Ajouter</button>
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
              name: '',
              type: '',
              tonnage: '',
              firstYearTakeoff: '',
              state: '',
              model: '',
              successMessage: '',
              errorMessage: ''
          };
      },
      methods: {
          async createAccount() {
              try {
                  await axios.post(`${config.apiBaseUrl}/vehicles`, {
                      name: this.name,
                      type: this.type,
                      state: this.state,
                      model: this.model,
                     tonnage: this.tonnage,
                     firstYearTakeoff : new Date(this.  firstYearTakeoff)
                  });
                  this.successMessage = 'ajout réussie !';
                  alert('véhicule ajouté avec succès');
                  window.location.reload();
                  this.resetForm();
              } catch (error) {
                  this.errorMessage = 'Échec de l\'ajout : ' + error.response.data.message;
                  alert('Echec lors de l\'ajout')
              }
          },
          resetForm() {
              this.name = '';
              this.type = '';
              this.state = '';
              this.model = '';
              this.tonnage = '';
              this.  firstYearTakeoff= '';
              this.successMessage = '';
              this.errorMessage = '';
          }
      }
  };
  </script>
  <style>
  .container{
    height: 100vh;
  }
  .form-container {
    width: 35%;
    margin: 0 auto;
    padding: 15px;
    height: 60vh;
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
  
  .form-group {
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
  