<template>
  <form @submit.prevent="register">
    <h2>Inscription</h2>
    <input 
      type="file" 
      @change="uploadProfilePic" 
    />
    <input 
      type="text" 
      placeholder="Pseudo" 
      v-model="username" 
      required 
    />
    <input 
      placeholder="Adresse e-mail" 
      v-model="email" 
      required 
    />
    <input 
      type="password" 
      placeholder="Mot de passe" 
      v-model="password" 
      required 
    />
    <input 
      type="password" 
      placeholder="Confirmez le mot de passe" 
      v-model="confirmPassword" 
      required 
    />
    <input 
      type="text" 
      placeholder="Localisation" 
      v-model="location" 
    />
    <button type="submit">S'inscrire</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      location: '',
    };
  },
  methods: {
    register() {
      // Pour la démo, on redirige directement sans validation
      this.$router.push('/first-connection');
    },
    uploadProfilePic(event) {
      console.log(event.target.files[0]);
    },
  },
};
</script>
