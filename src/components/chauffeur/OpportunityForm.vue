<template>
  <div class="form-popup">
    <div class="form-content">
      <h2>Signaler une Opportunité</h2>
      <form @submit.prevent="submitOpportunity">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" required></textarea>

        <label for="date">Date:</label>
        <input id="date" type="date" v-model="date" required />

        <label for="address">Adresse:</label>
        <input id="address" type="text" v-model="address" required />

        <div class="button-group">
          <button type="submit" class="submit-btn">Soumettre</button>
          <button type="button" @click="$emit('close')" class="cancel-btn">Annuler</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: '',
      date: '',
      address: ''
    };
  },
  methods: {
    submitOpportunity() {
      console.log({
        description: this.description,
        date: this.date,
        address: this.address
      });
      this.description = '';
      this.date = '';
      this.address = '';
      this.$emit('close');
    }
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

textarea, input {
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

.submit-btn, .cancel-btn {
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
