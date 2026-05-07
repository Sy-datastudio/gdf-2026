<template>
  <footer class="bg-background-accent border-t border-accent pt-16 pb-8 px-6">
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      
      <!-- BRAND -->
      <div class="space-y-6">
        <div class="flex items-center gap-3">
          <Leaf :size="24" class="text-primary" />
          <div class="flex flex-col leading-tight">
            <span class="text-sm font-bold tracking-tight text-text-main">
              Sustivon
            </span>
            <span class="text-xs font-semibold text-primary tracking-wide">
              Decarbonization Series
            </span>
          </div>
        </div>

        <p class="text-sm text-text-main/80 leading-relaxed max-w-xs">
          A focused dialogue on maritime decarbonization, exploring how regulatory pressure,
          cost exposure, and emissions intelligence are shaping competitive strategy.
        </p>
      </div>

      <!-- LINKS -->
      <div class="space-y-6">
        <h4 class="text-xs font-bold uppercase tracking-widest text-primary">
          Quick Links
        </h4>

        <ul class="space-y-3">
          <li>
            <button 
              @click="scrollTo('home')"
              class="text-sm text-text-main/80 hover:text-primary transition-colors text-left"
            >
              Overview
            </button>
          </li>

          <li>
            <button 
              @click="scrollTo('speakers')"
              class="text-sm text-text-main/80 hover:text-primary transition-colors text-left"
            >
              Contributors
            </button>
          </li>

          <li>
            <button 
              @click="scrollTo('register')"
              class="text-sm text-text-main/80 hover:text-primary transition-colors text-left"
            >
              Join the Forum
            </button>
          </li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div class="space-y-6">
        <h4 class="text-xs font-bold uppercase tracking-widest text-primary">
          Contact Organizer
        </h4>

        <ul class="space-y-3">
          <li class="flex items-center gap-3 text-sm text-text-main/80">
            <Mail :size="16" />
            <span>syeda@sustivon.com</span>
          </li>

          <li class="flex items-center gap-3 text-sm text-text-main/80">
            <Globe :size="16" />
            <a 
              href="https://www.sustivon.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="hover:text-primary transition-colors"
            >
              www.sustivon.com
            </a>
          </li>
        </ul>
      </div>

    </div>

    <!-- BOTTOM -->
    <div class="max-w-7xl mx-auto pt-8 border-t border-accent/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-main/70">
      
      <p>© 2026 Sustivon. All rights reserved.</p>

      <p class="text-text-main/50">
        Where Sustainability Meets Innovation
      </p>

    </div>

  </footer>
</template>

<script setup lang="ts">
import { Leaf, Mail, Globe } from 'lucide-vue-next'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  const yOffset = -100
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({
    top: y,
    behavior: 'smooth',
  })
}
</script>
