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
  <header>
    <NaviagationBar />
    <Top />
  </header>
  <div data-kinesisscroll-item data-ks-strength="-50" data-ks-transformaxis="Y">
    <div class="timeline-container" id="aboutMe">
      <h2 class="title">Parcours Scolaire</h2>
      <div class="flower-center-haut">
      <img src="../assets/flore.png" alt="fleur centrale" />
    </div>
    <div class="flower-center">
      <img src="../assets/flore.png" alt="fleur centrale" />
    </div>
      <div>
        <div class="timeline-horizontal">
          <div v-for="step in schoolData">
            <School :step="step" />
          </div>
        </div>
      </div>
    </div>
    <div class="flower-center-haut-2">
      <img src="../assets/flore.png" alt="fleur centrale" />
    </div>
    <div class="flower-center-bas-2">
      <img src="../assets/flore.png" alt="fleur centrale" />
    </div>
    <div class="flower-center-bas">
      <img src="../assets/flore.png" alt="fleur centrale" />
    </div>

    <div class="flower-bas">
      <img src="../assets/flore.png" alt="fleur centrale" />
    </div>
    <div class="timeline-container">
      <h2 class="title">Parcours Professionnel</h2>
      <div>
        <div class="timeline-horizontal">
          <div v-for="step in professionalData">
            <School :step="step" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Projects />
  <footer>
    <hr class="separator" />
    <Contact />
    <div class="flower-fin">
      <img src="../assets/flore.png" alt="fleur centrale" />
    </div>
  </footer>
</template>

<style>
.title {
  color: var(--primary-color);
  font-family: 'Caprasimo', serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  font-size: 30px;
  margin-left: 40px;
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
  position: relative;
  margin: 2rem auto;
}

.timeline-horizontal {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  margin: 2rem 0;
  padding: 1.5rem 0;
}

/* Ligne horizontale */
.timeline-horizontal::before {
  content: '';
  position: absolute;
  top: 20px; /* hauteur de la ligne */
  left: 50%; /* centre horizontalement */
  transform: translateX(-50%); /* ajuste pour que le centre de la ligne soit aligné */
  width: 80%; /* largeur de la ligne */
  height: 4px;
  background-color: var(--text-color);
  border-radius: 2px;
  opacity: 0.5;
}

/* Chaque step */
.timeline-horizontal > div {
  position: relative;
  margin-right: 60px; /* espace entre les étapes */
}

/* Point sur la ligne */
.timeline-horizontal > div .timeline-content::before {
  content: '';
  position: absolute;
  top: -10px; /* ajuster selon taille du point */
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background-color: var(--secondary-color);
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--primary-color);
}

.separator {
  border: none;
  height: 2px;
  background-color: var(--primary-color);
  opacity: 0.5;
  width: 20%;
  margin: 10px auto 20px auto;
}

.flower-center-haut {
  position: absolute;
  top: 10%;        
  left: 30%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}

.flower-center-haut img {
  width: 50px;   
  height: 50px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-center-haut-2 {
  position: absolute;
  top: 45%;        
  left: 35%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}

.flower-center-haut-2 img {
  width: 75px;   
  height: 75px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-center {
  position: absolute;
  top: 40%;        
  left: 60%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}

.flower-center img {
  width: 50px;   
  height: 50px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-center-bas {
  position: absolute;
  top: 100%;        
  left: 45%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}

.flower-center-bas img {
  width: 150px;   
  height: 150px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-center-bas-2 {
  position: absolute;
  top: 65%;        
  left: 55%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}

.flower-center-bas-2 img {
  width: 75px;   
  height: 75px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-bas {
  position: absolute;
  top: 115%;        
  left: 55%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}

.flower-bas img {
  width: 100px;   
  height: 100px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-fin {
  position: absolute;
  top: 340%;        
  left: 45%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}

.flower-fin img {
  width: 50px;   
  height: 50px;
  opacity: 0.3;   
  filter: blur(1px);
}
</style>
