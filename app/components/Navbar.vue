<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-app-bg/80 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <nuxt-link to="/" class="text-xl font-bold text-primary">Ahmed Roshdy<span class="text-color-text">.dev</span></nuxt-link>

      <!-- Desktop Nav -->
      <div class="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
        <nuxt-link to="/" class="hover:text-primary transition">About</nuxt-link>
        <nuxt-link to="/experience" class="hover:text-primary transition">Experience</nuxt-link>
        <nuxt-link to="/skills" class="hover:text-primary transition">Skills</nuxt-link>
        <nuxt-link to="/contact" class="hover:text-primary transition">Contact</nuxt-link>
      </div>

      <!-- Desktop CTA -->
      <a href="mailto:ahmed.roshdy.web@gmail.com" target="_blank" class="hidden md:inline-block bg-primary hover:bg-primary text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition">
        Hire Me
      </a>

      <!-- Mobile: Hamburger -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg border border-slate-700 hover:border-slate-500 transition"
        aria-label="Toggle menu"
      >
        <span :class="['block w-5 h-0.5 bg-slate-300 transition-all duration-300', menuOpen ? 'rotate-45 translate-y-2' : '']"></span>
        <span :class="['block w-5 h-0.5 bg-slate-300 transition-all duration-300', menuOpen ? 'opacity-0' : '']"></span>
        <span :class="['block w-5 h-0.5 bg-slate-300 transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-show="menuOpen"
      class="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-300"
    >
      <nuxt-link to="/" @click="closeMenu" class="hover:text-primary transition py-1">About</nuxt-link>
      <nuxt-link to="/experience" @click="closeMenu" class="hover:text-primary transition py-1">Experience</nuxt-link>
      <nuxt-link to="/skills" @click="closeMenu" class="hover:text-primary transition py-1">Skills</nuxt-link>
      <nuxt-link to="/contact" @click="closeMenu" class="hover:text-primary transition py-1">Contact</nuxt-link>
      <a href="mailto:ahmed.roshdy.web@gmail.com" @click="closeMenu" class="inline-block bg-primary hover:bg-primary text-slate-950 font-semibold px-4 py-2 rounded-lg text-center transition">
        Hire Me
      </a>
    </div>
  </nav>
</template>
