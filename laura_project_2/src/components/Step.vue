<script setup lang="ts">
import type { schoolStep } from '@/types/stepType'

const props = defineProps<{
  step: schoolStep
}>()
</script>

<template>
  <div class="timeline-content" :class="props.step.direction">
    <h3>{{ props.step.title }}</h3>
    <p class="date">{{ props.step.period }}</p>
    <p class="place">{{ props.step.place }}</p>
    <ul class="description-list" v-if="props.step.description !== ''">
    <li v-for="(item, index) in props.step.description.split(';')" :key="index">
      {{ item.trim() }}
    </li>
</ul>

  </div>
</template>

<style scoped>
p {
  text-wrap: wrap;
}

h3{
  font-size: 22px;
  
  color: #9B747C;
}
.timeline-content {
  position: relative;
  width: 45%;
  background: #fbf0f0;
  padding: 1rem;
  margin-bottom: 3rem;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 400px;
}

.timeline-content.left {
  right: 30%;
  text-align: left;
}

.timeline-content.right {
  left: -20%;
}




.date {
  font-size: 16px;
  color: #6b7280;
}
.place {
  font-size: 20px;
  color: #727780;
}

.description-list {
  margin-top: 10px;
  padding-left: 20px;
  list-style-type: disc; /* puces classiques */
}


</style>