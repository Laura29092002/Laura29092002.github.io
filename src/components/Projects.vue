<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { projectData } from '@/staticData/projectData'
import type { Swiper as SwiperType } from 'swiper'

import { A11y, Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination } from 'swiper/modules'
import Modal from './Modal.vue'
import type { projectType } from '@/types/projectType'

const pagination = { clickable: true }
const modules = [Autoplay, EffectCoverflow, Pagination, Keyboard, A11y, Navigation]
const autoplay = {delay: 5000, disableOnInteraction: false}
const keyboard = {enabled: true, onlyInViewport: false, pageUpDown: true}
const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}

const a11y = {
  enabled: true,
  containerMessage: 'Carrousel des projets',
  containerRoleDescriptionMessage: 'Slider interactif',
  itemRoleDescriptionMessage: 'Diapositive',
  slideLabelMessage: 'Slide {{index}} sur {{slidesLength}}',
  prevSlideMessage: 'Slide précédente',
  nextSlideMessage: 'Slide suivante',
  firstSlideMessage: 'Première slide',
  lastSlideMessage: 'Dernière slide',
  paginationBulletMessage: 'Aller à la slide {{index}}'
}

const popupVisible = ref(false)
const selectedSlide = ref({})
const swiperInstance = ref<SwiperType | null>(null)

function onSwiper(swiper: SwiperType) {
  swiperInstance.value = swiper
}

function openPopup(slide: projectType) {
  selectedSlide.value = slide
  popupVisible.value = true

  if (swiperInstance.value?.autoplay) {
    swiperInstance.value.autoplay.stop()
  }
}

function closeModal() {
  if (swiperInstance.value?.autoplay) {
    swiperInstance.value.autoplay.start()
  }
}
</script>

<template>
  <div data-kinesisscroll-item data-ks-strength="-50" data-ks-transformaxis="Y">
    <h2 id="projects">Mes Projets</h2>
    <div class="background">
      <swiper
      @swiper="onSwiper"
        :effect="'coverflow'"
        :loop="true"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :autoplay="autoplay"
        :keyboard="keyboard"
        :navigation="navigation"
        :a11y="a11y"
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
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      </swiper>
      <Modal v-model:popupVisible="popupVisible" :selectedSlide="selectedSlide" @update:popupVisible="closeModal"/>
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

.swiper-button-prev,
.swiper-button-next {
  color: var(--primary-color);
  padding: 10px;
}


.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: var(--shadow);
  border-radius: 50%;
}


@media (max-width: 630px) {
  .swiper-slide {
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
