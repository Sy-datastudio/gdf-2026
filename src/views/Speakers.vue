<template>
  <section id="speakers" class="pt-20">

    <!-- HEADER -->
    <header class="py-32 px-6 bg-background-accent border-b border-accent grid-structure">
      <div class="max-w-7xl mx-auto space-y-8">

        <div class="flex items-center gap-3">
          <span class="w-12 h-[1px] bg-primary"></span>
          <span class="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Global Decarbonization Forum 2026
          </span>
        </div>

        <h1 class="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
          INVITATION TO <span class="text-primary">CONTRIBUTE</span>
        </h1>

        <!-- FIXED -->
        <p class="text-xl text-white/80 max-w-3xl">
          A focused, high-level dialogue at the intersection of policy, industry, and research.
        </p>

      </div>
    </header>

    <!-- CONTEXT + AUDIENCE -->
    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        <!-- LEFT -->
        <div class="space-y-12">
          <div>
            <h2 class="text-xs uppercase tracking-[0.4em] text-primary">The Setting</h2>
            <!-- FIXED -->
            <h3 class="text-4xl font-bold mt-2 text-white">Focus & Context</h3>
          </div>

          <!-- FIXED -->
          <p class="text-lg text-white/80">
            A curated group of stakeholders exploring actionable decarbonization pathways.
          </p>

          <div class="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-xl space-y-6"">
            <h4 class="text-sm uppercase tracking-widest text-primary flex gap-2 items-center">
              <Users :size="18" /> Expected Audience
            </h4>

            <ul class="space-y-3">
              <!-- FIXED -->
              <li v-for="(item,i) in audience" :key="i" class="flex gap-3 text-sm text-gray-700">
                <span class="text-primary opacity-40">0{{ i+1 }}</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="space-y-12">
          <div>
            <h2 class="text-xs uppercase tracking-[0.4em] text-primary">Mission</h2>
            <!-- FIXED -->
            <h3 class="text-4xl font-bold mt-2 text-white">Intended Outcomes</h3>
          </div>

          <div class="space-y-6">
            <div v-for="(o,i) in outcomes" :key="i"
              class="flex gap-4 p-6 border border-white/10 rounded-xl bg-white/5 hover:border-primary/30 transition">

              <component :is="o.icon" class="text-primary" :size="20" />

              <div>
                <h5 class="font-bold text-sm uppercase text-white">{{ o.title }}</h5>
                <!-- FIXED -->
                <p class="text-sm text-white/70">{{ o.desc }}</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- WHY PARTICIPATE -->
    <section class="py-32 px-6 bg-primary text-background">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        <div>
          <h3 class="text-5xl font-black uppercase">Why Participate?</h3>
        </div>

        <div class="space-y-4">
          <div v-for="(item,i) in whyParticipate" :key="i"
            class="flex gap-4 p-6 border border-white/10 rounded-xl bg-white/5">

            <CheckCircle :size="18" />
            <span>{{ item }}</span>

          </div>
        </div>

      </div>
    </section>

    <!-- PROGRAMME TIMELINE -->
    <section class="py-32 px-6">
      <div class="max-w-4xl mx-auto">

        <!-- FIXED -->
        <h3 class="text-4xl font-bold mb-12 text-center text-white">
          Programme Overview
        </h3>

        <div class="relative">
          <div class="absolute left-4 top-0 bottom-0 w-[2px] bg-primary/20"></div>

          <div class="space-y-10">
            <div v-for="(p,i) in programme" :key="i" class="relative flex gap-6">

              <div class="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs">
                {{ i+1 }}
              </div>

              <div class="flex-1 p-6 border border-white/10 rounded-xl bg-white/5 hover:border-primary/30 transition">
                <div class="text-primary text-sm font-semibold mb-1">
                  {{ p.time }}
                </div>
                <!-- FIXED -->
                <div class="text-lg font-medium text-white">
                  {{ p.label }}
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- FIXED -->
        <div class="mt-10 text-xs uppercase tracking-widest text-white/50 space-y-2 opacity-70 text-center">
          <div>Format: Virtual Zoom webinar</div>
          <div>Style: Moderated panel discussions</div>
          <div>Group: Small format for depth</div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-40 px-6 text-center wave-pattern">
      <div class="space-y-8">

        <h3 class="text-4xl font-black uppercase text-white">
          We would be <span class="text-primary">honored</span> to have your participation
        </h3>

        <div class="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="#register"
            class="w-[240px] px-10 py-4 bg-primary text-black font-bold uppercase rounded-lg text-center"
          >
            Confirm Interest
          </a>

          <a
            href="mailto:syeda@sustivon.com"
            class="w-[240px] px-10 py-4 border border-primary text-primary font-bold uppercase rounded-lg text-center"
          >
            Contact Organizer
          </a>

        </div>

      </div>
    </section>

  </section>
</template>

<script setup lang="ts">
import { CheckCircle, Users, Info, Target, Layout } from 'lucide-vue-next'

const audience = [
  'Policymakers and regulatory stakeholders',
  'Industry leaders in maritime & aviation',
  'Climate tech providers',
  'Academic researchers',
]

const outcomes = [
  { icon: Target, title: 'Alignment', desc: 'Cross-sector alignment on pathways' },
  { icon: Info, title: 'Insights', desc: 'Exchange practical insights' },
  { icon: Layout, title: 'Opportunities', desc: 'Identify emerging opportunities' },
  { icon: Users, title: 'Collaboration', desc: 'Strengthen collaboration' },
]

const whyParticipate = [
  'High-level curated dialogue',
  'Cross-sector engagement',
  'Policy + industry insights',
  'Actionable outcomes',
]

const programme = [
  { time: '10 min', label: 'Welcome & framing' },
  { time: '35 min', label: 'Panel 1: Penalty to Profit' },
  { time: '5 min', label: 'Transition' },
  { time: '35–45 min', label: 'Panel 2: The AI Climate Leap' },
  { time: '5 min', label: 'Closing reflections' },
]
</script>
