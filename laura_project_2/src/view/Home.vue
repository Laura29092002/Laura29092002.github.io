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
  <h2>Mes diplômes</h2>
  <div class="diplome">
  <img src="../assets/images/diplome-ux-ui.jpg"></img>
  <img src="../assets/images/diplome-po.jpg"></img>
  </div>
  <Projects />
  <footer>
    <hr class="separator" />
    <Contact />
  </footer>
</template>

<style>

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
  align-items: center;
}

img{
  width: 20%;
  border-radius: 10px;
  margin: 30px;
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
