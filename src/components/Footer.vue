<template>
  <footer class="bg-background-accent border-t border-accent pt-16 pb-8 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      
      <div class="space-y-6">
        <div class="flex items-center gap-2">
          <Leaf :size="24" class="text-primary" />
          <span class="text-lg font-bold tracking-tight text-primary">Global Decarbonization Forum 2026</span>
        </div>
        <p class="text-sm text-text-muted leading-relaxed max-w-xs">
          A cross-sector dialogue shaping the future of climate action. World Environment Day Edition.
        </p>
      </div>

      <div class="space-y-6">
        <h4 class="text-xs font-bold uppercase tracking-widest text-primary">Quick Links</h4>
        <ul class="space-y-3">
          <li><button @click="$emit('navigate', 'home')" class="text-sm hover:text-primary transition-colors cursor-pointer text-left">Home</button></li>
          <li><button @click="$emit('navigate', 'speakers')" class="text-sm hover:text-primary transition-colors cursor-pointer text-left">Invited Speakers</button></li>
          <li><button @click="$emit('navigate', 'register')" class="text-sm hover:text-primary transition-colors cursor-pointer text-left">Register</button></li>
        </ul>
      </div>

      <div class="space-y-6">
        <h4 class="text-xs font-bold uppercase tracking-widest text-primary">Contact Organizer</h4>
        <ul class="space-y-3">
          <li class="flex items-center gap-3 text-sm text-text-muted">
            <Mail :size="16" />
            <span>syeda@sustivon.com</span>
          </li>
          <li class="flex items-center gap-3 text-sm text-text-muted">
            <Globe :size="16" />
            <a href="https://www.sustivon.com" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">
              www.sustivon.com
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div class="max-w-7xl mx-auto pt-8 border-t border-accent/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
      <p>© 2026 Sustivon. All rights reserved.</p>
      <p class="opacity-50">Where Sustainability Meets Innovation</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Leaf, Mail, Globe } from 'lucide-vue-next'

defineEmits<{
  navigate: [pageId: string]
}>()
</script>
