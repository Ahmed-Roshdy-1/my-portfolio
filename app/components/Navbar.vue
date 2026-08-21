<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="text-xl font-bold text-teal-400">Ahmed Roshdy<span class="text-white">.dev</span></a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
        <a href="#about" class="hover:text-teal-400 transition">About</a>
        <a href="#experience" class="hover:text-teal-400 transition">Experience</a>
        <a href="#skills" class="hover:text-teal-400 transition">Skills</a>
        <a href="#contact" class="hover:text-teal-400 transition">Contact</a>
      </div>

      <!-- Desktop CTA -->
      <a href="mailto:ahmed.roshdy.web@gmail.com" class="hidden md:inline-block bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition">
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
      <a href="#about" @click="closeMenu" class="hover:text-teal-400 transition py-1">About</a>
      <a href="#experience" @click="closeMenu" class="hover:text-teal-400 transition py-1">Experience</a>
      <a href="#skills" @click="closeMenu" class="hover:text-teal-400 transition py-1">Skills</a>
      <a href="#contact" @click="closeMenu" class="hover:text-teal-400 transition py-1">Contact</a>
      <a href="mailto:ahmed.roshdy.web@gmail.com" @click="closeMenu" class="inline-block bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-center transition">
        Hire Me
      </a>
    </div>
  </nav>
</template>
