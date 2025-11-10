<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { projectData } from '@/staticData/projectData'

import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import Modal from './Modal.vue'
import type { projectType } from '@/types/projectType'

const pagination = { clickable: true }
const modules = [Autoplay, EffectCoverflow, Pagination]

const popupVisible = ref(false)
const selectedSlide = ref({})

function openPopup(slide: projectType) {
  selectedSlide.value = slide
  popupVisible.value = true
}
</script>

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
          slideShadows: false,
        }"
        :pagination="pagination"
        :modules="modules"
        class="mySwiper"
      >
      <swiper-slide
          v-for="(slide, index) in projectData"
          :key="index"
          @click="openPopup(slide)"
          class="clickable-slide"
        >
          <img :src="slide.image" :alt="slide.title" />
          <p>{{ slide.title }}</p>
        </swiper-slide>
      </swiper>
      <Modal v-model:popupVisible="popupVisible" :selectedSlide="selectedSlide" />
    </div>
  </div>
</template>

<style>

.background {
  background: linear-gradient(var(--bg-color), var(--secondary-color), var(--bg-color));
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
  background: var(--shadow);
}

.swiper-pagination-bullet-active {
  background: var(--primary-color);
}

.swiper-slide {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-position: center;
  background-size: cover;
  width: 600px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

@media (max-width: 630px) {
  .swiper-slide{
    width: 350px;
    height: 200px;
  }
}

.swiper-slide:hover {
  transform: scale(1.1);
}

.swiper-slide img {
  width: 70%;
  border-radius: 10px;
}
</style>
