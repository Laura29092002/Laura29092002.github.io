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
    <a href="#top" class="nav-item is-active" data-target="Home">HOME</a>
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

/* On modernise notre balise de navigation avec une petite ombre. On mets tous les éléments du menu les uns bien à côté des autres avec flexbox (display: flex) */
nav {
  background-color: #fff;
  padding: 0 20px;
  border-radius: 40px;
  box-shadow: 0 10px 40px rgba(159, 162, 177, 0.8);
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  position: relative;
}

/* On stylise chaque élément */
.nav-item {
  color: #83818c;
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
.nav-item:not(.is-active):hover {
  color: #333;
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
</style>
