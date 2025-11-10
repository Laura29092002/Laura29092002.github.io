<script setup lang="ts">
import { ref } from 'vue'

const email = 'mussardlaura299@gmail.com'
const visible = ref(false)
const copied = ref(false)
const input = ref<HTMLInputElement | null>(null)
let hideTimer: ReturnType<typeof setTimeout> | null = null

function show() {
  visible.value = true
  copied.value = false
  clearTimeout(hideTimer!)
}

function keep() {
  clearTimeout(hideTimer!)
}

function hide() {
  // petit délai pour permettre clic sur le bouton
  hideTimer = setTimeout(() => (visible.value = false), 200)
}

function selectInput() {
  // sélectionne le texte dans l'input
  input.value && input.value.select()
}

async function copy() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    // garde le message quelques secondes
    setTimeout(() => (copied.value = false), 2000)
  } catch (e) {
    // fallback : sélectionner pour que l'utilisateur puisse Ctrl+C
    selectInput()
    alert('Impossible d’utiliser le presse-papier : sélectionnez et copiez manuellement.')
  }
}
</script>

<template>
  <h4>Contact</h4>
  <div id="contact">
    <div class="tooltip-wrapper" @mouseleave="hide">
      <a :href="`mailto:${email}`" class="icon-link" @mouseenter="show" @focus="show">
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
          class="lucide lucide-mail-icon lucide-mail"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      </a>

      <div v-if="visible" class="tooltip" role="tooltip" @mouseenter="keep" @mouseleave="hide">
        <label class="sr-only" for="email-field">Adresse e-mail</label>
        <input id="email-field" ref="input" :value="email" readonly @focus="selectInput" />
        <button @click="copy" :aria-label="copied ? 'Copié' : 'Copier l’adresse'">
          {{ copied ? 'Copié ✓' : 'Copier' }}
        </button>
      </div>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/laura-mussard-3576a6255/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-linkedin-icon lucide-linkedin"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" /></svg
      ></a>
    </div>
    <div>
      <a href="https://github.com/Laura29092002"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github-icon lucide-github"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <path d="M9 18c-4.51 2-5-2-7-2" /></svg
      ></a>
    </div>
  </div>
</template>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}
.icon-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}
.tooltip {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(100% + 8px);
  background: var(--primary-color);
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 8px;
  align-items: center;
  user-select: text; /* permet la sélection */
  z-index: 50;
}
.tooltip input {
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
  font-size: 14px;
  width: max-content;
  min-width: 180px;
}
.tooltip button {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border: none;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
h4 {
  text-align: center;
  color: var(--primary-color);
  font-family: 'Caprasimo', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
}
#contact {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 15px;
  padding: 20px;
}
a {
  color: var(--primary-color);
}
</style>
