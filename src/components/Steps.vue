<script setup lang="ts">
import School from '@/components/Step.vue'
import { schoolData } from '@/staticData/schoolData'
import { professionalData } from '@/staticData/professionalData'
</script>

<template>
  <div
    data-kinesisscroll-item
    data-ks-strength="-50"
    data-ks-transformaxis="Y"
    class="timelines-wrapper"
  >
    <!-- Parcours Scolaire -->
    <div class="timeline-container" id="aboutMe">
      <h2 class="title">Parcours Scolaire</h2>
      <div class="flower-center-haut">
      <img src="../assets/images/flore.png" alt="fleur centrale" />
    </div>
    <div class="flower-center">
      <img src="../assets/images/flore.png" alt="fleur centrale" />
    </div>
      <div class="timeline-vertical">
        <div v-for="(step, index) in schoolData"
          :key="index">
          <School :step="step" />
        </div>
      </div>
    </div>

    <div class="flower-center-haut-2">
      <img src="../assets/images/flore.png" alt="fleur centrale" />
    </div>
    <div class="flower-center-bas-2">
      <img src="../assets/images/flore.png" alt="fleur centrale" />
    </div>
    <div class="flower-center-bas">
      <img src="../assets/images/flore.png" alt="fleur centrale" />
    </div>

    <div class="flower-bas">
      <img src="../assets/images/flore.png" alt="fleur centrale" />
    </div>

    <!-- Parcours Professionnel -->
    <div class="timeline-container">
      <h2 class="title">Parcours Professionnel</h2>
      <div class="timeline-vertical">
        <div v-for="(step, index) in professionalData"
          :key="index">
          <School :step="step" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- TITRE --- */
.title {
  text-align: center;
  margin-bottom: 1rem;
}

/* --- WRAPPER PRINCIPAL --- */
.timelines-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8rem;
  width: 100%;
  flex-wrap: wrap;
}

/* --- CHAQUE TIMELINE --- */
.timeline-container {
  position: relative;
}

/* --- TIMELINE VERTICALE --- */
.timeline-vertical {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
}

/* Ligne verticale */
.timeline-vertical::before {
  content: '';
  position: absolute;
  top: 0;
  left: 12px;
  width: 4px;
  height: 100%;
  background-color: var(--text-color);
  opacity: 0.4;
  border-radius: 2px;
}

/* Chaque step */
.timeline-vertical > div {
  position: relative;
  width: 100%;
}

/* Point sur la ligne */
.timeline-vertical > div .timeline-content::before {
  content: '';
  position: absolute;
  top: 2.5rem;
  left: -28px;
  width: 16px;
  height: 16px;
  background-color: var(--secondary-color);
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--primary-color);
}

/* --- RESPONSIVE --- */
@media (max-width: 900px) {
  .timelines-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .timeline-container {
    max-width: 90%;
  }

  .title {
    font-size: 26px;
  }
}


.flower-center-haut {
  position: absolute;
  top: 15%;        
  left: 70%;       
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
  top: 25%;        
  left: 100%;       
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

</style>
