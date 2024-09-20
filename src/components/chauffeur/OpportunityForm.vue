<template>
  <div class="form-popup">
    <div class="form-content">
      <h2>Signaler une Opportunité</h2>
      <form @submit.prevent="submitOpportunity">
        <label for="description">Description:</label>
        <textarea v-model="description" required></textarea>

        <label for="date">Date:</label>
        <input type="date" v-model="date" required />

        <label for="address">Adresse:</label>
        <input type="text" v-model="address" required />

        <button type="submit">Soumettre</button>
        <button type="button" @click="$emit('close')">Annuler</button>
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
      // Logique pour soumettre l'opportunité
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
  border-radius: 5px;
  width: 450px;
  height: 450px;
}
</style>
