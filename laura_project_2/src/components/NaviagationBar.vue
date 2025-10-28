<script>
const indicator = document.querySelector('.nav-indicator')
const items = document.querySelectorAll('.nav-item')

function handleIndicator(el) {
  // Boucler sur items -> retirer la classe "is-active"
  items.forEach((item) => {
    item.classList.remove('is-active')
    item.removeAttribute('style')
  })

  const elementColor = 'pink'
  const target = el.dataset.target

  // Styliser l'indicateur
  indicator.style.width = `${el.offsetWidth}px`
  indicator.style.backgroundColor = elementColor
  indicator.style.left = `${el.offsetLeft}px`

  // Ajout la classe is-active
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
    
    <a href="#top" class="nav-item is-active" data-target="Home">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-birdhouse-icon lucide-birdhouse"><path d="M12 18v4"/><path d="m17 18 1.956-11.468"/><path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8"/><path d="M4 18h16"/><path d="M7 18 5.044 6.532"/><circle cx="12" cy="10" r="2"/></svg>
      HOME
    </a>
    <a href="#aboutMe" class="nav-item" data-target="About me">ABOUT ME</a>
    <a href="#projects" class="nav-item" data-target="My projects">MY PROJECTS</a>
    <a href="#contact" class="nav-item" data-target="Contact">CONTACT</a>
    <span class="nav-indicator"></span>
  </nav>
</template>

<style scoped>
/* On fait en sorte que chaque élément contienne sa marge interne avec box-sizing et on retire les traits qui sont par défaut sur les liens */
* {
  box-sizing: border-box;
  text-decoration: none;
}

nav {
  margin-top: 25px;
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  justify-content: center;
  position: relative;
}

.nav-item {
  color: #722535;
  align-items: center;
  display: inline-flex; 
  gap: 8px;
  font-family: arial, sans-serif;
  padding: 20px;
  margin: 0 40px;
  position: relative;
}

.nav-item:before {
  content: '';
  position: absolute;
  bottom: -6px;
  background-color: #eae4df;
  height: 5px;
  width: 100%;
  left: 0;
  transition: 0.3s;
}

.nav-item:not(.is-active):hover:before {
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

svg{
  color: #722535;
}
</style>
