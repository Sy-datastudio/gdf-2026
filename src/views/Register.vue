<template>
  <div class="pt-20">

    <!-- Success State -->
    <div v-if="submitted" class="min-h-screen flex items-center justify-center px-6 py-32 wave-pattern">
      <div class="max-w-lg w-full bg-background border border-accent p-12 text-center space-y-8 shadow-2xl shadow-primary/5 rounded-[8px]">

        <div class="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto">
          <Send :size="32" />
        </div>

        <div class="space-y-4">
          <h2 class="text-3xl font-bold tracking-tight uppercase text-white">
            Registration Received
          </h2>

          <!-- FIXED -->
          <p class="text-white/70 leading-relaxed font-light">
            You’re successfully registered for the Global Decarbonization Forum 2026.
            Event access details will be shared with you via email shortly.
          </p>
        </div>

        <button
          class="w-full py-5 bg-primary text-background font-bold tracking-[0.3em] uppercase text-xs hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/10 rounded-[8px]"
        >
          Register Another Attendee
        </button>

        <div class="pt-4">
          <button
            @click="$emit('navigate', 'home')"
            class="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition"
          >
            Back to Home
          </button>
        </div>

      </div>
    </div>

    <!-- FORM -->
    <div v-else class="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

      <!-- LEFT SIDE -->
      <div class="lg:col-span-5 space-y-12">

        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <span class="w-12 h-[1px] bg-primary"></span>
            <span class="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Registration Portal
            </span>
          </div>

          <h1 class="text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase text-white">
            Register for the <br/>
            <span class="text-primary underline underline-offset-8 decoration-accent/30">
              Forum
            </span>
          </h1>

          <!-- FIXED VISIBILITY -->
          <p class="text-xl text-white/80 font-light leading-relaxed">
            Join the Global Decarbonization Forum 2026 and connect with leaders across maritime,
            policy, and clean technology driving the transition forward.
          </p>
        </div>

        <!-- INFO BLOCK -->
        <div class="space-y-8 py-8 border-y border-white/10">

          <div class="flex gap-4">
            <div class="text-primary shrink-0 opacity-70 py-1">
              <Info :size="20" :stroke-width="1.5" />
            </div>

            <!-- FIXED -->
            <p class="text-xs font-bold uppercase tracking-wider text-white/70 leading-relaxed">
              Registration confirmation and joining details will be shared via email.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

            <div>
              <h5 class="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                Platform
              </h5>

              <span class="text-sm font-semibold text-white">
                Virtual / Zoom
              </span>
            </div>

            <div>
              <h5 class="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                Access
              </h5>

              <span class="text-sm font-semibold text-white">
                Open to registered attendees
              </span>
            </div>

          </div>

        </div>

      </div>

      <!-- FORM -->
      <div class="lg:col-span-7 bg-background shadow-2xl shadow-primary/5 border border-accent p-8 md:p-16 grid-structure relative overflow-hidden rounded-[8px]">

        <div class="absolute inset-0 wave-pattern opacity-5 pointer-events-none"></div>

        <form @submit.prevent="handleSubmit" class="space-y-10 relative z-10">

          <!-- ROW 1 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
                <User :size="14" /> Full Name*
              </label>

              <input
                v-model="form.name"
                required
                type="text"
                placeholder="Enter your name"
                class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary text-white placeholder-white/40 text-sm"
              />
            </div>

            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
                <Mail :size="14" /> Email*
              </label>

              <input
                v-model="form.email"
                required
                type="email"
                placeholder="work@organization.com"
                class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary text-white placeholder-white/40 text-sm"
              />
            </div>

          </div>

          <!-- ROW 2 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
                <Building2 :size="14" /> Organization*
              </label>

              <input
                v-model="form.organization"
                required
                type="text"
                placeholder="Company or Institution"
                class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary text-white placeholder-white/40 text-sm"
              />
            </div>

            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
                <Briefcase :size="14" /> Role / Designation
              </label>

              <input
                v-model="form.role"
                type="text"
                placeholder="e.g. Sustainability Lead"
                class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary text-white placeholder-white/40 text-sm"
              />
            </div>

          </div>

          <!-- REGION -->
          <div class="space-y-3">
            <label class="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
              <Map :size="14" /> Region*
            </label>

            <select
              v-model="form.region"
              required
              class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary text-white text-sm"
            >
              <option value="">Select Region</option>
              <option value="europe">Europe</option>
              <option value="asia-pacific">Asia Pacific</option>
              <option value="north-america">North America</option>
              <option value="others">Others</option>
            </select>
          </div>

          <!-- BUTTON -->
          <div class="pt-8 flex flex-col gap-6">
            <button
              type="submit"
              class="w-full py-5 bg-primary text-background font-bold tracking-[0.3em] uppercase text-xs hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/10 rounded-[8px]"
            >
              Register Now
              <ArrowRight :size="16" />
            </button>

            <!-- FIXED -->
            <p class="text-[10px] text-center text-white/50 font-bold uppercase tracking-widest">
              By registering, you agree to receive event-related communications.
            </p>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, User, Building2, Briefcase, Map, Send, Info, ArrowRight } from 'lucide-vue-next'

defineEmits<{
  navigate: [pageId: string]
}>()

const submitted = ref(false)

const form = ref({
  name: '',
  email: '',
  organization: '',
  role: '',
  region: '',
})

const handleSubmit = async () => {
  const response = await fetch('https://formspree.io/f/xdayrbdd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value)
  })

  if (response.ok) {
    submitted.value = true
  }
}
</script>
