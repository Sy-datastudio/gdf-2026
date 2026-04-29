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

          <h1 class="text-5xl md:text-7xl font-black leading-[0.9]">
            <span class="text-white">GLOBAL</span><br/>
            <span class="text-primary">DECARBONIZATION</span><br/>
            <span class="text-white">FORUM</span>
            <span class="text-primary">2026</span>
          </h1>

          <p class="text-lg text-white/80 max-w-xl">
            A cross-sector dialogue shaping the future of climate action.
          </p>

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

    <!-- CTA -->
    <section class="py-32 px-6 text-center">
      <div class="max-w-4xl mx-auto space-y-10">

        <h3 class="text-5xl font-black text-white">
          Join a high-level conversation shaping
          <span class="text-primary"> climate action.</span>
        </h3>

        <div class="flex flex-wrap justify-center gap-6">
          <button class="px-10 py-5 bg-primary text-black font-bold rounded-lg">
            Request Invitation
          </button>

          <button class="px-10 py-5 border border-primary text-primary font-bold rounded-lg flex items-center gap-2">
            Contact Organizer
          </button>
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

        <!-- 🔥 NEW VISIT LINK -->
        <div class="pt-6">
          <a 
            href="https://www.sustivon.com"
            target="_blank"
            class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary hover:opacity-80"
          >
            Visit Sustivon.com ↗
          </a>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
defineEmits<{ navigate: [pageId: string] }>()
</script>
