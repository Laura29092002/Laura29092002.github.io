<script>
import { initializeKinesis } from '@amineyarman/kinesis'
initializeKinesis()
</script>

<template>

  <div data-kinesistransformer>
          <div id="top" class="top">
            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
            data-ks-strength="15"
          >
            <div class="left">
              <img src="../assets/flore.png" alt="icon" />
            </div>
            </div>

            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
            data-ks-strength="23"
          >
            <div class="right">
              <img src="../assets/flore.png" alt="icon" />
            </div>
            </div>

            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
            data-ks-strength="23"
          >
            <div class="left_2">
              <img src="../assets/flore.png" alt="icon" />
            </div>
            </div>
            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
          >
            <h1>LAURA MUSSARD</h1>
            <h2>Développeuse Full-Stack</h2>
            </div>
            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
            data-ks-strength="23"
          >
            <div class="right_2">
              <img src="../assets/flore.png" alt="icon" />
            </div>
            </div>
            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
            data-ks-strength="-15"
          >
            <div class="left">
              <img src="../assets/flore.png" alt="icon" />
            </div>
            </div>
            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
            data-ks-strength="-25"
          >
            <div class="right">
              <img src="../assets/flore.png" alt="icon" />
            </div>
            </div>
          
        </div>        </div>
</template>

<style scoped>
.top {
  text-align: center;
  padding-bottom: 60px;
  align-items: center;
  
}


h1 {
  font-size: 50px;
  font-family: "Caprasimo", serif;
  font-weight: 400;
  font-style: normal;
  color: #722535;
  text-shadow: 2px 2px 5px rgb(188, 188, 188);
}
h2 {
  font-size: 35px;
  font-family: "Caprasimo", serif;
  font-weight: 400;
  font-style: normal;
  color: #9B747C;
  text-shadow: 2px 2px 5px rgb(188, 188, 188);
}

img{
  width: 100px;
  height: 100px;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
.left {
  margin-right: 600px;
}
.left_2 {
  margin-right: 1000px;
}
.right {
  margin-left: 600px;
}

.right_2 {
  margin-left: 1000px;
}

</style>
