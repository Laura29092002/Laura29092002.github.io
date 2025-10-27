<script setup lang="ts">
import { ref } from 'vue';

interface CarouselItem {
  id: number;
  title: string;
  content: string;
}

const currentIndex = ref(0);

const items: CarouselItem[] = [
  { id: 1, title: 'Slide 1', content: 'Premier élément' },
  { id: 2, title: 'Slide 2' , content: 'Deuxième élément' },
  { id: 3, title: 'Slide 3', content: 'Troisième élément' },
  { id: 4, title: 'Slide 4', content: 'Quatrième élément' },
];

const goToPrevious = () => {
  currentIndex.value = currentIndex.value === 0 
    ? items.length - 1 
    : currentIndex.value - 1;
};

const goToNext = () => {
  currentIndex.value = currentIndex.value === items.length - 1 
    ? 0 
    : currentIndex.value + 1;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="carousel-container" id="projects">
    <div class="carousel">
      <div 
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="item in items" 
          :key="item.id"
          :class="['carousel-slide']"
        >
          <h2>{{ item.title }}</h2>
          <p>{{ item.content }}</p>
        </div>
      </div>

      <!-- Boutons de navigation -->
      <button @click="goToPrevious" class="nav-btn prev">
        ←
      </button>
      <button @click="goToNext" class="nav-btn next">
        →
      </button>

      <!-- Indicateurs -->
      <div class="indicators">
        <button
          v-for="(item, index) in items"
          :key="index"
          @click="goToSlide(index)"
          :class="['indicator', { active: index === currentIndex }]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  max-width: 800px;
  margin: 0 auto;
}

.carousel {
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 16px;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: black;
  font-size: 24px;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 50%;
}

.nav-btn:hover {
  background: rgba(32, 32, 32, 0.164);
}

.prev { left: 16px; }
.next { right: 16px; }

.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(143, 143, 143, 0.692);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.indicator.active {
  width: 32px;
  background: rgb(0, 0, 0);
}
</style>