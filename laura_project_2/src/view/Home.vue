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
    <Toggle/>
    <NaviagationBar />
    <Top />
  </header>
  <Steps/>
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
