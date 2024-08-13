<template>
    <div class="container">
      <div class="form-container">
        <h2 class="form-title">Modifier un véhicule</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="type">Type</label>
            <input type="text" id="type" v-model="formData.type" required />
          </div>
  
          <div class="form-group">
            <label for="immatriculation">Immatriculation</label>
            <input type="text" id="immatriculation" v-model="formData.immatriculation" required />
          </div>
  
          <div class="form-group">
            <label for="state">État</label>
            <input type="text" id="state" v-model="formData.state" required />
          </div>
  
          <div class="form-group">
            <label for="model">Modèle</label>
            <input type="text" id="model" v-model="formData.model" required />
          </div>
  
          <div class="form-group">
            <label for="tonnage">Tonnage</label>
            <input type="number" id="tonnage" v-model="formData.tonnage" required />
          </div>
  
          <div class="form-group">
            <label for="createAt">Date de création</label>
            <input type="date" id="createAt" v-model="formData.createAt" required />
          </div>
  
          <button type="submit" class="submit-button">Modifier</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      vehicleData: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        formData: { ...this.vehicleData },  // Préremplir le formulaire avec les données du véhicule
      };
    },
    methods: {
      submitForm() {
        // Remplacer l'URL par celle de votre API
        fetch(`https://votre-api-endpoint.com/modifier/${this.formData.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            // Réinitialiser le formulaire ou naviguer après l'envoi

            
            this.formData = {
              type: '',
              immatriculation: '',
              state: '',
              model: '',
              tonnage: '',
              createAt: '',
            };
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
 .container{
    height: 100vh;
  }
  .form-container {
    width: 35%;
    margin: 0 auto;
    padding: 15px;
    height: 80vh;
    background-color:white;
    margin-top: 35px;
    border-radius: 10px;
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
  