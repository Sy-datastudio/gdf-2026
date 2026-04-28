<template>
  <div class="pt-20">
    <!-- Success State -->
    <div v-if="submitted" class="min-h-screen flex items-center justify-center px-6 py-32 wave-pattern">
      <div class="max-w-lg w-full bg-background border border-accent p-12 text-center space-y-8 shadow-2xl shadow-primary/5 rounded-[8px]">
        <div class="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto">
          <Send :size="32" />
        </div>
        <div class="space-y-4">
          <h2 class="text-3xl font-bold tracking-tight uppercase">Request Submitted</h2>
          <p class="text-text-muted leading-relaxed font-light">
            Thank you for your interest in the Global Decarbonization Forum 2026.
            Our team will review your application and confirm participation details via email.
          </p>
        </div>
        <button
          @click="submitted = false"
          class="text-xs font-bold uppercase tracking-widest text-primary underline underline-offset-4 cursor-pointer"
        >
          Submit Another Request
        </button>
        <div class="pt-4">
          <button
            @click="$emit('navigate', 'home')"
            class="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>

    <!-- Form State -->
    <div v-else class="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
      
      <!-- Info Column -->
      <div class="lg:col-span-5 space-y-12">
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <span class="w-12 h-[1px] bg-primary"></span>
            <span class="text-xs font-bold uppercase tracking-[0.3em] text-primary">Application Portal</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase">
            Request an <br/>
            <span class="text-primary underline underline-offset-8 decoration-accent/30">Invitation</span>
          </h1>
          <p class="text-xl text-text-muted font-light leading-relaxed">
            The forum is a curated experience. We review each application to ensure a balanced and high-impact dialogue across all sectors.
          </p>
        </div>

        <div class="space-y-8 py-8 border-y border-accent">
          <div class="flex gap-4">
            <div class="text-primary shrink-0 opacity-40 py-1"><Info :size="20" :stroke-width="1.5" /></div>
            <p class="text-xs font-bold uppercase tracking-wider text-text-muted leading-relaxed">
              "Our team will review and confirm participation details within 3-5 business days."
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h5 class="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Platform</h5>
              <span class="text-sm font-semibold">Virtual / Zoom</span>
            </div>
            <div>
              <h5 class="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Access</h5>
              <span class="text-sm font-semibold">Invited Only</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Column -->
      <div class="lg:col-span-7 bg-background shadow-2xl shadow-primary/5 border border-accent p-8 md:p-16 grid-structure relative overflow-hidden rounded-[8px]">
        <div class="absolute inset-0 wave-pattern opacity-5 pointer-events-none"></div>
        <form @submit.prevent="handleSubmit" class="space-y-10 relative z-10">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center gap-2">
                <User :size="14" /> Full Name*
              </label>
              <input
                v-model="form.name"
                required
                type="text"
                placeholder="Enter your name"
                class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm"
              />
            </div>
            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center gap-2">
                <Mail :size="14" /> Email*
              </label>
              <input
                v-model="form.email"
                required
                type="email"
                placeholder="work@organization.com"
                class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center gap-2">
                <Building2 :size="14" /> Organization*
              </label>
              <input
                v-model="form.organization"
                required
                type="text"
                placeholder="Company or Institution"
                class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm"
              />
            </div>
            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center gap-2">
                <Briefcase :size="14" /> Role / Designation*
              </label>
              <input
                v-model="form.role"
                required
                type="text"
                placeholder="e.g. Head of Sustainability"
                class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center gap-2">
                <Map :size="14" /> Region*
              </label>
              <select
                v-model="form.region"
                required
                class="w-full bg-transparent border-b border-accent py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm appearance-none cursor-pointer"
              >
                <option value="">Select Region</option>
                <option value="europe">Europe</option>
                <option value="asia-pacific">Asia Pacific</option>
                <option value="north-america">North America</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div class="space-y-3">
              <label class="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center gap-2">
                <Target :size="14" /> Interested As*
              </label>
              <div class="flex flex-wrap gap-4 pt-2">
                <label v-for="type in ['Attendee', 'Speaker', 'Partner']" :key="type" class="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="interest"
                    :value="type.toLowerCase()"
                    v-model="form.interest"
                    class="w-4 h-4 accent-primary"
                  />
                  <span class="text-xs font-semibold group-hover:text-primary transition-colors">{{ type }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="pt-8 flex flex-col gap-6">
            <button
              type="submit"
              class="w-full py-5 bg-primary text-background font-bold tracking-[0.3em] uppercase text-xs hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/10 rounded-[8px] cursor-pointer"
            >
              Submit Request
              <ArrowRight :size="16" />
            </button>
            <p class="text-[10px] text-center opacity-40 font-bold uppercase tracking-widest">
              By submitting, you agree to our privacy policy regarding event communications.
            </p>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, User, Building2, Briefcase, Map, Send, Info, Target, ArrowRight } from 'lucide-vue-next'

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
  interest: '',
})

const handleSubmit = async () => {
  const response = await fetch('https://formspree.io/f/mlgayanq', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value)
  })
  if (response.ok) {
    submitted.value = true
  }
}
</script>