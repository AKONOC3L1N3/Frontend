<template>
    <div class="container">
      <div class="form-container">
        <h2 class="form-title">Supprimer un véhicule</h2>
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
  
          <button type="submit" class="submit-button">Supprimer</button>
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
        fetch(`https://votre-api-endpoint.com/supprimer/${this.formData.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            // Réinitialiser le formulaire ou naviguer après la suppression

          })
          .catch((error) => {
            console.error('Error:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 12%;
  }
  
  .form-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: black;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: black;
  }
  
  input {
    width: 100%;
    padding: 10px;
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
  