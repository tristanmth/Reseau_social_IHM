<template>
    <div class="first-connection">
      <!-- Titre de la page -->
      <h1>Mes préférences</h1>
        <p>
            Nous allons déterminer vos préférences à partir de quelques profiles.
        </p>
        <div class="card">
      <img class="car-image" src="../assets/bmw.png" alt="Car">
      <div class="car-info">
        <p class="car-model">BMW de Jean23</p>
        <p class="user-name">A 15 km</p>
      </div>

      <div class="actions">
        <button class="action-btn1" @click="swipeLeft">❌</button>
        <button class="action-btn2" @click="openInfos">📝</button>
        <button class="action-btn3" @click="swipeRight">✔️</button>
      </div>
    </div>
    </div>
  </template>

<script>
export default {
  methods: {
    swipeLeft() {
      console.log("Swiped Left");
    },
    swipeRight() {
      // A modifier
      this.$router.push('/profile');
    },
    openInfos() {
      console.log("Open Infos");
    },
  },
};
</script>

<style scoped>
.first-connection {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
p {margin-bottom: 5px;}
.card {
  width: 25vw;
  height: 65vh;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  margin-top: 10px;
}

.car-image {
  width: 100%;
  height: 75%;
  object-fit: cover;
}

.car-info {
  padding: 10px;
}

.car-model {
  font-weight: bold;
  font-size: 18px;
}

.user-name {
  color: #666;
  font-size: 14px;
}

.actions {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}

.action-btn1 {
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.action-btn2 {
  font-size: 27px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.action-btn3 {
  font-size: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
