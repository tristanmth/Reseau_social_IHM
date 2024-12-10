<template>
    <div class="first-connection">
      <!-- Titre de la page -->
      <h1>Mes préférences</h1>
        <p>
            Nous allons déterminer vos préférences à partir de quelques profiles.
        </p>
      <!-- Section contenant l'image -->
      <div class="car-image">
        <img src="@/assets/bmw.png" alt="Voiture" />
        <div class="car-info">
          <p>BMW de Jean23</p>  
          <p>A 15 km</p>
        </div>
      </div>
  
      <!-- Section des boutons -->
      <div class="actions">
        <button class="action-button">
          <i class="icon-cross"></i>
        </button>
        <button class="action-button">
          <i class="icon-doc"></i>
        </button>
        <button class="action-button">
          <i class="icon-check"></i>
        </button>
      </div>
    </div>
  </template>

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
  margin-bottom: 20px;
}

.car-image {
  position: relative;
  width: 300px; 
  height: auto  ; 
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}


.car-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  font-size: 14px;
  text-align: left;
}

/* Style pour les boutons */
.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.action-button {
  width: 60px;
  height: 60px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.action-button i {
  font-size: 24px;
  color: black;
}

.icon-cross::before {
  content: "✖"; 
}

.icon-doc::before {
  content: "📄"; 
}

.icon-check::before {
  content: "✔"; 
}
</style>
