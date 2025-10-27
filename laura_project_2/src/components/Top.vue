<script>
import { initializeKinesis } from '@amineyarman/kinesis'
import 'floating-vue/dist/style.css'
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
            <div v-tooltip.bottom ="'You have new messages.'" class="circle right"></div>
            </div>

            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
            data-ks-strength="23"
          >
            <div v-tooltip.bottom ="'You have new messages.'" class="circle left"></div>
            </div>
            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
          >
            <h1>MUSSARD LAURA</h1>
            <h2>Développeuse Full-Stack</h2>
            </div>
            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
            data-ks-strength="-15"
          >
            <div v-tooltip.bottom ="'You have new messages.'" class="circle right"></div>
            </div>
            <div
            data-kinesistransformer-element
            data-ks-transform="translate"
            data-ks-strength="-25"
          >
            <div v-tooltip.bottom ="'You have new messages.'" class="circle left"></div>
            </div>
          
        </div>        </div>
</template>

<style scoped>
.top {
  text-align: center;
  padding-bottom: 60px;
  background-image: url("");
}
h1 {
  font-size: 50px;
}
h2 {
  font-size: 35px;
}
.circle {
  width: 150px;
  height: 150px;
  background-color: #eeb1b5; 
  box-shadow: 0 10px 40px rgba(204, 206, 214, 0.8);
  border-radius: 50%; 
}
.left {
  margin-left: 200px;
}
.right {
  margin-left: 1200px;
}

</style>
