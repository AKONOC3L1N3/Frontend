<template>
    <div class="container">
      <div class="form-container">
        <h2>Attribuer un véhicule</h2>
        <form @submit.prevent="handleSubmit">
          <div class="input_field">
            <label for="type">Type :</label>
            <input type="text" id="type" v-model="form.type" required>
          </div>
  
          <div class="input_field">
            <label for="immatriculation">Immatriculation :</label>
            <input type="text" id="immatriculation" v-model="form.immatriculation" required>
          </div>
  
          <div class="input_field">
            <label for="model">Modèle :</label>
            <input type="text" id="model" v-model="form.model" required>
          </div>
  
          <div class="input_field">
            <label for="tonnage">Tonnage :</label>
            <input type="number" id="tonnage" v-model="form.tonnage" required>
          </div>
  
          <div class="input_field">
            <label for="state">État :</label>
            <input type="text" id="state" v-model="form.state" required>
          </div>
  
          <div class="input_field">
            <label for="date">Date d'attribution :</label>
            <input type="date" id="date" v-model="form.date" required>
          </div>
  
          <div class="input_field">
            <label for="chauffeur">Chauffeur :</label>
            <select id="chauffeur" v-model="form.chauffeur" required>
              <option v-for="chauffeur in chauffeurs" :key="chauffeur.id" :value="chauffeur.id">
                {{ chauffeur.name }}
              </option>
            </select>
          </div>
  
          <button type="submit">Attribuer</button>
        </form>
      </div>
    </div>
  </template>


<script>
export default {
  data() {
    return {
      form: {
        type: '',
        immatriculation: '',
        model: '',
        tonnage: '',
        state: '',
        date: '',
        chauffeur: ''
      },
      chauffeurs: [] // Liste des chauffeurs récupérés depuis la base de données
    };

  },
  methods: {
    handleSubmit() {
      // Logique pour soumettre le formulaire
      console.log('Form submitted:', this.form);
      // Rediriger ou effectuer une action après la soumission

    },
  },
  mounted() {
    // Appel à une API pour obtenir les chauffeurs enregistrés
    fetch('/api/chauffeurs')
      .then(response => response.json())
      .then(data => {

        this.chauffeurs = data;
        this.formData = {
        type: '',
        immatriculation: '',
        model: '',
        tonnage: '',
        state: '',
        date: '',
        chauffeur: ''
     };
      });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.form-container {
  padding: 20px;
  max-width: 600px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  margin: auto;
  height: 51rem;
  position: relative;
  margin-bottom: 100%;

}

label {
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
  font-weight: bold;
}

input, select {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: transparent;
  height: 35px;
  margin-top: 5px;
  outline: none;
  padding: 5px;
}

.input_field {
  margin-bottom: 20px;
}

button {
  width: 100%;
  padding: 10px 0;
  border: none;
  background-color: #092c52;
  font-weight: bold;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

button:hover {
  background-color: #064276;
}

h2 {
  font-size: 24px;
  color: #092c52;
  text-align: center;
}
</style>
