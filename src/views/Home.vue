<template>
  <div id="home" class="pt-20 relative text-white overflow-hidden">

    <!-- BACKGROUND -->
    <div class="fixed inset-0 -z-10">
      <img src="/dark-setting-globe.jpg" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>
    </div>

    <!-- HERO -->
    <div class="relative min-h-screen md:min-h-[95vh] flex items-center px-6 py-16 md:py-0"">
      <div class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        <div class="space-y-8">
          <div class="text-xs uppercase tracking-[0.4em] text-primary flex items-center gap-3">
            <span class="w-10 h-[1px] bg-primary"></span>
            World Environment Day Edition
          </div>

          <h1 class="text-5xl md:text-7xl font-black leading-[0.9] text-white">
            MARITIME<br/>
            <span class="text-primary">DECARBONIZATION</span><br/>
            FORUM <span class="text-primary">2026</span>
          </h1>

          <p class="text-lg text-white/80 max-w-lg">
            Decarbonization is now a constraint. For leaders, it becomes a competitive edge.
          </p>

          <!-- ICON STRIP -->
          <div class="flex gap-6 pt-4">
            <div v-for="(item,i) in thematicIcons" :key="i" class="flex flex-col items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <component :is="item.icon" :size="24"/>
              </div>
              <span class="text-[10px] tracking-widest text-white/50">{{ item.label }}</span>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex gap-4 pt-6 pb-6 md:pb-0">
            <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLScvXdADvhJyRNIwykhByYZWqiLNIebW9--L3MNbZrsk8BzeWw/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
>
  <button 
    class="px-12 py-4 bg-primary text-black font-bold uppercase text-xs tracking-widest rounded-lg hover:opacity-90 transition"
  >
    Register
  </button>
</a>
          </div>
        </div>

        <div class="hidden md:flex justify-end">
          <img src="/ship-Emissions-image.jpeg" class="rounded-xl opacity-90 shadow-2xl border border-white/10 w-[85%]"/>
        </div>

      </div>
    </div>

    <!-- EVENT BAND -->
    <section class="py-24 px-6 border-y border-white/10">
      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">

        <div>
          <p class="text-xs tracking-[0.6em] text-white/70 uppercase">Date</p>
          <h4 class="text-4xl font-bold text-primary">June 11, 2026</h4>
        </div>

        <div>
          <p class="text-xs tracking-[0.6em] text-white/70 uppercase">Time</p>
          <h4 class="text-4xl text-primary font-bold">
            10:30 AM CET<br/>2:00 PM IST
          </h4>
        </div>

        <div>
          <p class="text-xs tracking-[0.6em] text-white/70 uppercase">Platform</p>
          <h4 class="text-4xl text-primary font-bold">
            Virtual (Zoom)
          </h4>
        </div>

      </div>
    </section>

    <!-- ABOUT -->
    <section class="py-32 px-6 text-center">
      <div class="max-w-4xl mx-auto space-y-8">

        <h2 class="text-xs tracking-[0.4em] text-primary uppercase">About</h2>

        <h3 class="text-4xl font-bold text-white">
          A platform for <span class="text-primary">strategic Maritime dialogue</span>
        </h3>

        <p class="text-white/70 max-w-2xl mx-auto">
          The Maritime Decarbonization Forum 2026 convenes leaders across policy,
          shipping, and technology to examine how compliance pressures are reshaping
          cost structures, fuel strategy, and competitive positioning.
        </p>

      </div>
    </section>

    <!-- CRITICAL CONTEXT -->
    <section class="py-32 px-6 border-y border-white/10">
      <div class="max-w-7xl mx-auto space-y-16">

        <div class="text-center space-y-4">
          <h2 class="text-xs tracking-[0.4em] text-primary uppercase">Context</h2>
          <h3 class="text-5xl font-black text-white">
            Decarbonization is entering a <span class="text-primary">compliance-driven phase</span>
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

        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <h2 class="text-xs tracking-[0.4em] text-primary uppercase">Agenda</h2>
          <h3 class="text-5xl font-black text-white">Curated Discussion</h3>
        </div>

        <div class="max-w-3xl mx-auto">
          <div v-if="mainPanel" class="p-10 bg-white/5 border border-white/10 rounded-xl text-center">

            <h4 class="text-2xl font-bold text-white">{{ mainPanel.title }}</h4>
            <p class="text-primary text-xs uppercase mt-2">{{ mainPanel.subtitle }}</p>

            <ul class="mt-6 text-white/70 text-sm space-y-3 text-left">
              <li v-for="(p,j) in mainPanel.points" :key="j">• {{ p }}</li>
            </ul>

          </div>
        </div>

      </div>
    </section>

    <!-- ORGANIZED BY -->
    <section class="py-32 px-6 border-t border-white/10 text-center">
      <div class="max-w-4xl mx-auto space-y-8">

        <h2 class="text-xs tracking-[0.4em] text-primary uppercase">Organized By</h2>

        <h3 class="text-5xl font-bold text-white">Sustivon</h3>

        <p class="text-white/80">
          A women-led IISc and NUS incubated clean-tech venture working at the intersection of
          climate compliance, emissions intelligence, and transport decarbonization.
        </p>

        <p class="text-white/60">
          Focused on decarbonization systems, enabling data-driven pathways to Net Zero.
        </p>

        <a href="https://www.sustivon.com" target="_blank"
          class="inline-block mt-6 text-primary font-bold uppercase tracking-widest text-sm hover:opacity-80">
          Visit Sustivon.com ↗
        </a>

      </div>
    </section>

    <!-- UPCOMING EDITIONS -->
<section class="py-32 px-6 border-t border-white/10">
  <div class="max-w-5xl mx-auto text-center space-y-16">

    <!-- HEADER -->
    <div class="space-y-4">
      <h2 class="text-xs tracking-[0.4em] text-primary uppercase">
        The Series
      </h2>

      <h3 class="text-5xl font-black text-white">
        A Multi-Edition <span class="text-primary">Decarbonization Journey</span>
      </h3>
      </div>

    <!-- TIMELINE -->
    <div class="relative">

      <!-- vertical line -->
      <div class="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>

      <div class="space-y-20">

        <!-- EDITION 01 (ACTIVE) -->
        <div class="flex flex-col items-center space-y-6">
          <div class="w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_#1da282] animate-pulse"></div>

          <p class="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            Edition 01 — Maritime
          </p>

          <h4 class="text-xl font-bold text-white">
            Live Now
          </h4>
        </div>

        <!-- EDITION 02 -->
        <div class="flex flex-col items-center space-y-6 opacity-80">
          <div class="w-5 h-5 rounded-full bg-white/50"></div>

          <p class="text-xs uppercase tracking-widest text-white/60">
            Edition 02 — MNRE
          </p>

          <h4 class="text-lg text-white/70">
            Coming Soon
          </h4>
        </div>

        <!-- EDITION 03 -->
        <div class="flex flex-col items-center space-y-6 opacity-60">
          <div class="w-5 h-5 rounded-full bg-white/40"></div>

          <p class="text-xs uppercase tracking-widest text-white/50">
            Edition 03 — Aviation
          </p>
        </div>

        <!-- EDITION 04 -->
        <div class="flex flex-col items-center space-y-6 opacity-40">
          <div class="w-5 h-5 rounded-full bg-white/30"></div>

          <p class="text-xs uppercase tracking-widest text-white/40">
            Edition 04 — CBAM
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

  </div>
</template>

<script setup lang="ts">
import { Shield, DollarSign, BarChart3, Fuel } from 'lucide-vue-next'

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

const thematicIcons = [
  { icon: Shield, label: 'REGULATION' },
  { icon: DollarSign, label: 'COST' },
  { icon: BarChart3, label: 'EMISSIONS DATA' },
  { icon: Fuel, label: 'FUEL STRATEGY' },
]

const contextCards = [
  { icon: Shield, title: 'Regulatory Convergence', text: 'IMO targets, EU ETS inclusion, and FuelEU Maritime are creating enforceable, cost-linked obligations.' },
  { icon: DollarSign, title: 'Cost Exposure', text: 'Carbon pricing and fuel differentials are directly impacting voyage economics and fleet strategy.' },
  { icon: BarChart3, title: 'Measurement Becomes Control', text: 'MRV, CII, and real-time emissions tracking are turning data into an operational constraint.' },
]

const panels = [
  {
    title: 'From Penalty to Profit: Turning Decarbonization into a Competitive Edge',
    subtitle: 'Cost exposure, fuel strategy, and emissions intelligence as drivers of competitive positioning',
    points: [
      'Managing cost exposure under EU ETS and FuelEU Maritime',
      'Fuel strategy as a lever for long-term competitiveness',
      'Using emissions data for operational and strategic decisions',
      'Where compliance transitions into commercial advantage'
    ],
  },
]

const mainPanel = panels[0]
</script>
