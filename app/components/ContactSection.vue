
<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { useRuntimeConfig } from 'nuxt/app'
import { reactive, ref } from 'vue'

// ─── EmailJS config — values live in nuxt.config.ts → runtimeConfig.public ──
const { emailjsServiceId, emailjsTemplateId, emailjsPublicKey } = useRuntimeConfig().public

const EMAILJS_SERVICE_ID  = emailjsServiceId  as string
const EMAILJS_TEMPLATE_ID = emailjsTemplateId as string
const EMAILJS_PUBLIC_KEY  = emailjsPublicKey  as string

// ─── Form state ───────────────────────────────────────────────────────────────
const form = reactive({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const sent    = ref(false)
const error   = ref(false)

async function sendEmail() {
  sending.value = true
  error.value   = false
  sent.value    = false

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name:    form.name,
        email:   form.email,
        title:      form.subject,
        message:      form.message,
        reply_to:     form.email,
      },
      EMAILJS_PUBLIC_KEY
    )
    sent.value  = true
    // Reset form after a short delay for UX
    setTimeout(() => {
      form.name = form.email = form.subject = form.message = ''
      sent.value = false
    }, 4000)
  } catch (e) {
    console.error('EmailJS error:', e)
    error.value = true
  } finally {
    sending.value = false
  }
}

// ─── Copy-to-clipboard helpers ────────────────────────────────────────────────
const emailCopied = ref(false)
const phoneCopied = ref(false)

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for older browsers / non-https
    const el = document.createElement('textarea')
    el.value = text
    el.style.position = 'fixed'
    el.style.opacity  = '0'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    return true
  }
}

async function copyEmail() {
  await copyToClipboard('ahmed.roshdy.web@gmail.com')
  emailCopied.value = true
  setTimeout(() => (emailCopied.value = false), 2000)
}

async function copyPhone() {
  await copyToClipboard('+201062240547')
  phoneCopied.value = true
  setTimeout(() => (phoneCopied.value = false), 2000)
}
</script>

<template>
  <section id="contact" class="py-24 px-6 relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-14">
        <p class="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p class="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          I'm seeking remote frontend roles where I can own UI features and deliver polished user experiences.
          Drop me a message — I usually respond within 24 hours.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

        <!-- Contact Info Card -->
        <div class="lg:col-span-2 space-y-4">
          <!-- Email -->
          <div
            class="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 cursor-pointer relative"
            @click="copyEmail"
            :title="emailCopied ? 'Copied!' : 'Click to copy email'"
          >
            <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
              <i class="fas fa-envelope text-teal-400 text-base"></i>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-xs text-slate-500 mb-0.5">Email</p>
              <p class="text-white text-sm font-medium break-all">ahmed.roshdy.web@gmail.com</p>
            </div>
            <!-- Copy feedback -->
            <div class="flex-shrink-0 ml-2">
              <transition name="fade-scale">
                <span v-if="emailCopied" class="text-xs text-teal-400 font-semibold whitespace-nowrap">Copied!</span>
                <i v-else class="far fa-copy text-slate-600 group-hover:text-teal-400 transition-colors text-sm"></i>
              </transition>
            </div>
          </div>

          <!-- Phone -->
          <div
            class="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 cursor-pointer"
            @click="copyPhone"
            :title="phoneCopied ? 'Copied!' : 'Click to copy phone number'"
          >
            <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
              <i class="fas fa-phone text-teal-400 text-base"></i>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-xs text-slate-500 mb-0.5">Phone / WhatsApp</p>
              <p class="text-white text-sm font-medium">+201062240547</p>
            </div>
            <div class="flex-shrink-0 ml-2">
              <transition name="fade-scale">
                <span v-if="phoneCopied" class="text-xs text-teal-400 font-semibold whitespace-nowrap">Copied!</span>
                <i v-else class="far fa-copy text-slate-600 group-hover:text-teal-400 transition-colors text-sm"></i>
              </transition>
            </div>
          </div>

          <!-- Location -->
          <div class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
            <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
              <i class="fas fa-location-dot text-teal-400 text-base"></i>
            </div>
            <div>
              <p class="text-xs text-slate-500 mb-0.5">Location</p>
              <p class="text-white text-sm font-medium">Cairo, Egypt</p>
            </div>
          </div>

          <!-- Availability badge -->
          <div class="flex items-center gap-3 p-4 rounded-xl bg-teal-500/10 border border-teal-500/30">
            <span class="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
            </span>
            <p class="text-teal-300 text-sm font-medium">Available for remote opportunities</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <form
            @submit.prevent="sendEmail"
            class="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 sm:p-8 space-y-5 backdrop-blur-sm"
          >
            <!-- Name + Subject row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label for="contact-name" class="block text-xs text-slate-400 mb-2 font-medium tracking-wide uppercase">Your Name</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ahmed Roshdy"
                  class="w-full bg-slate-900/70 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all duration-200"
                />
              </div>
              <div>
                <label for="contact-email" class="block text-xs text-slate-400 mb-2 font-medium tracking-wide uppercase">Your Email</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  class="w-full bg-slate-900/70 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all duration-200"
                />
              </div>
            </div>

            <!-- Subject -->
            <div>
              <label for="contact-subject" class="block text-xs text-slate-400 mb-2 font-medium tracking-wide uppercase">Subject</label>
              <input
                id="contact-subject"
                v-model="form.subject"
                type="text"
                required
                placeholder="Frontend Role / Freelance Project / ..."
                class="w-full bg-slate-900/70 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all duration-200"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="contact-message" class="block text-xs text-slate-400 mb-2 font-medium tracking-wide uppercase">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                required
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                class="w-full bg-slate-900/70 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="sending || sent"
              class="w-full flex items-center justify-center gap-2.5 bg-teal-500 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold py-3.5 rounded-lg transition-all duration-300 text-sm tracking-wide group"
            >
              <!-- Idle -->
              <template v-if="!sending && !sent && !error">
                <i class="fas fa-paper-plane group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"></i>
                Send Message
              </template>
              <!-- Sending -->
              <template v-else-if="sending">
                <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Sending...
              </template>
              <!-- Sent -->
              <template v-else-if="sent">
                <i class="fas fa-check-circle"></i>
                Message Sent!
              </template>
              <!-- Error -->
              <template v-else-if="error">
                <i class="fas fa-redo"></i>
                Try Again
              </template>
            </button>

            <!-- Status messages -->
            <transition name="slide-up">
              <p v-if="sent" class="text-center text-teal-400 text-xs font-medium">
                🎉 Thanks! I'll get back to you within 24 hours.
              </p>
              <p v-else-if="error" class="text-center text-red-400 text-xs font-medium">
                ⚠️ Something went wrong. Please email me directly at ahmed.roshdy.web@gmail.com
              </p>
            </transition>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>


<style scoped>
/* Fade + scale transition for copy icon/text swap */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* Slide up for status messages */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
