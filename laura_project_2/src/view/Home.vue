<script setup lang="ts">
import Top from '@/components/Top.vue'
import Contact from '@/components/Contact.vue'
import NaviagationBar from '@/components/NaviagationBar.vue'
import Projects from '@/components/Projects.vue'
import Toggle from '@/components/Toggle.vue'
import Steps from '@/components/Steps.vue'
</script>

<template>
  <header>
    <div class="header-top">
      <div class="nav-center">
        <NaviagationBar />
      </div>
      <Toggle />
    </div>
    <Top />
  </header>
  <Steps/>
  <h2>Mes certifications</h2>
  <div class="diplome">
    <a href="https://app.procertif.com/wallet/65770394d0187"><img class="img-diplome" src="../assets/images/diplome-ux-ui.jpg"></img></a>
    <a href="https://app.procertif.com/wallet/657439004aec6/2311laumus841"><img class="img-diplome" src="../assets/images/diplome-po.jpg"></img></a>
  </div>
  <Projects />
  <footer>
    <hr class="separator" />
    <Contact />
  </footer>
</template>

<style scoped>



header {
  top: 0;
  width: 100%;
}

.header-top {
  display: flex;
  justify-content: space-between; 
}

.nav-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
header .app-container {
  margin-left: auto;
}

footer {
  bottom: 0;
}

.diplome{
  display: flex;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  z-index: 99;
  align-items: center;
  gap: 70px;
  margin-bottom: 50px;
}

.img-diplome{
  width: 300px;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.img-diplome:hover {
  transform: scale(1.1); /* agrandissement au survol */
}

.separator {
  border: none;
  height: 2px;
  background-color: var(--primary-color);
  opacity: 0.5;
  width: 20%;
  margin: 10px auto 20px auto;
}

</style>
