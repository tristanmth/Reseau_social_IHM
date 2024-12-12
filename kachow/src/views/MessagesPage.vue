<template>
  <div class="messagerie">
    <button class="back-button" @click="goBack">⬅</button>
    <div class="header">
      <h1>Messagerie ({{ activeTab === 'prive' ? 'privé' : 'groupes' }})</h1>
    </div>
    <div class="tabs">
      <button :class="{ active: activeTab === 'prive' }" @click="setTab('prive')">Privé</button>
      <button :class="{ active: activeTab === 'groupes' }" @click="setTab('groupes')">Groupes</button>
    </div>
    <div class="content">
      <div v-if="activeTab === 'prive'" class="private-messages">
        <div class="message" v-for="(message, index) in privateMessages" :key="index">
          <div class="avatar"></div>
          <div class="message-info">
            <strong>{{ message.sender }}</strong>
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'groupes'" class="group-messages">
        <p>Vous n'êtes dans aucun groupes.</p>
        <div class="group-buttons">
          <button @click="createGroup">Créer un groupe</button>
          <button @click="joinGroup">Rejoindre un groupe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'prive',
      privateMessages: [
        { sender: 'Voitureman38', text: 'Bonjour' },
        { sender: 'Andydu', text: 'Oui' }
      ]
    };
  },
  methods: {
    setTab(tab) {
      this.activeTab = tab;
    },
    goBack() {
      this.$router.push("/swipe"); 
    },
  }
};
</script>

<style scoped>
h1 {
  margin-top:0px;
  margin-bottom: 35px;
}

.back-button {
  background: none;
  border: none;
  font-size: 60px; 
  color: black; 
  cursor: pointer;
  width: auto;
  padding:0px;
  margin-left:0.5em;
}

.back-button:hover {
  color: gray; 
}
.messagerie {
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  width: 90%;
  margin: 20px auto;
  padding: 10px;
  border-radius: 8px;
}
.header {
  text-align: center;
  margin-bottom: 10px;
}
.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
.tabs button {
  flex: 1;
  font-size:larger;
  padding: 10px;
  cursor: pointer;
  background: #aaa9a9;
  border: none;
  outline: none;
  font-weight: bold;
}
.tabs button.active {
  background: #3498db;
}
.content {
  border-top: 1px solid #ccc;
  padding-top: 10px;
}
.private-messages .message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.private-messages .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ddd;
  margin-right: 10px;
}
.private-messages .message-info {
  flex: 1;
}
.private-messages .message-info strong {
  display: block;
  margin-bottom: 5px;
}
.group-messages .group-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.group-messages .group-buttons button {
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 20%;
}
</style>
