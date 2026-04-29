<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center px-6 overflow-hidden grid-structure">
      <div class="absolute inset-0 pointer-events-none opacity-[0.04]" style="background-image: url('data:image/svg+xml,%3Csvg width=\'100\' height=\'20\' viewBox=\'0 0 100 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 10 Q 25 0 50 10 T 100 10\' stroke=\'%231da282\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E'); background-repeat: repeat;"></div>
      <div class="absolute inset-0 wave-pattern opacity-40 pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto w-full relative z-10 py-20 flex flex-col items-center text-center">
        <div class="space-y-8 max-w-4xl flex flex-col items-center">
          <div class="space-y-4 flex flex-col items-center">
            <div class="flex items-center gap-3">
              <span class="w-12 h-[1px] bg-primary"></span>
              <span class="text-xs font-bold uppercase tracking-[0.3em] text-primary">World Environment Day Edition</span>
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

          <!-- Decorative Icons -->
          <div class="flex flex-wrap justify-center gap-8 md:gap-12 py-4">
            <div v-for="(item, idx) in thematicIcons" :key="idx" class="flex flex-col items-center gap-3">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <component :is="item.icon" :size="36" :stroke-width="1.5" />
              </div>
              <span class="text-[10px] font-black tracking-[0.2em] text-[#888] uppercase">{{ item.label }}</span>
            </div>
          </div>

          <!-- Date/Time/Location -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-accent/50 w-full">
            <div class="flex flex-col items-center gap-2">
              <Calendar class="text-primary opacity-60" :size="24" />
              <span class="text-[10px] uppercase tracking-widest font-bold opacity-40">Date</span>
              <span class="text-lg md:text-xl font-bold tracking-tight text-primary">May 27, 2026</span>
            </div>
            <div class="flex flex-col items-center gap-2 border-y md:border-y-0 md:border-x border-accent/50 py-6 md:py-0 px-0 md:px-8">
              <Clock class="text-primary opacity-60" :size="24" />
              <span class="text-[10px] uppercase tracking-widest font-bold opacity-40">Time</span>
              <span class="text-lg md:text-xl font-bold tracking-tight text-primary">10:30 AM CET | 2:00 PM IST</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <MapPin class="text-primary opacity-60" :size="24" />
              <span class="text-[10px] uppercase tracking-widest font-bold opacity-40">Location</span>
              <span class="text-lg md:text-xl font-bold tracking-tight text-primary">Virtual (Zoom Webinar)</span>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap items-center justify-center gap-6">
            <button
              @click="$emit('navigate', 'register')"
              class="group px-8 py-4 bg-primary text-background font-bold tracking-widest uppercase text-xs flex items-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-primary/10 cursor-pointer rounded-[8px]"
            >
              Request Invitation
              <ArrowRight :size="14" class="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              @click="$emit('navigate', 'register')"
              class="px-8 py-4 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs hover:bg-primary/5 transition-all cursor-pointer rounded-[8px]"
            >
              Express Interest
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- About the Forum -->
    <section class="py-32 px-6 bg-background-accent">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div class="md:col-span-4 sticky top-32">
          <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 flex items-center gap-3">
            <span class="inline-block w-8 h-[1px] bg-primary"></span>
            About the Forum
          </h2>
          <h3 class="text-4xl font-bold tracking-tighter leading-none mb-8">
            A platform for strategic <span class="text-primary">climate dialogue</span>
          </h3>
        </div>
        <div class="md:col-span-8 space-y-8 text-lg text-text-muted leading-relaxed font-light">
          <p>The Global Decarbonization Forum 2026 convenes leaders across policy, industry, and academia to examine the evolving landscape of climate action.</p>
          <p>Anchored in the World Environment Day theme, the forum focuses on the transition from commitment to execution, particularly in <span class="text-primary font-medium">maritime and aviation</span>.</p>
          <p>The objective is to enable informed, cross-sector dialogue that supports actionable pathways toward decarbonization.</p>
        </div>
      </div>
    </section>

    <!-- Why This Matters -->
    <section class="py-32 px-6 border-b border-accent">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20 text-center space-y-4">
          <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-primary">Critical Context</h2>
          <h3 class="text-5xl font-black tracking-tight">Decarbonization is entering an <br/><span class="text-primary">enforcement era.</span></h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-accent border border-accent">
          <div v-for="(card, i) in contextCards" :key="i" class="bg-background p-12 space-y-6 group hover:bg-background-accent transition-colors">
            <div class="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <component :is="card.icon" :size="24" />
            </div>
            <h4 class="text-xl font-bold tracking-tight">{{ card.title }}</h4>
            <p class="text-text-muted text-sm leading-relaxed">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Panel Discussions -->
    <section class="py-32 px-6 bg-primary text-background overflow-hidden relative">
      <div class="absolute top-0 right-0 p-32 opacity-10 rotate-12">
        <Zap :size="400" :stroke-width="0.5" />
      </div>
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div class="space-y-4">
            <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-background/80">Curated Discussions</h2>
            <h3 class="text-5xl font-black tracking-tight uppercase">The Agenda</h3>
          </div>
          <p class="text-background/90 max-w-sm text-lg">Focusing on practical execution and technological integration.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-background">
          <div v-for="(panel, i) in panels" :key="i" class="p-12 border border-background/20 bg-background/5 backdrop-blur-sm group hover:-translate-y-2 transition-transform">
            <span class="text-xs font-bold uppercase tracking-[0.3em] opacity-40 mb-8 block">Panel 0{{ i + 1 }}</span>
            <h4 class="text-3xl font-bold tracking-tight mb-4">{{ panel.title }}</h4>
            <p class="text-background/90 mb-8 border-b border-background/20 pb-8 uppercase text-xs tracking-wider">{{ panel.subtitle }}</p>
            <ul class="space-y-4">
              <li v-for="(point, j) in panel.points" :key="j" class="flex items-center gap-3 text-sm font-light opacity-90">
                <span class="w-1.5 h-1.5 rounded-full bg-background"></span>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- About Sustivion -->
    <section class="py-32 px-6 border-b border-accent flex justify-center text-center">
      <div class="max-w-4xl space-y-12">
        <h2 class="text-xs font-bold uppercase tracking-[0.5em] text-primary">Organized By</h2>
        <h3 class="text-4xl font-bold tracking-tighter">Sustivion</h3>
        <p class="text-xl text-text-muted leading-relaxed font-light">
          Sustivion is an <span class="font-semibold text-primary">IISc and NUS incubated</span> clean-tech venture working at the intersection of climate compliance, AI-driven intelligence, and transport decarbonization.
        </p>
        <p class="text-lg text-text-muted leading-relaxed opacity-80">
          With a focus on maritime and aviation, Sustivion enables organizations to navigate complex regulatory environments and transition toward Net Zero through data-driven strategies.
        </p>
        <div class="pt-8">
          <a href="https://www.sustivon.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all">
            Visit sustivon.com <ExternalLink :size="14" />
          </a>
        </div>
      </div>
    </section>

    <!-- Event Details & Schedule -->
    <section class="py-32 px-6 bg-background-accent">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div class="space-y-12">
          <div class="space-y-4">
            <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-primary">Logistics</h2>
            <h3 class="text-5xl font-black tracking-tight">Event Details</h3>
          </div>
          <div class="space-y-8">
            <div class="grid grid-cols-2 gap-8 border-t border-accent pt-8">
              <span class="text-xs font-bold uppercase tracking-widest opacity-40">Format</span>
              <span class="text-sm font-semibold">Virtual (Zoom Webinar)</span>
            </div>
            <div class="grid grid-cols-2 gap-8 border-t border-accent pt-8">
              <span class="text-xs font-bold uppercase tracking-widest opacity-40">Date</span>
              <span class="text-sm font-semibold">May 27, 2026</span>
            </div>
          </div>
        </div>
        <div class="space-y-12 bg-background p-12 border border-accent shadow-sm">
          <h3 class="text-2xl font-bold tracking-tight border-b border-accent pb-6">Schedule</h3>
          <div class="space-y-6">
            <div v-for="(item, i) in schedule" :key="i" class="flex justify-between items-center gap-12 group">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">{{ item.time }}</span>
              <span class="text-sm font-medium border-b border-transparent group-hover:border-primary transition-all pb-1 text-[#333333]">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Speakers -->
    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto space-y-16">
        <div class="max-w-3xl space-y-6">
          <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-primary">The Panel</h2>
          <h3 class="text-5xl font-black tracking-tight leading-none">Global Leaders</h3>
          <p class="text-xl text-text-muted font-light leading-relaxed">
            We are currently in the process of final confirmations across maritime operations, data systems, and sustainability research.
          </p>
          <div class="p-8 bg-background-accent border-l-4 border-primary text-sm text-text-muted leading-relaxed">
            "The panel is being intentionally kept small to ensure depth of discussion. Final speaker details will be shared shortly."
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-32 px-6 border-t border-accent bg-background-accent grid-structure relative overflow-hidden">
      <div class="absolute inset-0 wave-pattern opacity-10 pointer-events-none"></div>
      <div class="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <h3 class="text-5xl font-black tracking-tighter leading-[0.9]">
          JOIN A HIGH-LEVEL <br/>
          CONVERSATION SHAPING <br/>
          <span class="text-primary">CLIMATE ACTION.</span>
        </h3>
        <div class="flex flex-wrap justify-center items-center gap-6">
          <button
            @click="$emit('navigate', 'register')"
            class="group px-10 py-5 bg-primary text-background font-bold tracking-widest uppercase text-xs flex items-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-primary/20 cursor-pointer rounded-[8px]"
          >
            Request Invitation
            <ArrowRight :size="14" class="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            @click="$emit('navigate', 'register')"
            class="px-10 py-5 border border-primary/20 text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-3 hover:bg-primary/5 transition-all cursor-pointer rounded-[8px]"
          >
            Contact Organizer <Mail :size="14" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Leaf, Mail, ArrowRight, Zap, Database, Calendar, Clock, MapPin, ExternalLink, Globe, RefreshCw } from 'lucide-vue-next'

defineEmits<{
  navigate: [pageId: string]
}>()

const thematicIcons = [
  { icon: Leaf, label: 'SUSTAINABILITY' },
  { icon: Globe, label: 'GLOBAL IMPACT' },
  { icon: Zap, label: 'CLEAN ENERGY' },
  { icon: RefreshCw, label: 'NET ZERO' },
]

const contextCards = [
  { icon: Globe, title: 'Global Acceleration', text: 'Regulatory frameworks are accelerating globally as international bodies set increasingly stringent emission targets.' },
  { icon: Zap, title: 'Structural Pressure', text: 'Transport sectors, particularly high-emission ones like maritime and aviation, face mounting structural transition pressures.' },
  { icon: Database, title: 'Data Advantage', text: 'Competitive advantage is increasingly tied to compliance efficiency and innovation driven by real-time data.' },
]

const panels = [
  {
    title: 'From Penalty to Profit',
    subtitle: 'Can Decarbonization Regulations Create Competitive Advantage?',
    points: ['Compliance as a strategic lever', 'Economic implications of policies', 'Biofuels in maritime/aviation'],
  },
  {
    title: 'The AI Climate Leap',
    subtitle: 'How Real-Time Data Is Deciding Who Wins the Decarbonization Race',
    points: ['AI-driven emissions tracking', 'Real-time decision-making', 'Data as a competitive differentiator'],
  },
]

const schedule = [
  { time: '10 min', label: 'Welcome & framing' },
  { time: '35 min', label: 'Panel 1: Regulatory & economic context' },
  { time: '5 min', label: 'Transition' },
  { time: '35–45 min', label: 'Panel 2: Data & AI in execution' },
  { time: '5 min', label: 'Closing reflections' },
]
</script>
