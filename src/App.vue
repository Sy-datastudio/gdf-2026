<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :activePage="activePage" @navigate="showPage" />
    
<main class="flex-grow relative">
  <Transition name="page" mode="out-in">
    <div :key="activePage" class="w-full">
      <Home v-if="activePage === 'home'" @navigate="showPage" />
      <Speakers v-else-if="activePage === 'speakers'" @navigate="showPage" />
      <Register v-else-if="activePage === 'register'" @navigate="showPage" />
    </div>
  </Transition>
</main>

    <Footer @navigate="showPage" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import Speakers from './views/Speakers.vue'
import Register from './views/Register.vue'

const activePage = ref('home')

const componentsMap: Record<string, any> = {
  home: Home,
  speakers: Speakers,
  register: Register,
}

const currentComponent = computed(() => componentsMap[activePage.value])

const showPage = (pageId: string) => {
  activePage.value = pageId
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style>
/* PAGE TRANSITION */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
  position: absolute;
  width: 100%;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
