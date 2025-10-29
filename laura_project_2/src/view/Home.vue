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
      <div
        data-kinesisscroll-item
        data-ks-strength="-50"
        data-ks-transformaxis="Y"
      >
      <div class="aboutMe" id="aboutMe">
        <img src="../assets/liane_timeline.png" alt="icon" />
        <div class="timeline-container">
          <h2 class="title">Parcours Scolaire</h2>
        <div class="timeline-item">
          <div v-for="step in schoolData">
            <School :step="step" />
          </div>

        </div>
        </div>
        <img src="../assets/liane_timeline.png" alt="icon" />
        <div class="timeline-container">
          <h2 class="title">Parcours Professionnel</h2>
        <div class="timeline-item">
          <div v-for="step in professionalData">
            <School :step="step" />
          </div>
        </div>  
        </div>
      </div>
      </div>
      <Projects/>
    </div>
    <footer>
      <hr class="separator">
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

.title{
  color: #722535;
  font-family: "Caprasimo", serif;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  margin-left: -130px;
  margin-bottom: 20px;
  font-size: 30px;
}
.content {
  display: flex;
  flex-direction: column;
}
.aboutMe {
  display: flex;
}
.aboutMe img {
  width: 20%
}
header {
  top: 0;
  width: 100%;
}
footer {
  bottom: 0;
}

.timeline-container {
  position: relative;
  margin: 2rem auto;
  padding-left: 2rem;
  max-width: 600px;
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
}

.separator {
  border: none;
  height: 2px;
  background-color: #722535; 
  opacity: 0.5;          
  width: 20%;                
  margin: 10px auto 20px auto;
}


</style>
