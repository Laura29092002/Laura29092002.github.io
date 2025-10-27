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
    <a href="#aboutMe" class="nav-item" data-target="About me"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-user-round-icon lucide-square-user-round"><path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>ABOUT ME</a>
    <a href="#projects" class="nav-item" data-target="My projects"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-presentation-icon lucide-presentation"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>MY PROJECTS</a>
    <a href="#contact" class="nav-item" data-target="Contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mailbox-icon lucide-mailbox"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"/><polyline points="15,9 18,9 18,11"/><path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"/><line x1="6" x2="7" y1="10" y2="10"/></svg>CONTACT</a>
    <span class="nav-indicator"></span>
  </nav>
</template>

<style scoped>
/* On fait en sorte que chaque élément contienne sa marge interne avec box-sizing et on retire les traits qui sont par défaut sur les liens */
* {
  box-sizing: border-box;
  text-decoration: none;
}

/* On modernise notre balise de navigation avec une petite ombre. On mets tous les éléments du menu les uns bien à côté des autres avec flexbox (display: flex) */
nav {
  background-color: #eeb1b5;
  padding: 0 20px;
  margin-left: 350px;
  margin-right: 350px;
  border-radius: 40px;
  box-shadow: 0 10px 40px rgba(204, 206, 214, 0.8);
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  justify-content: center;
  position: relative;
  

}

/* On stylise chaque élément */
.nav-item {
  color: #fff;
  align-items: center;
  display: inline-flex; 
  gap: 8px;
  font-family: arial, sans-serif;
  padding: 20px;
  margin: 0 6px;
  position: relative;
}

/* Ici on met juste un petit élément avant chaque élément pour le rendre plus beau visuellement */
.nav-item:before {
  content: '';
  position: absolute;
  bottom: -6px;
  background-color: #dfe2ea;
  height: 5px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  left: 0;
  transition: 0.3s;
}

/* Avec les dernières nouveautés de CSS, on peut changer les propriétés des éléments selon des conditions avec not */
.nav-item:not(.is-active):hover:before {
  bottom: 0;
}

/* Stylisons notre indicateur */
.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  transition: 0.4s;
  border-radius: 8px 8px 0 0;
}

svg{
  color: white;
}
</style>
