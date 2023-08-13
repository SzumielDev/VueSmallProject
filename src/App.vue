<script setup lang="ts">
import Menu from './components/constantComponents/Menu.vue';
import './assets/css/general.css';
import Footer from './components/constantComponents/Footer.vue';

</script>
<template>
  <Menu />
    <RouterView v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  <Footer />
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>