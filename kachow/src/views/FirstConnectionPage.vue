<template>
  <div class="container">
    <h1>Mes préférences</h1>
        <p>
            Nous allons déterminer vos préférences à partir de quelques profiles.
        </p>

    <div class="card" v-if="currentCarIndex < cars.length">
      <img class="car-image" :src="cars[currentCarIndex].image" :alt="cars[currentCarIndex].name" />
      <div class="car-info">
        <p class="car-model">{{ cars[currentCarIndex].name }}</p>
        <p class="user-name">{{ cars[currentCarIndex].distance }}</p>
      </div>


      <div class="actions">
        <button class="action-btn1" @click="swipeCar('dislike')">❌</button>
        <button class="action-btn2" @click="openInfos">📝</button>
        <button class="action-btn3" @click="swipeCar('like')">✔️</button>
      </div>
    </div>

    <div v-else>
      <p>Vous avez terminé de swiper toutes les voitures !</p>
      <button class="tab-button" @click="goToProfile">Aller au Profil</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        { name: 'BMW de Jean23', image: require('@/assets/bmw.png'), distance: 'À 15 km' },
        { name: 'Taco de Micheline1925', image: require('@/assets/taco.png'), distance: 'À 7 km' },
        { name: 'Camionnette de GentilHommeOffreBonbon', image: require('@/assets/candy.png'), distance: 'À 25 km' },
        { name: 'Pickup de MamanCascouDu69', image: require('@/assets/pickup.png'), distance: 'À 10 km' },
        { name: 'Tuk-tuk de Borris42510', image: require('@/assets/tuktuk.png'), distance: 'À 5 km' }
      ],
      currentCarIndex: 0,
    };
  },
  methods: {
    swipeCar(action) {
      console.log(`Vous avez ${action === 'like' ? 'aimé' : 'ignoré'} ${this.cars[this.currentCarIndex].name}`);
      this.currentCarIndex++;
    },
    goToProfile() {
      this.$router.push('/profile');
    },
    goToMsg() {
      this.$router.push('/messages');
    },
    openInfos() {
      console.log("Infos pour " + this.cars[this.currentCarIndex].name);
    },
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding: 10px;
  background-color: #f0f0f0;
}

.tab-button {
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  width: 40%;
}

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

.actions {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  justify-content: space-around;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}

.action-btn1,
.action-btn2,
.action-btn3 {
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>

