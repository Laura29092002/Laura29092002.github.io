<script setup lang="ts">
import Top from '@/components/Top.vue'
import Contact from '@/components/Contact.vue'
import Projects from '@/components/Projects.vue'
import Steps from '@/components/Steps.vue'
import Certification from '@/components/Certification.vue'
import NavigationBar from '@/components/NavigationBar.vue'
const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header>
      
      <NavigationBar @goToSection="scrollToSection" />
    <Top />
  </header>
  <Steps />
  <Certification />
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

header .app-container {
  margin-left: auto;
}

footer {
  bottom: 0;
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
