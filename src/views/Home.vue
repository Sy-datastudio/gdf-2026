<template>
  <div class="pt-20 relative text-white overflow-hidden">

    <!-- BACKGROUND -->
    <div class="fixed inset-0 -z-10">
      <img src="/dark-setting-globe.jpg" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/60"></div>
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

          <h1 class="text-5xl md:text-7xl font-black leading-[0.9] text-white">
            GLOBAL<br/>
            <span class="text-primary">DECARBONIZATION</span><br/>
            FORUM <span class="text-primary">2026</span>
          </h1>

          <p class="text-lg text-white/80 max-w-xl">
            A cross-sector dialogue shaping the future of climate action.
          </p>

          <!-- ICON STRIP -->
          <div class="flex gap-6 pt-4">
            <div v-for="(item,i) in thematicIcons" :key="i" class="flex flex-col items-center gap-2">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <component :is="item.icon" :size="22"/>
              </div>
              <span class="text-[10px] tracking-widest text-white/50">{{ item.label }}</span>
            </div>
          </div>

          <div class="flex gap-4 pt-4">
            <button @click="$emit('navigate','register')"
              class="px-8 py-4 bg-primary text-black font-bold uppercase text-xs rounded-lg">
              Register
            </button>

            <button
              class="px-8 py-4 border border-primary text-primary font-bold uppercase text-xs rounded-lg hover:bg-primary/10">
              Express Interest
            </button>
          </div>
        </div>

        <div class="hidden md:flex justify-end">
          <img src="/ship-Emissions-image.jpeg" class="rounded-xl opacity-90 shadow-2xl border border-white/10 w-[85%]"/>
        </div>

      </div>
    </section>

    <!-- EVENT BAND -->
    <section class="py-24 px-6 border-y border-white/10">
      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">

        <div>
          <p class="text-xs tracking-[0.6em] text-white/70 uppercase">Date</p>
          <h3 class="text-4xl font-bold text-primary">May 27, 2026</h3>
        </div>

        <div>
          <p class="text-xs tracking-[0.6em] text-white/70 uppercase">Time</p>
          <p class="text-xl md:text-2xl text-primary font-semibold">
            10:30 AM CET<br/>2:00 PM IST<br/>4:30 PM SGT
          </p>
        </div>

        <div>
          <p class="text-xs tracking-[0.6em] text-white/70 uppercase">Location</p>
          <p class="text-xl md:text-2xl text-primary font-semibold">
            Virtual (Zoom Webinar)
          </p>
        </div>

      </div>
    </section>

    <!-- ABOUT -->
    <section class="py-32 px-6 text-center">
      <div class="max-w-4xl mx-auto space-y-8">
        <h2 class="text-xs tracking-[0.4em] text-primary uppercase">About</h2>
        <h3 class="text-4xl font-bold text-white">
          A platform for <span class="text-primary">strategic climate dialogue</span>
        </h3>
        <p class="text-white/70">
          The Global Decarbonization Forum 2026 convenes leaders across policy, industry, and academia to move from commitment to execution.
        </p>
      </div>
    </section>

    <!-- WHY THIS MATTERS -->
    <section class="py-32 px-6 border-y border-white/10">
      <div class="max-w-7xl mx-auto space-y-16">

        <div class="text-center space-y-4">
          <h2 class="text-xs tracking-[0.4em] text-primary uppercase">Critical Context</h2>
          <h3 class="text-5xl font-black text-white">
            Decarbonization is entering an <span class="text-primary">enforcement era</span>
          </h3>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(card,i) in contextCards" :key="i"
            class="p-10 bg-white/5 border border-white/10 rounded-xl">

            <component :is="card.icon" class="text-primary mb-6" :size="28"/>
            <h4 class="text-xl font-bold text-white mb-3">{{ card.title }}</h4>
            <p class="text-white/70 text-sm">{{ card.text }}</p>

          </div>
        </div>

      </div>
    </section>

    <!-- AGENDA -->
    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto space-y-16">

        <div>
          <h2 class="text-xs tracking-[0.4em] text-primary uppercase">Agenda</h2>
          <h3 class="text-5xl font-black text-white">Curated Discussions</h3>
        </div>

        <div class="grid md:grid-cols-2 gap-10">
          <div v-for="(panel,i) in panels" :key="i"
            class="p-10 bg-white/5 border border-white/10 rounded-xl">

            <h4 class="text-2xl font-bold text-white">{{ panel.title }}</h4>
            <p class="text-primary text-xs uppercase mt-2">{{ panel.subtitle }}</p>

            <ul class="mt-4 text-white/70 text-sm space-y-2">
              <li v-for="(p,j) in panel.points" :key="j">• {{ p }}</li>
            </ul>

          </div>
        </div>

      </div>
    </section>

    <!-- SCHEDULE -->
    <section class="py-32 px-6 border-y border-white/10">
      <div class="max-w-5xl mx-auto space-y-12">

        <h3 class="text-3xl font-bold text-white text-center">Schedule</h3>

        <div class="space-y-6">
          <div v-for="(item,i) in schedule" :key="i"
            class="flex justify-between border-b border-white/10 pb-3">

            <span class="text-primary font-semibold">{{ item.time }}</span>
            <span class="text-white/70">{{ item.label }}</span>

          </div>
        </div>

      </div>
    </section>

    <!-- ORGANIZED BY -->
    <section class="py-32 px-6 border-t border-white/10 text-center">
      <div class="max-w-4xl mx-auto space-y-8">

        <h2 class="text-xs tracking-[0.4em] text-primary uppercase">Organized By</h2>
        <h3 class="text-4xl font-bold text-white">Sustivon</h3>

        <p class="text-white/80">
          IISc and NUS incubated clean-tech venture working at the intersection of climate compliance, AI-driven intelligence, and transport decarbonization.
        </p>

        <p class="text-white/60">
          Focused on maritime and aviation, enabling Net Zero transitions through data-driven strategies.
        </p>

        <a href="https://www.sustivon.com" target="_blank"
           class="inline-block mt-6 text-primary font-bold uppercase tracking-widest text-sm hover:opacity-80">
          Visit Sustivon.com ↗
        </a>

        <!-- CONTACT BUTTON -->
        <div class="mt-6">
          <a href="mailto:syeda@sustivon.com">
            <button class="px-8 py-4 border border-primary text-primary font-bold uppercase text-xs rounded-lg hover:bg-primary/10">
              Contact Organizer
            </button>
          </a>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { Leaf, Globe, Zap, RefreshCw } from 'lucide-vue-next'

defineEmits<{ navigate: [pageId: string] }>()

const thematicIcons = [
  { icon: Leaf, label: 'SUSTAINABILITY' },
  { icon: Globe, label: 'GLOBAL IMPACT' },
  { icon: Zap, label: 'CLEAN ENERGY' },
  { icon: RefreshCw, label: 'NET ZERO' },
]

const contextCards = [
  { icon: Globe, title: 'Global Acceleration', text: 'Regulatory frameworks are accelerating globally.' },
  { icon: Zap, title: 'Structural Pressure', text: 'Transport sectors face transition pressure.' },
  { icon: Globe, title: 'Data Advantage', text: 'Competitive advantage is data-driven.' },
]

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

const schedule = [
  { time: '10 min', label: 'Welcome & framing' },
  { time: '35 min', label: 'Panel 1' },
  { time: '5 min', label: 'Transition' },
  { time: '35–45 min', label: 'Panel 2' },
  { time: '5 min', label: 'Closing' },
]
</script>
