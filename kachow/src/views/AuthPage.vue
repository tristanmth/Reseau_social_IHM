<template>
    <div class="auth-page">
      <div>
        <button @click="showLogin = true">Connexion</button>
        <button @click="showLogin = false">Inscription</button>
      </div>
      <div v-if="showLogin">
        <LoginForm />
      </div>
      <div v-else>
        <SignUpForm />
      </div>
    </div>
  </template>
  
  <script>
  import LoginForm from '../components/Auth/LoginForm.vue';
  import SignUpForm from '../components/Auth/SignUpForm.vue';
  
  export default {
    components: { LoginForm, SignUpForm },
    data() {
      return { showLogin: true };
    },
  };
  </script>
  
  <style scoped>
  .auth-page {
    text-align: center;
  }
  </style>
  