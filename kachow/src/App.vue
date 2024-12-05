<template>
  <div id="app">
    <h1>Site de Rencontre</h1>
    <div v-for="user in users" :key="user.id" class="profile">
      <h2>{{ user.name }}</h2>
      <p>{{ user.description }}</p>
      <button @click="sendMessage(user.id)">Envoyer un message</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Alice', description: 'Aime les randonnées et les chats.' },
        { id: 2, name: 'Bob', description: 'Passionné de musique et de voyages.' },
        { id: 3, name: 'Charlie', description: 'Fan de cuisine et de cinéma.' }
      ]
    };
  },
  methods: {
    sendMessage(userId) {
      alert(`Message envoyé à l'utilisateur ${userId}`);
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  margin: 20px;
}

.profile {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
