<template>
  <div
    class="pt-20 transition-all duration-700"
    :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
  >
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center px-6 overflow-hidden grid-structure">
      <div class="absolute inset-0 pointer-events-none opacity-[0.04]" style="background-image: url('data:image/svg+xml,%3Csvg width=\'100\' height=\'20\' viewBox=\'0 0 100 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 10 Q 25 0 50 10 T 100 10\' stroke=\'%231da282\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E'); background-repeat: repeat;"></div>
      <div class="absolute inset-0 wave-pattern opacity-40 pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto w-full relative z-10 py-20 flex flex-col items-center text-center">
        <div class="space-y-8 max-w-4xl flex flex-col items-center">

          <!-- Title -->
          <div class="space-y-4 flex flex-col items-center">
            <div class="flex items-center gap-3">
              <span class="w-12 h-[1px] bg-primary"></span>
              <span class="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                World Environment Day Edition
              </span>
              <span class="w-12 h-[1px] bg-primary"></span>
            </div>

            <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-primary leading-[0.9]">
              GLOBAL <br />
              DECARBONIZATION <br />
              FORUM 2026
            </h1>

            <p class="text-xl md:text-2xl text-text-muted font-light max-w-2xl leading-relaxed">
              A cross-sector dialogue shaping the future of climate action.
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap items-center justify-center gap-6">
            
            <button
              @click="$emit('navigate', 'register')"
              class="group px-8 py-4 bg-primary text-background font-bold tracking-widest uppercase text-xs flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 shadow-xl shadow-primary/10 cursor-pointer rounded-[8px]"
            >
              Register Now
              <ArrowRight :size="14" class="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              @click="$emit('navigate', 'register')"
              class="px-8 py-4 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs transition-all duration-300 transform hover:scale-105 hover:bg-primary/5 active:scale-95 cursor-pointer rounded-[8px]"
            >
              Register
            </button>

          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-32 px-6 border-t border-accent bg-background-accent text-center">
      <div class="max-w-4xl mx-auto space-y-10">
        <h3 class="text-5xl font-black tracking-tighter leading-[0.9]">
          JOIN A HIGH-LEVEL <br/>
          CONVERSATION SHAPING <br/>
          <span class="text-primary">CLIMATE ACTION.</span>
        </h3>

        <button
          @click="$emit('navigate', 'register')"
          class="px-10 py-5 bg-primary text-background font-bold tracking-widest uppercase text-xs transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 shadow-xl cursor-pointer rounded-[8px]"
        >
          Register Now
        </button>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

defineEmits<{
  navigate: [pageId: string]
}>()

const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 50)
})
</script>
