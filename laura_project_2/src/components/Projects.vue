<template>
  <div data-kinesisscroll-item data-ks-strength="-50" data-ks-transformaxis="Y">
    <h2 id="projects">Mes Projets</h2>
    <div class="background">
      <swiper
        :effect="'coverflow'"
        :loop="true"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="pagination"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="../assets/messagerie.png" alt="icon" />
          <p>Application de messagerie instantanée</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/sizzleandstudy.png" alt="icon" />
          <p>Application de messagerie instantanée</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/capteur.png" alt="icon" />
          <p>Application de messagerie instantanée</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/AR.png" alt="icon" />
          <p>Application de messagerie instantanée</p>
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/ECAM.png" alt="icon" />
          <p>Application de messagerie instantanée</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'


import 'swiper/css'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
      },
      modules: [Autoplay, EffectCoverflow, Pagination],
    }
  },
}
</script>

<style>
h2 {
  color: var(--primary-color);
  text-align: center;
  font-family: 'Caprasimo', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
}
.background {
  background-color: var(--secondary-color);
  padding: 50px;
}
.swiper {
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  background: var(--primary-color);
}

.swiper-slide {
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  background-position: center;
  background-size: cover;
  width: 600px;
  height: 300px;
  text-align: center;
}

.swiper-slide img {
  width: 80%;
}
</style>
