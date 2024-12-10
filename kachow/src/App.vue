<template>
  <div id="app">
    <header class="app-header">
      <h1>Bienvenue sur Katchow</h1>
    </header>
    <main class="app-main">
      <router-view />
    </main>
    <footer class="app-footer">
      <p>&copy; 2024 Katchow</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Styles globaux de l'application */
#app {
  font-family: Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: #3498db;
  color: white;
  padding: 15px;
  text-align: center;
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
</style>
