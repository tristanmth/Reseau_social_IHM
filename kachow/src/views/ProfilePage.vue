<template>
  <div class="profile-page">

    <div class="navigation">
      <button class="back-button" @click="goBack">⬅</button>
    </div>

    <h1>Mon Profil</h1>
    
    <div class="profile-content">
      <div class="preferences">
        <MyPreference />
      </div>

      <div class="vehicles">
        <MyVehicules :vehicles="vehicles" />
        <div class="profile-actions">
          <button @click="showAddVehicleForm = true">Ajouter un véhicule</button>
          <div v-if="showAddVehicleForm" class="add-vehicle-form">
            <input v-model="newVehicle.model" placeholder="Modèle" />
            <input v-model="newVehicle.year" placeholder="Année" type="number" />
            <input v-model="newVehicle.color" placeholder="Couleur" />
            <button @click="addVehicle">Confirmer</button>
            <button @click="cancelAddVehicle">Annuler</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyPreference from "@/components/Profile/MyPreferences.vue";
import MyVehicules from "@/components/Profile/MyVehicles.vue";

export default {
  components: {
    MyPreference,
    MyVehicules,
  },
  data() {
    return {
      vehicles: [
        { model: "Renault Clio 2", year: 2002, color: "rouge" },
      ],
      newVehicle: { model: "", year: "", color: "" },
      showAddVehicleForm: false,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/swipe"); 
    },
    addVehicle() {
      if (this.newVehicle.model && this.newVehicle.year && this.newVehicle.color) {
        this.vehicles.push({ ...this.newVehicle });
        this.resetNewVehicle();
        this.showAddVehicleForm = false;
      } else {
        alert("Veuillez remplir tous les champs.");
      }
    },
    cancelAddVehicle() {
      this.resetNewVehicle();
      this.showAddVehicleForm = false;
    },
    resetNewVehicle() {
      this.newVehicle = { model: "", year: "", color: "" };
    },
  },
};
</script>

<style scoped>

  .back-button {
  background: none;
  border: none;
  font-size: 60px; 
  color: black;
  cursor: pointer;
  width: auto;
  padding:0px;
}

.back-button:hover {
  color: gray; 
}

.add-vehicle-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.add-vehicle-form input {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.add-vehicle-form button {
  padding: 8px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.add-vehicle-form button:hover {
  background-color: #2980b9;
}

h1 {
  margin-top:0px;
}

.profile-content {
  display: flex;
  flex-grow: 1;
  gap: 20px;
}

.preferences {
  flex: 1;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.vehicles {
  flex: 2;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

</style>
