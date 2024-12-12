<template>
  <div class="auth-page">
    <div v-if="!showForm" class="auth-buttons">
      <button @click="showSignUpForm">Inscription</button>
      <button @click="showLoginForm">Connexion</button>
    </div>

    <!-- Formulaire de connexion -->
    <div v-else-if="formType === 'login'" class="auth-form">
      <LoginForm @loginSuccess="onLoginSuccess" />
      <button @click="goBack">Retour</button>
    </div>

    <!-- Formulaire d'inscription -->
    <div v-else-if="formType === 'signup'" class="auth-form">
      <SignUpForm @signUpSuccess="onSignUpSuccess" />
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
    // // Redirection après connexion
    // onLoginSuccess() {
    //   this.$router.push('/first-connection'); 
    // },
    // // Redirection après inscription
    // onSignUpSuccess() {
    //   this.$router.push('/first-connection');  
    // },
  },
};
</script>

<style scoped>
/* Global Styles */
html, body {
  height: 100%;
  margin: 0;
}

.auth-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: #f4f4f4; /* Légère couleur de fond */
}

.auth-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  flex-grow: 1;
  justify-content: center;
}

.auth-buttons button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  width: auto;
  max-width: 200px;
  margin: 0 auto;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.auth-buttons button:hover {
  background-color: #2980b9;
  transform: translateY(-3px); /* Légère animation sur hover */
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
  margin-top: auto;
}
</style>
