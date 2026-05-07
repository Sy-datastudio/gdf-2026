<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />

    <main class="flex-grow relative">
      <Home />
      <Speakers />
      <Register />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import Speakers from './views/Speakers.vue'
import Register from './views/Register.vue'
</script>
