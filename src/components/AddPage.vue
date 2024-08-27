

<template>
    <div class="container">
    <div class="form-container">
      <h2 class="form-title">Ajouter un chauffeur</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="surname">Prenom</label>
          <input type="text" id="Surname" v-model="surname" required />
        </div>
        <div class="form-group">
          <label for="type">DrivingLicense</label>
          <input type="text" id="DrivingLicense" v-model="DrivingLicense" required />
        </div>
  
        <div class="form-group">
          <label for="immatriculation">ImmatriculationNumber</label>
          <input type="text" id="immatriculationNumber" v-model="ImmatriculationNumber" required />
        </div>
  
        <div class="form-group">
          <label for="DateOfBirth">DateOfBirth</label>
          <input type="date" id="DateOfBirth" v-model="DateOfBirth" required />
        </div>
  
        <div class="form-group">
          <label for="model">DrivingLicenseRestoUrl</label>
          <input type="text" id="DrivingLicenseRestoUrl" v-model="DrivingLicenseRestoUrl" required />
        </div>
  
        <div class="form-group">
          <label for="DrivingLicenseRectoUrl">DrivingLicenseRectoUrl</label>
          <input type="text" id="DrivingLicenseRectoUrl" v-model="DrivingLicenseRectoUrl" required />
        </div>
  
        <div class="form-group">
          <label for="createAt">Date </label>
          <input type="date" id="createAt" v-model="createAt" required />
        </div>
  
        <button type="submit" class="submit-button">Ajouter</button>
      </form>
    </div>
    </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
            Name: '',
            surname:'',
          DrivingLicense: '',
          immatriculationNumber: '',
          DateOfBirth: '',
          DrivingLicenseRectoUrl: '',
          DrivingLicenseVersoUrl: '',
          createAt: '',
        },
      };
    },
    methods: {
      submitForm() {
        
        fetch('https://votre-api-endpoint.com/ajouter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
    
            this.formData = {
                Name: '',
                surname:'',
              DrivingLicense: '',
          immatriculationNumber: '',
          DateOfBirth: '',
          DrivingLicenseRectoUrl: '',
          DrivingLicenseVersoUrl: '',
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
  