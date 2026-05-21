<template>
  <div id="register" class="pt-20">

    <!-- MAIN SECTION -->
    <div class="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

      <!-- LEFT SIDE -->
      <div class="lg:col-span-5 space-y-12">

        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <span class="w-12 h-[1px] bg-primary"></span>
            <span class="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Registration Portal
            </span>
          </div>

          <h1 class="text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase text-white">
            Register for the <br/>
            <span class="text-primary underline underline-offset-8 decoration-accent/30">
              Forum
            </span>
          </h1>

          <p class="text-xl text-white/80 font-light leading-relaxed">
            Join the Global Decarbonization Forum 2026 and connect with leaders across maritime,
            policy, and clean technology driving the transition forward.
          </p>
        </div>

        <div class="space-y-8 py-8 border-y border-white/10">

          <div class="flex gap-4">
            <div class="text-primary shrink-0 opacity-70 py-1">
              <Info :size="20" :stroke-width="1.5" />
            </div>

            <p class="text-xs font-bold uppercase tracking-wider text-white/70 leading-relaxed">
              Registration will be completed via Google Form. You may use the button or scan the QR code below.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

            <div>
              <h5 class="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                Platform
              </h5>
              <span class="text-sm font-semibold text-white">
                Virtual / Zoom
              </span>
            </div>

            <div>
              <h5 class="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                Access
              </h5>
              <span class="text-sm font-semibold text-white">
                Open to registered attendees
              </span>
            </div>

          </div>

        </div>

      </div>

      <!-- RIGHT SIDE -->
      <div class="lg:col-span-7 bg-background shadow-2xl shadow-primary/5 border border-accent p-10 md:p-20 grid-structure relative overflow-hidden rounded-[8px] flex flex-col items-center justify-center gap-12">

        <div class="absolute inset-0 wave-pattern opacity-5 pointer-events-none"></div>

        <!-- REGISTER BUTTON FIRST -->
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLScvXdADvhJyRNIwykhByYZWqiLNIebW9--L3MNbZrsk8BzeWw/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          class="relative z-10 w-full max-w-md"
        >
          <button
            class="px-12 py-5 bg-primary text-black font-bold uppercase text-xs tracking-[0.25em] rounded-lg hover:opacity-90 transition"
          >
            Register Now
          </button>
        </a>

        <!-- QR CODE -->
        <div class="relative z-10 text-center">

          <img 
            src="/qr-code.svg" 
            alt="Scan to register"
            class="relative z-10 text-center"
          />

          <p class="mt-6 text-xs uppercase tracking-widest text-text-muted">
            Or scan to register instantly
          </p>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Info } from 'lucide-vue-next'
</script>
