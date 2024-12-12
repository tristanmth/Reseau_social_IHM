<template>
    <div class="profile-page">
      <button class="back-button" @click="goBack">⬅</button>
      
      <h1>Mon Profil</h1>
      <div class="profile-sections">
        <Preferences />
        <MyVehicles />
      </div>
    </div>
  </template>
  
  <script>
  import Preferences from '../components/Profile/MyPreferences.vue';
  import MyVehicles from '../components/Profile/MyVehicles.vue';
  
  export default {
    components: {
      Preferences,
      MyVehicles,
    },
    methods: {
    goBack() {
      this.$router.push("/swipes"); 
    },
  },
  };
  </script>
  
  <style scoped>
  .profile-page {
    padding: 20px;
  }
  .profile-sections {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .back-button {
  background: none;
  border: none;
  font-size: 60px; /* Taille de la flèche */
  color: black; /* Couleur de la flèche */
  cursor: pointer;
  width: auto;
  padding:0px;
}

.back-button:hover {
  color: gray; /* Couleur au survol */
}
h1 {
  margin-top:0px;
}
  </style>
  