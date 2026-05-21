<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-accent px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- LOGO / BRAND -->
      <button @click="scrollTo('home')" class="flex items-center gap-3 cursor-pointer">
        <img 
          src="/Sustivon-logo.png"  
          alt="Sustivon"
          class="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
        />

        <!-- Branding -->
        <div class="hidden sm:flex flex-col leading-tight border-l border-primary/20 pl-3">
          
          <span class="text-[10px] font-bold tracking-widest uppercase text-black/90">
            Global
          </span>

          <span class="text-xs font-bold tracking-tight text-primary">
            Decarbonization Series
          </span>

          <span class="text-[10px] uppercase tracking-widest text-black/90">
            Edition 01 — Maritime
          </span>

        </div>
      </button>

      <!-- NAV LINKS -->
      <div class="hidden md:flex items-center gap-8">
        
        <button 
          @click="scrollTo('home')"
          class="text-sm font-medium text-black/90 hover:text-primary transition-colors cursor-pointer tracking-wide"
        >
          Overview
        </button>

        <button 
          @click="scrollTo('speakers')"
          class="text-sm font-medium text-black/90 hover:text-primary transition-colors cursor-pointer tracking-wide"
        >
          Participants
        </button>

        <button 
          @click="scrollTo('register')"
          class="px-5 py-2 bg-primary text-black text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer rounded-[8px]"
        >
          Join the Forum
        </button>

      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  const yOffset = -100 // adjust if navbar height changes
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({
    top: y,
    behavior: 'smooth',
  })
}
</script>
