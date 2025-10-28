<script setup lang="ts">
import type { schoolStep } from '@/types/stepType'

const props = defineProps<{
  step: schoolStep
}>()
</script>

<template>
  <div class="timeline-content">
    <h3>{{ props.step.title }}</h3>
    <p class="date">{{ props.step.period }}</p>
    <p class="place">{{ props.step.place }}</p>
    <p>{{ props.step.description }}</p>
  </div>
</template>

<style scoped>
p {
  text-wrap: wrap;
}

h3{
  font-size: 22px;
  
  color: #722535;
}
.timeline-content {
  
  background: #f9fafb;
  padding: 1rem;
  padding-left: 50px;
  margin-bottom: 50px;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  max-width: 450px;
}

.date {
  font-size: 16px;
  color: #6b7280;
}
.place {
  font-size: 20px;
  color: #727780;
}

</style>