<template>
  <div class="pt-20 relative text-white overflow-hidden">

    <!-- 🌍 GLOBAL BACKGROUND -->
    <div class="fixed inset-0 -z-10">
      <img src="/dark-setting-globe.jpg" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>
    </div>

    <!-- HERO -->
    <section class="relative min-h-[95vh] flex items-center px-6">

      <div class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        <!-- LEFT -->
        <div class="space-y-8">

          <div class="text-xs uppercase tracking-[0.4em] text-primary flex items-center gap-3">
            <span class="w-10 h-[1px] bg-primary"></span>
            World Environment Day Edition
          </div>

          <h1 class="text-5xl md:text-7xl font-black leading-[0.9] text-white">
            <span class="text-white/90">GLOBAL</span> <br/>
            <span class="text-primary drop-shadow-[0_0_20px_rgba(29,162,130,0.4)]">
              DECARBONIZATION
            </span><br/>
            <span class="text-white/90">FORUM</span>
            <span class="text-primary drop-shadow-[0_0_20px_rgba(29,162,130,0.4)]">
              2026
            </span>
          </h1>

          <p class="text-lg text-white/80 max-w-xl">
            A high-signal convening of leaders shaping the next phase of climate execution.
          </p>

          <div class="flex gap-4">
            <button
              @click="$emit('navigate', 'register')"
              class="px-8 py-4 bg-primary text-black font-bold uppercase text-xs rounded-lg"
            >
              Request Invitation
            </button>

            <button
              @click="$emit('navigate', 'register')"
              class="px-8 py-4 border border-white/20 text-white text-xs uppercase rounded-lg hover:bg-white/5"
            >
              Express Interest
            </button>
          </div>

        </div>

        <!-- RIGHT IMAGE -->
        <div class="hidden md:flex justify-end">
          <div class="relative w-[85%] max-w-[520px]">
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent rounded-xl"></div>
            <img src="/ship-Emissions-image.jpeg" class="rounded-xl opacity-90 shadow-2xl border border-white/10"/>
          </div>
        </div>

      </div>
    </section>

    <!-- EVENT DETAILS BAND -->
    <section class="py-24 px-6 border-t border-white/10 border-b border-white/10">

      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">

        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.3em] text-white/50">Date</p>
          <h3 class="text-3xl md:text-4xl font-bold text-primary">May 27, 2026</h3>
        </div>

        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.3em] text-white/50">Time</p>
          <h3 class="text-3xl md:text-4xl font-bold text-primary leading-tight">
            10:30 AM CET<br/>2:00 PM IST
          </h3>
        </div>

        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.3em] text-white/50">Location</p>
          <h3 class="text-3xl md:text-4xl font-bold text-primary">
            Virtual (Zoom Webinar)
          </h3>
        </div>

      </div>

    </section>

    <!-- ABOUT -->
    <section class="py-40 px-6 border-t border-white/10">
      <div class="max-w-6xl mx-auto text-center space-y-8">

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

        <div class="flex justify-between items-end">
          <div>
            <h2 class="text-xs uppercase tracking-[0.4em] text-primary">Agenda</h2>
            <h3 class="text-5xl font-black">Curated Discussions</h3>
          </div>
          <p class="text-white/70 max-w-sm">
            Focused on execution, compliance, and real-time intelligence.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-10">
          <div v-for="(panel, i) in panels" :key="i"
               class="p-10 bg-white/5 border border-white/10 rounded-xl">

            <span class="text-white/90">Panel 0{{ i + 1 }}</span>

            <h4 class="text-2xl font-bold mt-4 mb-3">
              {{ panel.title }}
            </h4>

            <p class="text-primary text-xs uppercase mb-6">
              {{ panel.subtitle }}
            </p>

            <ul class="space-y-3 text-white/70 text-sm">
              <li v-for="(p, j) in panel.points" :key="j">• {{ p }}</li>
            </ul>

          </div>
        </div>

      </div>
    </section>

    <!-- GLOBAL LEADERS -->
    <section class="py-40 px-6">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        <!-- LEFT -->
        <div class="space-y-8">
          <h2 class="text-xs uppercase tracking-[0.4em] text-primary">The Panel</h2>

          <h3 class="text-5xl font-black">
            Global <span class="text-primary">Leaders</span>
          </h3>

          <p class="text-white/70">
            A tightly curated group of decision-makers across maritime operations, climate systems, and regulatory design.
          </p>
        </div>

        <!-- RIGHT CARDS -->
        <div class="grid grid-cols-2 gap-8">

          <div class="p-8 bg-white/5 border border-white/10 rounded-2xl shadow-xl">
            <p class="text-primary text-base font-semibold mb-3">Curated Leadership</p>
            <p class="text-sm text-white/80">Senior policy & industry actors</p>
          </div>

          <div class="p-8 bg-white/5 border border-white/10 rounded-2xl shadow-xl">
            <p class="text-primary text-base font-semibold mb-3">Invitation Only</p>
            <p class="text-sm text-white/80">Access is selectively extended</p>
          </div>

          <div class="p-8 bg-white/5 border border-white/10 rounded-2xl shadow-xl">
            <p class="text-primary text-base font-semibold mb-3">High-Signal Dialogue</p>
            <p class="text-sm text-white/80">Execution-focused exchange</p>
          </div>

          <div class="p-8 bg-white/5 border border-white/10 rounded-2xl shadow-xl">
            <p class="text-primary text-base font-semibold mb-3">Global Perspective</p>
            <p class="text-sm text-white/80">Cross-sector representation</p>
          </div>

        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-40 px-6 border-t border-white/10 text-center">
      <div class="max-w-3xl mx-auto space-y-10">

        <h3 class="text-4xl font-bold">
          Join a high-level <br/>
          <span class="text-primary">climate dialogue</span>
        </h3>

        <button
          @click="$emit('navigate', 'register')"
          class="px-10 py-5 bg-primary text-black font-bold uppercase rounded-lg"
        >
          Register
        </button>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
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
