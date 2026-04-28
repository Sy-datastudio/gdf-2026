<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-accent px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <button 
        @click="$emit('navigate', 'home')" 
        class="flex items-center gap-3 cursor-pointer text-left"
      >
        <div class="flex flex-col">
          <div class="flex items-center gap-1.5 text-primary mb-1">
            <Leaf :size="14" fill="currentColor" />
            <span class="text-xs font-black uppercase tracking-tighter">Sustivion</span>
          </div>
          <div class="flex flex-col leading-tight border-l border-primary/20 pl-2">
            <span class="text-[10px] font-bold tracking-widest uppercase opacity-40">Global</span>
            <span class="text-xs font-bold tracking-tight text-primary">Decarbonization Forum</span>
          </div>
        </div>
      </button>

      <div class="hidden md:flex items-center gap-8">
        <button 
          @click="$emit('navigate', 'home')" 
          class="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          :class="{ 'text-primary': activePage === 'home' }"
        >
          Home
        </button>
        <button 
          @click="$emit('navigate', 'speakers')" 
          class="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          :class="{ 'text-primary': activePage === 'speakers' }"
        >
          Invited Speakers
        </button>
        <button 
          @click="$emit('navigate', 'register')" 
          class="px-4 py-2 bg-primary text-background text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer rounded-[8px]"
        >
          Request Invitation
        </button>
      </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { Leaf } from 'lucide-vue-next'

defineProps<{
  activePage: string
}>()

defineEmits<{
  navigate: [pageId: string]
}>()
</script>