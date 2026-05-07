<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-accent px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- LOGO / BRAND -->
      <a href="#home" class="flex items-center gap-3 cursor-pointer">
        <img 
          src="/Sustivon-logo.png"  
          alt="Sustivon"
          class="h-12 w-auto object-contain hover:opacity-80 transition-opacity"
        />

        <!-- Updated Branding -->
        <div class="hidden sm:flex flex-col leading-tight border-l border-primary/20 pl-3">
          
          <!-- Top line: Global (subtle) -->
          <span class="text-[10px] font-bold tracking-widest uppercase text-white/40">
            Global
          </span>

          <!-- Main line: Highlight -->
          <span class="text-xs font-bold tracking-tight text-primary">
            Decarbonization Series
          </span>

          <!-- Edition -->
          <span class="text-[10px] uppercase tracking-widest text-white/40">
            Edition 01 — Maritime
          </span>

        </div>
      </a>

      <!-- NAV LINKS -->
      <div class="hidden md:flex items-center gap-8">
        
        <a 
          href="#home"
          class="text-sm font-medium text-white/70 hover:text-primary transition-colors cursor-pointer tracking-wide"
        >
          Overview
        </a>

        <a 
          href="#speakers"
          class="text-sm font-medium text-white/70 hover:text-primary transition-colors cursor-pointer tracking-wide"
        >
          Contributors
        </a>

        <a 
          href="#register"
          class="px-5 py-2 bg-primary text-black text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer rounded-[8px]"
        >
          Request Access
        </a>

      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
/* no props, no emits needed */
</script>
