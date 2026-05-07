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

      <!-- GRID CONTENT -->
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
          <div class="flex gap-4 pt-4">
            <button 
              @click="scrollTo('register')"
              class="px-12 py-4 bg-primary text-black font-bold uppercase text-xs rounded-lg hover:opacity-90 transition"
            >
              Join the Forum
            </button>
          </div>
        </div>

      </div>

      <!-- ✅ BLENDED IMAGE (OUTSIDE GRID, INSIDE HERO) -->
      <div class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[50%] pointer-events-none">
        <div class="relative w-full">
          <img 
            src="/ship-Emissions-image.jpeg"
            class="w-full opacity-75 mix-blend-lighten"
          />
          <div class="absolute inset-0 bg-gradient-to-l from-transparent via-black/60 to-black"></div>
        </div>
      </div>

    </div>

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

    <!-- ABOUT -->
    <section class="py-32 px-6 text-center">
      <div class="max-w-4xl mx-auto space-y-8">

        <h2 class="text-xs tracking-[0.4em] text-primary uppercase">About</h2>

        <h3 class="text-4xl font-bold text-white">
          A platform for <span class="text-primary">strategic maritime dialogue</span>
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

        <h3 class="text-4xl font-bold text-white">Sustivon</h3>

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

  </div>
</template>
