<script>
const indicator = document.querySelector('.nav-indicator')
const items = document.querySelectorAll('.nav-item')

function handleIndicator(el) {
  items.forEach((item) => {
    item.classList.remove('is-active')
    item.removeAttribute('style')
  })

  const elementColor = 'pink'
  const target = el.dataset.target

  indicator.style.width = `${el.offsetWidth}px`
  indicator.style.backgroundColor = elementColor
  indicator.style.left = `${el.offsetLeft}px`

  el.classList.add('is-active')
  el.style.color = elementColor
}

items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    handleIndicator(e.target)
  })
  item.classList.contains('is-active') && handleIndicator(item)
})
</script>
<template>
  <nav>
    <a @click="$emit('goToSection', 'top')" class="nav-item is-active" data-target="Home">
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
    <a @click="$emit('goToSection', 'aboutMe')" class="nav-item" data-target="About me">A PROPOS</a>
    <a @click="$emit('goToSection', 'projects')"  class="nav-item" data-target="My projects">MES PROJETS</a>
    <a @click="$emit('goToSection', 'contact')" class="nav-item" data-target="Contact">CONTACT</a>
    <span class="nav-indicator"></span>
  </nav>
</template>

<style scoped>
* {
  box-sizing: border-box;
  text-decoration: none;
}

nav {
  white-space: nowrap; 
  margin-top: 10px;
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
</style>
