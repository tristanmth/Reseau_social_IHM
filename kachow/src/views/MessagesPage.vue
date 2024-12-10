<template>
    <div class="messages">
      <h2>Messagerie</h2>
      <h3>Privé</h3>
      <div v-for="(message, index) in privateMessages" :key="index">
        <p>{{ message }}</p>
      </div>
      <h3>Groupes</h3>
      <div v-for="(group, index) in groups" :key="index">
        <p>{{ group.name }} ({{ group.members }}/50)</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        privateMessages: ['Bonjour', 'Oui'],
        groups: [{ name: 'Groupe Grenoble', members: 27 }],
      };
    },
  };
  </script>
  