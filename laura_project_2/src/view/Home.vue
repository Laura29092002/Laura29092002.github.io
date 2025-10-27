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
        <div class="school">
          <div v-for="step in schoolData">
            <School :step="step" />
          </div>
        </div>

        <div class="school">
          <div v-for="step in professionalData">
            <School :step="step" />
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
  justify-content: space-between;
}
.school {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  width: 350px;
}
header {
  top: 0;
  width: 100%;
}
footer {
  bottom: 0;
}
</style>
