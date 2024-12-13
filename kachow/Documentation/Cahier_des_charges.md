# Cahier des charges : Katchow

## 1. Présentation du projet

Katchow est une application de rencontre et de mise en relation dédiée aux passionnés de voitures. L'objectif principal est de permettre aux utilisateurs de se connecter en fonction de leur passion commune pour les véhicules, via des fonctionnalités de mise en relation individuelle et de création de groupes thématiques.

## 2. Objectifs du projet

Créer une plateforme intuitive permettant aux passionnés de voitures de :
- Créer un profil personnalisé avec des informations sur eux-mêmes et leurs véhicules.
- Trouver d'autres utilisateurs en fonction de critères spécifiques (localisation, marque du véhicule…).
- Communiquer avec des individus ou des groupes partageant leurs intérêts.

Offrir une expérience utilisateur fluide, avec une interface simple et moderne.  
Faciliter la création et la gestion de groupes privés et publics centrés sur des thématiques automobiles.

## 3. Fonctionnalités principales

### 3.1. Gestion des comptes utilisateurs

- **Création de compte via :**
  - Pseudo (unique).
  - Photo de profil (obligatoire, 1 photo unique).
  - Ville (obligatoire).

- **Gestion des informations personnelles :**
  - Possibilité de modifier ou de mettre à jour son profil.

- **Gestion des véhicules :**
  - Ajouter un ou plusieurs véhicules au profil (1 à 3 photos ou une vidéo de 10 secondes maximum par véhicule).
  - Renseigner les caractéristiques du véhicule (marque, modèle, année, etc.).

### 3.2. Fonctionnalité de recherche

- **Filtres de recherche :**
  - Localisation : rayon géographique défini en kilomètres autour de l’utilisateur.
  - Marque du véhicule.

- **Affichage des résultats :**
  - Sous forme de cartes, façon Tinder (avec photos, pseudo, ville et informations succinctes sur le véhicule).
  - Possibilité de swiper à droite pour "liker" ou à gauche pour "passer".

### 3.3. Mise en relation

- **Si deux utilisateurs se "likent" mutuellement (swipe à droite) :**
  - Une discussion privée est automatiquement lancée entre les deux parties.

- **Interface de messagerie :**
  - Affichage des discussions en cours.
  - Notifications en cas de nouveaux messages.

### 3.4. Gestion des groupes

- **Groupes privés :**
  - Création par un utilisateur (propriétaire du groupe).
  - Partage d’un lien d’invitation pour rejoindre le groupe.
  - Le propriétaire valide ou refuse les nouveaux membres.
  - Limitation : maximum 50 membres par groupe.

- **Groupes publics :**
  - Liste consultable par tous les utilisateurs avec filtres par localisation.
  - Le propriétaire valide ou refuse les nouveaux membres.

## 4. Contraintes et exigences

### 4.1. Contraintes fonctionnelles

- Le système doit être capable de gérer plusieurs types de contenus multimédias : photos et vidéos courtes.
- Les informations doivent être stockées et accessibles en temps réel.
- Interface de messagerie fluide avec notifications intégrées.

### 4.2. Contraintes techniques

- Application mobile native (iOS et Android) ou multiplateforme (via une technologie comme Flutter ou React Native).
- Intégration d’une base de données robuste pour la gestion des utilisateurs et des groupes.
- Système de géolocalisation précis pour les recherches.

### 4.3. Contraintes ergonomiques

- Design moderne, simple et orienté utilisateur.
- Navigation intuitive et rapide.
- Mode clair/sombre optionnel.

### 4.4. Contraintes de sécurité

- Système d’authentification sécurisé (mot de passe crypté, possibilité d'authentification via tiers : Google/Facebook/Apple).
- Protection des données personnelles conformément au RGPD.
- Modération des contenus (photos/vidéos) pour éviter les abus.

## 5. Livrables attendus

- **Prototype de l’IHM avec :**
  - Écrans pour la création et la modification de compte.
  - Écran de recherche avec filtres.
  - Écran de messagerie.
  - Écrans de gestion des groupes (création, validation des membres, liste publique/privée).

- **Documentation technique :** 
  - Détail des fonctionnalités et de l’architecture.

- **Plan de tests utilisateurs :** 
  - Pour valider l’ergonomie et la fonctionnalité de l’IHM.

## 6. Risques et solutions

| **Risque**                       | **Solution envisagée**                                                                      |
|----------------------------------|-------------------------------------------------------------------------------------------|
| Failles de sécurité              | Implémentation de protocoles de sécurité (HTTPS, cryptage des mots de passe).             |
| Gestion volumineuse des données  | Utilisation d’une base de données scalable et d’un système de cache.                      |
| Rejet des contenus inappropriés  | Ajout d’un système de signalement et d’une modération automatisée et manuelle.            |

## 7. Conclusion

Katchow vise à devenir une référence pour les passionnés de voitures en combinant une approche communautaire et une expérience utilisateur optimale. La réalisation de ce projet repose sur une interface bien pensée et des fonctionnalités adaptées aux besoins des utilisateurs.
