<template>
  <div class="container">
    <div class="header">
      <button class="tab-button" @click="goToMsg">Ma messagerie</button>
      <button class="tab-button" @click="goToProfile">Mon profil</button>
    </div>

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
      <p>Vous avez swipe toutes les voitures disponible sur KATCHOW !</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cars: [
      { name: 'Tesla Model S de ElonPower88', image: require('@/assets/tesla-model-s.png') },
      { name: 'Mustang GT de WildHorse45', image: require('@/assets/mustang-gt.png') },
      { name: 'Porsche 911 de SpeedyRico', image: require('@/assets/porsche-911.png') },
      { name: 'Ferrari LaFerrari de RedFury99', image: require('@/assets/ferrari-laferrari.png') },
      { name: 'Lamborghini Aventador de BullRider77', image: require('@/assets/lamborghini-aventador.png') },
      { name: 'Audi R8 de NightOwl33', image: require('@/assets/audi-r8.png') },
      { name: 'McLaren P1 de RocketMan52', image: require('@/assets/mclaren-p1.png') },
      { name: 'Chevrolet Camaro de GoldenChevy21', image: require('@/assets/chevrolet-camaro.png') },
      { name: 'Jeep Wrangler de OffroadQueen', image: require('@/assets/jeep-wrangler.png') },
      { name: 'Toyota Supra de DriftKing23', image: require('@/assets/toyota-supra.png') }
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
  font-size: 14px;
  padding: 8px 15px;
  cursor: pointer;
  width: 30%;
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

.action-btn1,
.action-btn2,
.action-btn3 {
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
