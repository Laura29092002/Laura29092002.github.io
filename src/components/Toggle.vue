<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const theme = ref('light');


watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('theme', theme.value);
});

theme.value = localStorage.getItem('theme') || 'light';

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
};
</script>

<template>
    <div class="app-container">
  <label class="switch">
      <input 
        type="checkbox" 
        @change="toggleTheme" 
        :checked="theme === 'dark'"
      >
      <span class="slider round">
      </span>
    </label>
    </div>
</template>

<style>
.app-container {
  display: flex;
  justify-content: flex-end;
  padding: 20px; 
  margin-left: 70px;
}

.switch {
  z-index: 0;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}


.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}


.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-color);
  -webkit-transition: .4s;
  transition: .4s;
}


.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: var(--secondary-color);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--primary-color);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--text-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>