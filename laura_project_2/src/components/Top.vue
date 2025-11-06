<script>
import { initializeKinesis } from '@amineyarman/kinesis'
initializeKinesis()
</script>

<template>
  <div data-kinesistransformer>
    <div class="flower-right-haut">
      <img src="../assets/images/flore.png" alt="fleur right haut" />
    </div>
    <div class="flower-center">
      <img src="../assets/images/flore.png" alt="fleur centrale" />
    </div>
    <div class="flower-left">
      <img src="../assets/images/flore.png" alt="fleur left" />
    </div>
    <div class="flower-left-bas">
      <img src="../assets/images/flore.png" alt="fleur right bas" />
    </div>
    <div class="flower-right">
      <img src="../assets/images/flore.png" alt="fleur right" />
    </div>
    <div class="flower-right-bas">
      <img src="../assets/images/flore.png" alt="fleur right bas" />
    </div>
    <div class="flower-center-bas">
      <img src="../assets/images/flore.png" alt="fleur centrale" />
    </div>
    <div id="top" class="top">
      <div data-kinesistransformer-element data-ks-transform="translate" data-ks-strength="15">
        <div style="margin-right: 600px;">
          <img class="fleur" src="../assets/images/flore.png" alt="icon" />
        </div>
      </div>
      <div data-kinesistransformer-element data-ks-transform="translate" data-ks-strength="23">
        <div style="margin-left: 600px;">
          <img class="fleur" src="../assets/images/flore.png" alt="icon" />
        </div>
      </div>

      <div data-kinesistransformer-element data-ks-transform="translate" data-ks-strength="23">
        <div style="margin-right: 1000px;">
          <img class="fleur" src="../assets/images/flore.png" alt="icon" />
        </div>
      </div>
      <div data-kinesistransformer-element data-ks-transform="translate">
        <h1>LAURA MUSSARD</h1>
        <h2 class="job">Développeuse Full-Stack</h2>
      </div>
      <div data-kinesistransformer-element data-ks-transform="translate" data-ks-strength="23">
        <div style="margin-left: 1000px;">
          <img class="fleur" src="../assets/images/flore.png" alt="icon" />
        </div>
      </div>
      <div data-kinesistransformer-element data-ks-transform="translate" data-ks-strength="-15">
        <div style="margin-right: 600px;">
          <img class="fleur" src="../assets/images/flore.png" alt="icon" />
        </div>
      </div>
      <div data-kinesistransformer-element data-ks-transform="translate" data-ks-strength="-25">
        <div style="margin-left: 600px;">
          <img class="fleur" src="../assets/images/flore.png" alt="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.top {
  text-align: center;
  padding-bottom: 60px;
  align-items: center;
}

.job{
  
  text-shadow: 2px 2px 5px var(--shadow);
}

.fleur {
  width: 100px;
  height: 100px;
  filter: drop-shadow(2px 2px 5px var(--shadow));
}

.flower-center {
  position: absolute;
  top: 50%;        
  left: 50%;       
  transform: translate(-50%, -50%);
  z-index: -10;      
}

.flower-center img {
  width: 300px;   
  height: 300px;
  opacity: 0.3; 
}
.flower-left {
  position: absolute;
  top: 3%;        
  left: 3%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}


.flower-left img {
  width: 200px;   
  height: 200px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-right {
  position: absolute;
  top: 30%;        
  right: 3%;       
  transform: translate(50%, -50%);
  z-index: 0;      
}

.flower-right img {
  width: 200px;   
  height: 200px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-right-bas {
  position: absolute;
  top: 75%;        
  right: 35%;       
  transform: translate(50%, -50%);
  z-index: 0;      
}

.flower-right-bas img {
  width: 70px;
  height: 70px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-left-bas {
  position: absolute;
  top: 65%;        
  left: 15%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}

.flower-left-bas img {
  width: 70px;
  height: 70px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-right-haut {
  position: absolute;
  top: 2%;        
  right: 10%;       
  transform: translate(50%, -50%);
  z-index: 0;      
}

.flower-right-haut img {
  width: 60px;
  height: 60px;
  opacity: 0.3;   
  filter: blur(1px);
}

.flower-center-bas {
  position: absolute;
  top: 100%;        
  left: 50%;       
  transform: translate(-50%, -50%);
  z-index: 0;      
}

.flower-center-bas img {
  width: 150px;   
  height: 150px;
  opacity: 0.3;   
  filter: blur(1px);
}
</style>
