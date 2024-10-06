<template>
  <div class="form-popup">
    <div class="form-content">
      <h2 class="font-semibold text-xl">Signaler une Opportunité</h2>
      <form @submit.prevent="submitOpportunity">
        <div class="text-left">
          <label for="depart">Point de depart:</label>
          <input id="depart" type="text" v-model="depart" required />

          <label for="arrive">Point d'arrive:</label>
          <input id="arrive" type="text" v-model="arrive" required />

          <label for="description">Description:</label>
          <textarea id="description" v-model="description" required></textarea>

          <label for="date">Date:</label>
          <input id="date" type="date" v-model="date" required />
        </div>

        <div class="button-group">
          <button type="submit" class="submit-btn">Soumettre</button>
          <button type="button" @click="$emit('close')" class="cancel-btn">Annuler</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config";

export default {
  data() {
    return {
      depart: '',
      arrive: '',
      description: '',
      date: '',
    };
  },
  methods: {
    async submitOpportunity() {
      try {
        const token = localStorage.getItem('token');
        // const userId = this.userId;

        const oportunityData = {
          depart: this.arrive,
          arrive: this.arrive,
          description: this.description,
          date: this.date
        };

        console.log("voici les info de l'opportunite", oportunityData);

        const response = await axios.post(`${config.apiBaseUrl}/##########`, oportunityData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        this.successMessage = response.data.message;
        console.log("l'opportunite ajouté avec succès", response.data);
        this.resetForm();
        this.$emit('close');
      } catch (error) {
        this.errorMessage = 'Échec de l\'ajout : ' + (error.response?.data?.message || error.message);
        alert("Échec lors de l'ajout du l'opportunite");
      }
    },


    resetForm() {
      this.name = '';
      this.type = '';
      this.state = '';
      this.model = '';
      this.tonnage = '';
      this.firstYearTakeoff = '';
      this.successMessage = '';
      this.errorMessage = '';
    },
    // submitOpportunity() {
    //   console.log({
    //     depart: this.arrive,
    //     arrive: this.arrive,
    //     description: this.description,
    //     date: this.date
    //   });
    //   this.depart = '';
    //   this.arrive = '';
    //   this.description = '';
    //   this.date = '';
    //   this.$emit('close');
    // }
  }
};
</script>

<style scoped>
.form-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 15px;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

textarea,
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button-group {
  display: flex;
  justify-content: space-around;
}

.submit-btn,
.cancel-btn {
  background-color: #001f3f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: green;
}

.cancel-btn:hover {
  background-color: red;
}
</style>
