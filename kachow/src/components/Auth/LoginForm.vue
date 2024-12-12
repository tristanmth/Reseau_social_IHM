<template>
  <form @submit.prevent="login">
    <h2>Connexion</h2>
    <input 
      type="text" 
      placeholder="Pseudo ou e-mail" 
      v-model="username" 
      required 
    />
    <input 
      type="password" 
      placeholder="Mot de passe" 
      v-model="password" 
      required 
    />
    <button type="submit">Se connecter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$router.push('/profile');
    },
  },
};
</script>
