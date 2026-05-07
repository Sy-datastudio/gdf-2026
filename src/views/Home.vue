<template>
  <div id="home" class="pt-20 relative text-white overflow-hidden">

    <!-- BACKGROUND -->
    <div class="fixed inset-0 -z-10">
      <img src="/dark-setting-globe.jpg" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>
    </div>

    <!-- HERO -->
    <div class="relative min-h-[95vh] flex items-center px-6">
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

          <!-- ✅ FIXED BUTTON -->
          <div class="flex gap-4 pt-4">
            <button 
              @click="scrollTo('register')"
              class="px-12 py-4 bg-primary text-black font-bold uppercase text-xs rounded-lg hover:opacity-90 transition"
            >
              Join the Forum
            </button>
          </div>
        </div>

        <div class="hidden md:flex justify-end">
          <img src="/ship-Emissions-image.jpeg" class="rounded-xl opacity-90 shadow-2xl border border-white/10 w-[85%]"/>
        </div>

      </div>
    </div>

    <!-- REST OF YOUR FILE UNCHANGED -->

    <!-- EVENT BAND -->
    <section class="py-24 px-6 border-y border-white/10">
      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        <div>
          <p class="text-xs tracking-[0.6em] text-white/70 uppercase">Date</p>
          <h3 class="text-4xl font-bold text-primary">June 4, 2026</h3>
        </div>

        <div>
          <p class="text-xs tracking-[0.6em] text-white/70 uppercase">Time</p>
          <p class="text-xl md:text-2xl text-primary font-bold">
            10:30 AM CET<br/>2:00 PM IST
          </p>
        </div>

        <div>
          <p class="text-xs tracking-[0.6em] text-white/70 uppercase">Location</p>
          <p class="text-xl md:text-2xl text-primary font-bold">
            Virtual (Closed Zoom Session)
          </p>
        </div>
      </div>
    </section>

    <!-- (keep everything else exactly as is) -->

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

const schedule = [
  { time: '10 min', label: 'Opening Brief' },
  { time: '75–80 min', label: 'Panel Discussion' },
  { time: '5 min', label: 'Closing Remarks' },
]
</script>
