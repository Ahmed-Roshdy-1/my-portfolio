<script setup>
import { skillCategories, certifications } from '@/data';
</script>

<template>
  <section id="skills" class="my-16 sm:py-20 px-6 border-t border-slate-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-color-text mb-8 sm:mb-12">Technical Skills & Expertise</h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      <div v-for="(category, index) in skillCategories" :key="index" class="bg-slate-800/30 p-5 sm:p-6 rounded-xl border border-slate-700/50">
        <h3 class="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">{{ category.name }}</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="(skill, sIndex) in category.skills" :key="sIndex" class="bg-primary/10 hover:bg-primary-dark transition transition-duration-300 select-none  hover:text-slate-950 text-slate-300 text-xs px-3 py-1.5 rounded-md border border-slate-700">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>

    <!-- Education & Certifications -->
    <div class="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-6 sm:gap-8">
      <div class="bg-slate-800/30 p-5 sm:p-6 rounded-xl border border-slate-800">
        <h3 class="text-lg sm:text-xl font-semibold text-color-text mb-2">Education</h3>
        <p class="text-primary font-medium">B.S. in Computer Science</p>
        <p class="text-text-sub text-sm">Helwan University (2018 – 2022) | Cairo, Egypt</p>
      </div>
      <div class="bg-slate-800/30 p-6 rounded-xl border border-slate-800">
        <h3 class="text-lg sm:text-xl font-semibold text-color-text mb-2">Certifications</h3>
        <ul class="list-disc list-inside text-text-sub text-sm space-y-1">
          <li v-for="(cert, cIndex) in certifications" :key="cIndex" class="hover:text-primary transition"><a :href="cert.url" target="_blank">{{ cert.name }}</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>
