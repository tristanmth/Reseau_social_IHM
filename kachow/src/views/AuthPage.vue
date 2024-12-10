<template>
  <div class="auth-page">
    <div v-if="!showForm" class="auth-buttons">
      <button @click="showLoginForm">Connexion</button>
      <button @click="showSignUpForm">Inscription</button>
    </div>

    <!-- Formulaire de connexion -->
    <div v-else-if="formType === 'login'" class="auth-form">
      <LoginForm />
      <button @click="goBack">Retour</button>
    </div>

    <!-- Formulaire d'inscription -->
    <div v-else-if="formType === 'signup'" class="auth-form">
      <SignUpForm />
      <button @click="goBack">Retour</button>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/Auth/LoginForm.vue';
import SignUpForm from '../components/Auth/SignUpForm.vue';

export default {
  components: {
    LoginForm,
    SignUpForm,
  },
  data() {
    return {
      showForm: false,
      formType: null,  // 'login' ou 'signup'
    };
  },
  methods: {
    showLoginForm() {
      this.showForm = true;
      this.formType = 'login';
    },
    showSignUpForm() {
      this.showForm = true;
      this.formType = 'signup';
    },
    goBack() {
      this.showForm = false;
      this.formType = null;
    },
  },
};
</script>

<style scoped>
/* Assurez-vous que la page occupe toute la hauteur du viewport */
html, body {
  height: 100%;
  margin: 0;
}

.auth-page {
  display: flex;
  flex-direction: column;
  min-height: 100%; /* Assure que la page occupe toute la hauteur de l'écran */
}

.app-header {
  background-color: #3498db;
  color: white;
  padding: 15px;
  text-align: center;
}

.auth-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  flex-grow: 1; /* Prend tout l'espace disponible */
  justify-content: center; /* Centre les boutons verticalement */
}

.auth-buttons button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  width: auto; /* Empêche les boutons de prendre toute la largeur */
  max-width: 200px; /* Définit une largeur maximale */
  margin: 0 auto; /* Centrer les boutons horizontalement */
}

.auth-buttons button:hover {
  background-color: #2980b9;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.auth-form button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  width: auto;
  border-radius: 5px;
  cursor: pointer;
}

.auth-form button:hover {
  background-color: #2980b9;
}

.app-footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
  border-top: 1px solid #ddd;
  margin-top: auto; /* Assure que le footer reste en bas */
}
</style>