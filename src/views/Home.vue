<template>
  <div class="pt-20 relative text-white overflow-hidden">

    <!-- BACKGROUND -->
    <div class="fixed inset-0 -z-10">
      <img src="/dark-setting-globe.jpg" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>
    </div>

    <!-- HERO -->
    <section class="relative min-h-[95vh] flex items-center px-6">
      <div class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        <div class="space-y-8">
          <div class="text-xs uppercase tracking-[0.4em] text-primary flex items-center gap-3">
            <span class="w-10 h-[1px] bg-primary"></span>
            World Environment Day Edition
          </div>

          <h1 class="text-5xl md:text-7xl font-black leading-[0.9]">
            <span class="text-white">GLOBAL</span><br/>
            <span class="text-primary">DECARBONIZATION</span><br/>
            <span class="text-white">FORUM</span>
            <span class="text-primary">2026</span>
          </h1>

          <p class="text-lg text-white/80 max-w-xl">
            A high-signal convening of leaders shaping the next phase of climate execution.
          </p>

          <div class="flex gap-4">
            <button
              @click="$emit('navigate', 'register')"
              class="px-8 py-4 bg-primary text-black font-bold uppercase text-xs rounded-lg"
            >
              Register
            </button>

            <button
              @click="$emit('navigate', 'register')"
              class="px-8 py-4 border border-primary text-primary font-bold uppercase text-xs rounded-lg hover:bg-primary/10"
            >
              Express Interest
            </button>
          </div>
        </div>

        <!-- IMAGE -->
        <div class="hidden md:flex justify-end">
          <div class="relative w-[85%] max-w-[520px]">
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent rounded-xl"></div>
            <img src="/ship-Emissions-image.jpeg" class="rounded-xl opacity-90 shadow-2xl border border-white/10"/>
          </div>
        </div>

      </div>
    </section>

    <!-- EVENT BAND -->
    <section class="py-24 px-6 border-y border-white/10">
      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">

        <div class="space-y-3">
          <p class="text-xs uppercase tracking-[0.6em] text-white/90">Date</p>
          <h3 class="text-4xl md:text-5xl font-bold text-primary">
            May 27, 2026
          </h3>
        </div>

        <div class="space-y-3">
          <p class="text-xs uppercase tracking-[0.6em] text-white/90">Time</p>
          <p class="text-lg md:text-xl font-semibold text-primary">
            10:30 AM CET<br/>
            2:00 PM IST<br/>
            4:30 PM SGT
          </p>
        </div>

        <div class="space-y-3">
          <p class="text-xs uppercase tracking-[0.6em] text-white/90">Location</p>
          <p class="text-lg md:text-xl font-semibold text-primary">
            Virtual (Zoom Webinar)
          </p>
        </div>

      </div>
    </section>

    <!-- ABOUT -->
    <section class="py-40 px-6 border-t border-white/10 text-center">
      <div class="max-w-6xl mx-auto space-y-8">
        <h2 class="text-xs uppercase tracking-[0.4em] text-primary">About</h2>

        <h3 class="text-4xl font-bold">
          A platform for <span class="text-primary">strategic climate dialogue</span>
        </h3>

        <p class="text-white/70 max-w-3xl mx-auto">
          The Global Decarbonization Forum 2026 convenes policymakers, operators, and system leaders to move beyond commitments and toward execution.
        </p>
      </div>
    </section>

    <!-- AGENDA -->
    <section class="py-40 px-6 border-y border-white/10">
      <div class="max-w-7xl mx-auto space-y-16">

        <div>
          <h2 class="text-xs uppercase tracking-[0.4em] text-primary">Agenda</h2>
          <h3 class="text-5xl font-black">Curated Discussions</h3>
        </div>

        <div class="grid md:grid-cols-2 gap-10">
          <div v-for="(panel, i) in panels" :key="i"
               class="p-10 bg-white/5 border border-white/10 rounded-xl">

            <h4 class="text-2xl font-bold">{{ panel.title }}</h4>
            <p class="text-primary text-xs uppercase mt-2">{{ panel.subtitle }}</p>

            <ul class="space-y-2 mt-4 text-white/70 text-sm">
              <li v-for="(p, j) in panel.points" :key="j">• {{ p }}</li>
            </ul>

          </div>
        </div>

      </div>
    </section>

    <!-- GLOBAL LEADERS -->
    <section class="py-40 px-6">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        <div class="space-y-8">
          <h2 class="text-xs uppercase tracking-[0.4em] text-primary">The Panel</h2>
          <h3 class="text-5xl font-black">
            <span class="text-white">Global</span>
            <span class="text-primary"> Leaders</span>
          </h3>
          <p class="text-white/70">
            A tightly curated group of decision-makers across maritime operations and climate systems.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8">
          <div class="p-8 bg-white/5 border border-white/10 rounded-2xl">Curated Leadership</div>
          <div class="p-8 bg-white/5 border border-white/10 rounded-2xl">Invitation Only</div>
          <div class="p-8 bg-white/5 border border-white/10 rounded-2xl">High-Signal Dialogue</div>
          <div class="p-8 bg-white/5 border border-white/10 rounded-2xl">Global Perspective</div>
        </div>

      </div>
    </section>

    <!-- BIG CTA -->
    <section class="py-40 px-6 border-t border-white/10 text-center">
      <div class="max-w-4xl mx-auto space-y-12">

        <h2 class="text-4xl md:text-6xl font-black leading-tight">
          Join a high-level conversation shaping
          <span class="text-primary"> climate action.</span>
        </h2>

        <div class="flex flex-col md:flex-row gap-6 justify-center">
          <button
            @click="$emit('navigate', 'register')"
            class="px-10 py-5 bg-primary text-black font-bold uppercase rounded-lg flex items-center gap-2"
          >
            Request Invitation
            <ArrowRight :size="16" />
          </button>

          <button class="px-10 py-5 border border-primary text-primary font-bold uppercase rounded-lg flex items-center gap-2">
            Contact Organizer
            <Mail :size="16" />
          </button>
        </div>

      </div>
    </section>

    <!-- ORGANIZED BY -->
    <section class="py-40 px-6 border-t border-white/10 text-center">
      <div class="max-w-4xl mx-auto space-y-10">

        <div class="text-xs uppercase tracking-[0.4em] text-primary">
          Organized By
        </div>

        <h2 class="text-4xl md:text-5xl font-black">
          Sustivon
        </h2>

        <p class="text-white/80">
          Sustivon is an <span class="text-primary font-semibold">IISc and NUS incubated</span> clean-tech venture working at the intersection of climate compliance, AI-driven intelligence, and transport decarbonization.
        </p>

        <p class="text-white/60">
          With a focus on maritime and aviation, Sustivon enables organizations to navigate complex regulatory environments and transition toward Net Zero through data-driven strategies.
        </p>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { Mail, ArrowRight } from 'lucide-vue-next'

defineEmits<{
  navigate: [pageId: string]
}>()

const panels = [
  {
    title: 'From Penalty to Profit',
    subtitle: 'Regulation as Competitive Advantage',
    points: ['Compliance as leverage', 'Policy economics', 'Fuel transition'],
  },
  {
    title: 'The AI Climate Leap',
    subtitle: 'Data-Driven Execution',
    points: ['Real-time emissions', 'AI optimization', 'Decision systems'],
  },
]
</script>
