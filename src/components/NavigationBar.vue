<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Toggle from '@/components/Toggle.vue'

const isMenuOpen = ref(false)
const indicator = ref<HTMLElement | null>(null)
const items = ref<HTMLElement[]>([])

const emit = defineEmits(['goToSection'])

function handleIndicator(el: HTMLElement) {
  items.value.forEach((item) => {
    item.classList.remove('is-active')
    item.removeAttribute('style')
  })


  if (indicator.value) {
    indicator.value.style.width = `${el.offsetWidth}px`
    indicator.value.style.left = `${el.offsetLeft}px`
  }

  el.classList.add('is-active')
}

function handleNavClick(event: Event, section: string) {
  handleIndicator(event.currentTarget as HTMLElement)
  isMenuOpen.value = false
  emit('goToSection', section)
}

onMounted(() => {
  indicator.value = document.querySelector('.nav-indicator')
  items.value = Array.from(document.querySelectorAll<HTMLElement>('.nav-item'))
  
  const activeItem = items.value.find(item => item.classList.contains('is-active'))
  if (activeItem) {
    handleIndicator(activeItem)
  }
})
</script>

<template>
  <div class="navbar-container">
    <nav>
      <button class="burger-menu" @click="isMenuOpen = !isMenuOpen" :class="{ 'is-open': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Overlay pour fermer le menu en cliquant à l'extérieur -->
      <div 
        v-if="isMenuOpen" 
        class="overlay" 
        @click="isMenuOpen = false"
      ></div>

      <div class="nav-menu" :class="{ 'is-open': isMenuOpen }">
        <a @click="handleNavClick($event, 'top')" class="nav-item is-active" data-target="Home">
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
            class="lucide lucide-birdhouse-icon lucide-birdhouse"
          >
            <path d="M12 18v4" />
            <path d="m17 18 1.956-11.468" />
            <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" />
            <path d="M4 18h16" />
            <path d="M7 18 5.044 6.532" />
            <circle cx="12" cy="10" r="2" />
          </svg>
          ACCUEIL
        </a>
        <a @click="handleNavClick($event, 'aboutMe')" class="nav-item" data-target="About me">A PROPOS</a>
        <a @click="handleNavClick($event, 'projects')" class="nav-item" data-target="My projects">MES PROJETS</a>
        <a @click="handleNavClick($event, 'contact')" class="nav-item" data-target="Contact">CONTACT</a>
        <span class="nav-indicator"></span>
      </div>
    </nav>

    <div class="toggle-wrapper">
      <Toggle />
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  text-decoration: none;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  width: 100%;
}

nav {
  white-space: nowrap;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  flex: 1;
}

.toggle-wrapper {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.burger-menu {
  display: none;
}

.overlay {
  display: none;
}

.nav-menu {
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  justify-content: center;
  position: relative;
}

.nav-item {
  color: var(--text-color);
  align-items: center;
  display: inline-flex;
  font-weight: bold;
  gap: 8px;
  padding: 20px;
  margin: 0 40px;
  position: relative;
  cursor: pointer;
}

.nav-item:before {
  content: '';
  position: absolute;
  bottom: -6px;
  background-color: var(--secondary-color);
  border-radius: 12px;
  height: 5px;
  width: 100%;
  left: 0;
  transition: 0.3s;
}

.nav-item:hover:before {
  bottom: 0;
}

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  transition: 0.4s;
  border-radius: 8px 8px 0 0;
}

svg {
  color: var(--text-color);
}

/* Responsive - Menu burger */
@media screen and (max-width: 980px) {
  .navbar-container {
    justify-content: flex-start;
  }

  nav {
    margin-top: 0;
  }

  .toggle-wrapper {
    right: 20px;
    top: 20px;
    transform: none;
    z-index: 1001;
  }

  .burger-menu {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1001;
  }

  .burger-menu span {
    width: 25px;
    height: 3px;
    background-color: var(--primary-color);
    border-radius: 3px;
    transition: 0.3s;
  }

  .burger-menu.is-open span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
  }

  .burger-menu.is-open span:nth-child(2) {
    opacity: 0;
  }

  .burger-menu.is-open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  .overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100%;
    width: 250px;
    background-color: var(--bg-color);
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 80px;
    transition: left 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
  }

  .nav-menu.is-open {
    left: 0;
  }

  .nav-item {
    margin: 0;
    padding: 20px 30px;
    width: 100%;
    justify-content: flex-start;
    
  }

  .nav-item:hover{
    background-color: var(--primary-color);
    color: var(--text-color);
  }

  .nav-item:before {
    display: none;
  }

  .nav-indicator {
    display: none;
  }
}
</style>