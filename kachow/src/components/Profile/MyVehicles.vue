<template>
    <div class="my-vehicles">
      <h2>Mes Véhicules</h2>
      <button @click="addVehicle">Ajouter un véhicule</button>
      <ul>
        <li v-for="(vehicle, index) in vehicles" :key="index" class="vehicle-item">
          <p><strong>Modèle :</strong> {{ vehicle.model }}</p>
          <p><strong>Année :</strong> {{ vehicle.year }}</p>
          <p><strong>Couleur :</strong> {{ vehicle.color }}</p>
          <button @click="editVehicle(index)">Modifier</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        vehicles: [
          { model: 'Renault Clio 2', year: 2002, color: 'rouge' },
        ],
      };
    },
    methods: {
      addVehicle() {
        console.log('Ajout d’un véhicule...');
        // Ajout d'une logique d'ajout de véhicule
      },
      editVehicle(index) {
        console.log('Modification du véhicule', this.vehicles[index]);
        // Ajout d'une logique de modification
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
  