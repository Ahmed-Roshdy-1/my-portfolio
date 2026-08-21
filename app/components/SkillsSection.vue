<script setup>
const skillCategories = [
  {
    name: 'Frontend Frameworks & Libraries',
    skills: ['Vue 3', 'Vue 2', 'Nuxt 3 / 4', 'React', 'Pinia', 'Vuex', 'Vue Router']
  },
  {
    name: 'Languages & Styling',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'SCSS/SASS', 'HTML5', 'CSS3', 'Vuetify']
  },
  {
    name: 'Core Practices & Optimization',
    skills: ['Performance Optimization', 'Core Web Vitals', 'Responsive Design', 'SEO', 'Accessibility (a11y)', 'REST APIs', 'Git / GitHub', 'Agile']
  }
]

const certifications = [
  {
    name: 'Fundamentals of NuxtJS',
    url: 'https://www.coursera.org/account/accomplishments/verify/JO0G0QE9S9KF'
  },
  {
    name: 'JavaScript Algorithms And Data Structures',
    url: 'https://www.freecodecamp.org/certification/fcc2864ed0c-5edf-4fb0-8cc6-284339ced229/javascript-algorithms-and-data-structures'
  },
  {
    name: 'JavaScript Programming Essentials',
    url: 'https://www.coursera.org/account/accomplishments/verify/S6CDDT34K7Y3'
  }
]
</script>

<template>
  <section id="skills" class="py-16 sm:py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
    <h2 class="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">Technical Skills & Expertise</h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      <div v-for="(category, index) in skillCategories" :key="index" class="bg-slate-800/50 p-5 sm:p-6 rounded-xl border border-slate-700/50">
        <h3 class="text-base sm:text-lg font-semibold text-teal-400 mb-3 sm:mb-4">{{ category.name }}</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="(skill, sIndex) in category.skills" :key="sIndex" class="bg-slate-900 text-slate-300 text-xs px-3 py-1.5 rounded-md border border-slate-700">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>

    <!-- Education & Certifications -->
    <div class="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-6 sm:gap-8">
      <div class="bg-slate-800/30 p-5 sm:p-6 rounded-xl border border-slate-800">
        <h3 class="text-lg sm:text-xl font-semibold text-white mb-2">Education</h3>
        <p class="text-teal-400 font-medium">B.S. in Computer Science</p>
        <p class="text-slate-400 text-sm">Helwan University (2018 – 2022) | Cairo, Egypt</p>
      </div>
      <div class="bg-slate-800/30 p-6 rounded-xl border border-slate-800">
        <h3 class="text-lg sm:text-xl font-semibold text-white mb-2">Certifications</h3>
        <ul class="list-disc list-inside text-slate-400 text-sm space-y-1">
          <li v-for="(cert, cIndex) in certifications" :key="cIndex" class="hover:text-teal-400 transition"><a :href="cert.url" target="_blank">{{ cert.name }}</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>
