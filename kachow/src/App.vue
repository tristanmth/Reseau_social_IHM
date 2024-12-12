<template>
  <div id="app">
    <header class="app-header">
      <h1 class="titre">Bienvenue sur Katchow</h1>
      <button class="logout-button" @click="redirectToLogin">Déconnexion</button>
    </header>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>


<script>
export default {
  computed: {
    showLogoutButton() {
      const routesWithLogout = ['FirstConnection', 'Swipes', 'Profile', 'Messages'];
      return routesWithLogout.includes(this.$route.name); 
    },
  },
  methods: {
    redirectToLogin() {
      this.$router.push('/auth'); 
    },
  },
};
</script>


<style>

#app {
  font-family: Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  position: relative;
}

.navbar {
  margin-top: 10px;
}

.navbar a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}

.app-main {
  flex: 1;
  padding: 20px;
}

.app-footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.logout-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  width: auto;
  width: auto;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #c0392b;
}

.titre {
  color: white;
}
</style>
