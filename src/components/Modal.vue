<script setup lang="ts">
const props = defineProps({
  popupVisible: { type: Boolean, default: false },
  selectedSlide: { type: Object, default: () => ({}) },
})

const emit = defineEmits(['update:popupVisible'])

function close() {
  emit('update:popupVisible', false)
}
</script>

<template>
  <div v-if="popupVisible" class="popup-overlay" @click.self="close">
    <div class="popup-content">
      <div class="popup-body">
        <video v-if="selectedSlide.video" :key="selectedSlide.video" controls autoplay muted>
          <source :src="selectedSlide.video" type="video/mp4" />
        </video>
        <img v-else :src="selectedSlide.image" :alt="selectedSlide.title" />

        <div class="popup-text">
          <h3>{{ selectedSlide.title }}</h3>
          <a :href="selectedSlide.link" target="_blank" v-if="selectedSlide.link">Lien github</a>
          <p class="technologies">
            <strong class="strong">Technologies :</strong> {{ selectedSlide.technologies }}
          </p>
          <p><strong class="strong">Description :</strong> {{ selectedSlide.description }}</p>
        </div>

        <button @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.popup-content {
  background: var(--bg-color);
  padding: 20px;
  border-radius: 15px;
  max-width: 90%; /* plus flexible sur petits écrans */
  max-height: 60vh; /* limite la hauteur */
  overflow-y: auto; /* ajoute un scroll vertical si le contenu dépasse */
  box-sizing: border-box; /* évite le dépassement dû au padding */
  animation: fadeIn 0.3s ease;
}

.popup-body {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  flex-wrap: wrap; /* permet le retour à la ligne */
  word-wrap: break-word; /* casse les mots trop longs */
}

.popup-body img,
.popup-body video {
  width: 50%;
  max-width: 100%; /* empêche le débordement horizontal */
  height: auto;
}

.popup-text {
  flex: 1;
  text-align: left;
  overflow-wrap: break-word; /* empêche le texte de sortir du conteneur */
  word-break: break-word;
  max-width: 100%;
}

a {
  color: var(--text-color);
  word-break: break-all; /* empêche les longs liens de déborder */
}

.technologies {
  font-size: 14px;
  font-style: italic;
}

.strong {
  font-style: normal;
  font-size: 16px;
  color: var(--primary-color);
}

.popup-content button {
  margin-top: 10px;
  background-color: var(--bg-color);
  color: var(--primary-color);
  border: none;
  cursor: pointer;
}

.popup-content::-webkit-scrollbar {
  width: 14px;
}

.popup-content::-webkit-scrollbar-track {
  border-radius: 30px;
}

.popup-content::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 30px;
  border: 3px solid var(--text-color);
}

.popup-content::-webkit-scrollbar-thumb:hover {
  background-color: var(--secondary-color);
}

/* Adaptation mobile */
@media (max-width: 768px) {
  .popup-body {
    flex-direction: column; /* image au-dessus du texte */
    align-items: center;
  }

  .popup-body img,
  .popup-body video {
    width: 100%; /* pleine largeur sur petit écran */
  }

  .popup-text {
    text-align: center;
  }

  h3 {
    font-size: 25px;
    color: var(--primary-color);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
