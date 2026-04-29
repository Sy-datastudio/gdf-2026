<template>
  <div class="pt-20">
    <!-- Header -->
    <header class="py-32 px-6 bg-background-accent border-b border-accent grid-structure">
      <div class="max-w-7xl mx-auto space-y-8">
        <div class="flex items-center gap-3">
          <span class="w-12 h-[1px] bg-primary"></span>
          <span class="text-xs font-bold uppercase tracking-[0.3em] text-primary">Global Decarbonization Forum 2026</span>
        </div>
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
          INVITATION TO <span class="text-primary">CONTRIBUTE</span>
        </h1>
        <p class="text-xl text-text-muted font-light max-w-3xl leading-relaxed">
          This forum is designed as a focused, high-level dialogue at the intersection of policy, industry, and research.
        </p>
      </div>
    </header>

    <!-- Context & Audience -->
    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div class="space-y-12">
          <div class="space-y-4">
            <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-primary">The Setting</h2>
            <h3 class="text-4xl font-bold tracking-tight">Focus & Context</h3>
          </div>
          <p class="text-lg text-text-muted leading-relaxed font-light">
            It brings together a curated group of stakeholders to explore the strategic and operational dimensions of decarbonization, moving beyond pledges into tangible technological and policy frameworks.
          </p>

          <div class="bg-background-accent p-8 space-y-6 border border-accent">
            <h4 class="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-3">
              <Users :size="18" /> Expected Audience
            </h4>
            <ul class="space-y-4">
              <li v-for="(item, i) in audience" :key="i" class="flex gap-4 text-sm text-text-muted">
                <span class="text-primary font-bold opacity-30">0{{ i + 1 }}</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-12">
          <div class="space-y-4">
            <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-primary">Mission</h2>
            <h3 class="text-4xl font-bold tracking-tight">Intended Outcomes</h3>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div
              v-for="(outcome, i) in outcomes"
              :key="i"
              class="flex gap-6 p-6 border border-accent hover:border-primary/20 transition-colors"
            >
              <div class="text-primary shrink-0">
                <component :is="outcome.icon" :size="20" />
              </div>
              <div class="space-y-2">
                <h5 class="font-bold text-sm uppercase tracking-wider">{{ outcome.title }}</h5>
                <p class="text-sm text-text-muted leading-relaxed font-light">{{ outcome.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Participate -->
    <section class="py-32 px-6 bg-primary text-background relative overflow-hidden">
      <div class="absolute inset-0 grid-structure opacity-5"></div>
      <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div class="space-y-8">
          <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-accent">Strategic Impact</h2>
          <h3 class="text-5xl font-black tracking-tight leading-none uppercase">Why Participate?</h3>
          <p class="text-xl text-accent/60 leading-relaxed font-light">
            Your expertise will directly contribute to the formation of actionable outcomes for sectors facing critical transition timelines.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-4">
          <div
            v-for="(item, i) in whyParticipate"
            :key="i"
            class="flex items-center gap-6 p-6 border border-accent/20 bg-background/5 backdrop-blur-sm group hover:bg-background/10 transition-all rounded-[8px]"
          >
            <CheckCircle class="text-accent group-hover:scale-110 transition-transform" :size="20" />
            <span class="text-sm font-medium tracking-tight opacity-90">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Speaker Profile & Programme -->
    <section class="py-32 px-6 bg-background-accent">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div class="space-y-12">
          <div class="space-y-4">
            <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-primary">Selection</h2>
            <h3 class="text-4xl font-bold tracking-tight">Speaker Profile</h3>
          </div>
          <div class="space-y-4">
            <div
              v-for="(it, i) in speakerProfile"
              :key="i"
              class="flex items-center gap-4 py-4 border-b border-accent"
            >
              <span class="w-2 h-2 rounded-full bg-primary opacity-30"></span>
              <span class="text-sm font-semibold text-text-muted">{{ it }}</span>
            </div>
          </div>
        </div>

        <div class="space-y-12">
          <div class="space-y-4">
            <h2 class="text-xs font-bold uppercase tracking-[0.4em] text-primary">Structure</h2>
            <h3 class="text-4xl font-bold tracking-tight">Programme Overview</h3>
          </div>
          <div class="space-y-4 bg-background p-10 border border-accent rounded-[8px]">
            <div
              v-for="(it, i) in programme"
              :key="i"
              class="flex items-center gap-6 py-3"
            >
              <span class="text-xs font-bold text-primary opacity-40">STEP {{ i + 1 }}</span>
              <span class="text-sm font-medium">{{ it }}</span>
            </div>
            <div class="mt-12 pt-10 border-t border-accent flex flex-col gap-4 text-xs font-bold uppercase tracking-widest opacity-60">
              <span>Format: Virtual Zoom webinar</span>
              <span>Style: Moderated panel discussions</span>
              <span>Group: Small format for depth</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="py-40 px-6 text-center wave-pattern">
      <div class="max-w-2xl mx-auto space-y-12">
        <h3 class="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
          We would be honored to have your
          <span class="text-primary underline underline-offset-8 decoration-accent">participation</span>
          in this dialogue.
        </h3>
        <div class="flex flex-wrap justify-center gap-6">
          <button
            @click="$emit('navigate', 'register')"
            class="px-10 py-4 bg-primary text-background font-bold tracking-widest uppercase text-xs hover:opacity-90 transition-all flex items-center gap-3 rounded-[8px] cursor-pointer"
          >
            Confirm Interest <CheckCircle :size="14" />
          </button>
<!-- CONTACT BUTTON -->
        <div class="mt-6">
          <a href="mailto:syeda@sustivon.com">
            <button class="px-10 py-4 border border-primary text-primary font-bold uppercase text-xs rounded-lg hover:bg-primary/10">
              Contact Organizer
            </button>
          </a>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Mail, CheckCircle, Info, Target, Users, Layout } from 'lucide-vue-next'

defineEmits<{
  navigate: [pageId: string]
}>()

const audience = [
  'Policymakers and regulatory stakeholders (EU and Asia)',
  'Industry leaders in maritime, aviation, and logistics',
  'Climate technology and data solution providers',
  'Academic researchers and sustainability experts',
]

const outcomes = [
  { icon: Target, title: 'Cross-sector Alignment', desc: 'Alignment on practical decarbonization pathways across different sectors.' },
  { icon: Info, title: 'Insight Exchange', desc: 'Exchange of practical insights across regions and specialized industries.' },
  { icon: Layout, title: 'Opportunity Identification', desc: 'Identification of emerging opportunities and navigation of new challenges.' },
  { icon: Users, title: 'Strengthening Collaboration', desc: 'Building bridges between policy makers, industry leaders, and researchers.' },
]

const whyParticipate = [
  'Contribute to a high-level, curated dialogue',
  'Engage with stakeholders across multiple domains',
  'Share perspectives on evolving regulatory landscapes',
  'Be part of a platform focused on actionable outcomes',
]

const speakerProfile = [
  'Senior leadership experience',
  'Expertise in decarbonization or climate policy',
  'Background in maritime, aviation, or transport',
  'Experience in data, AI, or compliance systems',
]

const programme = [
  'Welcome & framing – 10 min',
  'Panel 1: Regulatory & economic context – 35 min',
  'Transition – 5 min',
  'Panel 2: Data & AI in execution – 35–45 min',
  'Closing reflections – 5 min',
]
</script>
