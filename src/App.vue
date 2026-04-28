<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :activePage="activePage" @navigate="showPage" />
    
    <main class="flex-grow">
      <div id="home" v-show="activePage === 'home'">
        <Home @navigate="showPage" />
      </div>
      
      <div id="speakers" v-show="activePage === 'speakers'">
        <Speakers @navigate="showPage" />
      </div>
      
      <div id="register" v-show="activePage === 'register'">
        <Register @navigate="showPage" />
      </div>
    </main>

    <Footer @navigate="showPage" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import Speakers from './views/Speakers.vue'
import Register from './views/Register.vue'

const activePage = ref('home')

const showPage = (pageId: string) => {
  activePage.value = pageId
  window.scrollTo(0, 0)
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>