<script setup>
import { experiences } from '@/data';
</script>

<template>
  <section id="experience" class="py-16 sm:py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">Work Experience</h2>
    <div class="space-y-10 sm:space-y-12">
      <div v-for="(job, index) in experiences" :key="index" class="relative pl-6 sm:pl-8 border-l-2 border-slate-800 hover:border-teal-400 transition">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-400"></div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
          <h3 class="text-base sm:text-xl font-semibold text-white">{{ job.role }} <span class="text-teal-400">@ <a :href="job.companyUrl" target="_blank">{{ job.company }}</a></span></h3>
          <span class="text-xs sm:text-sm font-mono text-slate-400 shrink-0">{{ job.period }} | {{ job.location }}</span>
        </div>
        <ul class="list-disc list-inside space-y-1.5 sm:space-y-2 text-slate-400 text-sm sm:text-base mt-3 sm:mt-4">
          <li v-for="(point, i) in job.highlights" :key="i">{{ point }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
