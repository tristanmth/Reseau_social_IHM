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
  