<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-accent px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- LOGO -->
      <a href="#home" class="flex items-center gap-3 cursor-pointer">
        <img 
          src="/Sustivon-logo.png"  
          alt="Sustivon"
          class="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
        />

        <div class="hidden sm:flex flex-col leading-tight border-l border-primary/20 pl-3">
          <span class="text-[10px] font-bold tracking-widest uppercase opacity-40">
            Global
          </span>
          <span class="text-xs font-bold tracking-tight text-primary">
            Decarbonization Forum
          </span>
        </div>
      </a>

      <!-- NAV LINKS -->
      <div class="hidden md:flex items-center gap-8">
        
        <a 
          href="#home"
          class="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
        >
          Home
        </a>

        <a 
          href="#speakers"
          class="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
        >
          Invited Speakers
        </a>

        <a 
          href="#register"
          class="px-4 py-2 bg-primary text-background text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer rounded-[8px]"
        >
          Register
        </a>

      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
/* no props, no emits needed */
</script>
