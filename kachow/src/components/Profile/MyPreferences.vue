<template>
    <div class="preferences">
      <h2>Mes Préférences</h2>
      <form @submit.prevent="savePreferences">
        <div>
          <label for="brand">Marque préférée :</label>
          <input type="text" id="brand" v-model="brand" />
        </div>
        <div>
          <label for="distance">Distance maximale :</label>
          <input type="number" id="distance" v-model="distance" />
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        brand: 'BMW',
        distance: 20,
      };
    },
    methods: {
      savePreferences() {
        console.log('Préférences enregistrées :', { brand: this.brand, distance: this.distance });
      },
    },
  };
  </script>
  
  <style scoped>
  .preferences {
    flex: 1;
    min-width: 300px;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
  }
  </style>
  