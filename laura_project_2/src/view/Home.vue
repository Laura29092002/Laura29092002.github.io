<script setup lang="ts">
import Top from '@/components/Top.vue'
import School from '@/components/Step.vue'
import Contact from '@/components/Contact.vue'
import { schoolData } from '@/staticData/schoolData'
import { professionalData } from '@/staticData/professionalData'
import NaviagationBar from '@/components/NaviagationBar.vue'
import Projects from '@/components/Projects.vue'
</script>

<template>
  <div class="content">
    <header>
      <NaviagationBar />
      <Top />
    </header>
    <div class="main">
      <div class="aboutMe" id="aboutMe">
        <div class="timeline-container">
        <div class="timeline-item">
          <div v-for="step in schoolData">
            <School :step="step" />
          </div>
        </div>
        </div>
        <div class="timeline-container">
        <div class="timeline-item">
          <div v-for="step in professionalData">
            <School :step="step" />
          </div>
        </div>  
        </div>
      </div>
      <Projects/>
    </div>
    <footer>
      <Contact />
    </footer>
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
}
.content {
  display: flex;
  flex-direction: column;
}
.aboutMe {
  display: flex;
}
header {
  top: 0;
  width: 100%;
}
footer {
  bottom: 0;
}

.timeline-container {
  flex: 0.5;
  position: relative;
  margin: 2rem auto;
  padding-left: 2rem;
  max-width: 600px;
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
}

</style>
