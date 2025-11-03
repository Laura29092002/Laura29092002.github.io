<script setup>

const props = defineProps({
  popupVisible: { type: Boolean, default: false },
  selectedSlide: { type: Object, default: () => ({}) }
})

const emit = defineEmits(['update:popupVisible'])

// ferme la popup en émettant l'update du v-model
function close() {
  emit('update:popupVisible', false)
}
</script>

<template>
  <div v-if="popupVisible" class="popup-overlay" @click.self="close">
      <div class="popup-content">
        <div class="popup-body">
        <img :src="selectedSlide.image" :alt="selectedSlide.title" />
        <div class="popup-text">
            <h3>{{ selectedSlide.title }}</h3>
            <a :href="selectedSlide.link" target="_blank" v-if="selectedSlide.link">Lien github</a>
            <p class="technologies"><strong class="strong">Technologies :</strong> {{ selectedSlide.technologies }}</p>
            <p><strong class="strong">Description :</strong> {{ selectedSlide.description }}</p>
        </div>
        <button @click="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
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
h3{
    font-size: 25px;
    color: var(--primary-color);
}
.popup-content {
  background: var(--bg-color);
  padding: 20px;
  border-radius: 15px;
  max-width: 80%;
  max-height: 80%;
  animation: fadeIn 0.3s ease;
}
a {
  color: var(--text-color);
}
.technologies{
    font-size: 14px;
    font-style: italic;
}

.strong{
    font-style: normal;
    font-size: 16px;
    color: var(--primary-color);
}

.popup-body{
    display: flex;
    gap: 10px;
    align-items: flex-start;
    flex-wrap: wrap;
}

.popup-body img{
    width: 60%;
}
.popup-text {
  flex: 1;
  text-align: left;
}
.popup-content button {
  margin-top: 10px;
  background-color: var(--bg-color);
  color: var(--primary-color);
  border: none;
  cursor: pointer;
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
