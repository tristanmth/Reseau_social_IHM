<template>
    <div class="my-vehicles">
      <h2>Mes Véhicules</h2>
      <ul>
        <li v-for="(vehicle, index) in vehicles" :key="index" class="vehicle-item">
          <p><strong>Modèle :</strong> {{ vehicle.model }}</p>
          <p><strong>Année :</strong> {{ vehicle.year }}</p>
          <p><strong>Couleur :</strong> {{ vehicle.color }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
  props: {
      vehicles: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .my-vehicles {
    flex: 1;
    min-width: 300px;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
  }
  .vehicle-item {
    margin: 10px 0;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  </style>
  