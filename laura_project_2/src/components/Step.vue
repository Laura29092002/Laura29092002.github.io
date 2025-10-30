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

h3 {
  font-size: 22px;
}
.timeline-content {
  position: relative;
  padding: 1rem;
  transition: all 0.3s ease;
  width: 400px;
}

.date {
  font-size: 16px;
}
.place {
  font-size: 20px;
  color: var(--primary-color);
}

.description-list {
  margin-top: 10px;
  padding-left: 20px;
  list-style-type: disc;
}
</style>
