<script setup lang="ts">
import type { schoolStep } from '@/types/stepType'
const props = defineProps<{
  step: schoolStep
}>()
</script>

<template>
  <div>
    <h2>{{ props.step.title }}</h2>
    <p>{{ props.step.description }}</p>
    <p>Année : {{ props.step.period }}</p>
    <p>{{ props.step.place }}</p>
  </div>
</template>

<style scoped>
p {
  text-wrap: wrap;
}
</style>
