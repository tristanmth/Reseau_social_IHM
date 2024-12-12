<template>
    <div class="profile-page">
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
    props: {
    isLoggedIn: {
      type: Boolean, // L'état de connexion passé depuis App.vue
      required: true,
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
  </style>
  