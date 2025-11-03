<template>
  <div v-if="visible" class="overlay" @click.self="$emit('close')">
    <div class="popup">
      <slot />
      <button @click="$emit('close')">Fermer</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean
})
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
}
.popup {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
</style>
