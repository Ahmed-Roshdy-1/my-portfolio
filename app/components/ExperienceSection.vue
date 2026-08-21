<script setup>
const experiences = [
  {
    role: 'Web Developer',
    company: 'Vartur',
    location: 'Istanbul, Türkiye',
    period: '10/2024 – Present',
    companyUrl: 'https://vartur.com',
    highlights: [
      'Built reusable, testable UI components and pages from Figma with pixel-accurate implementation.',
      'Implemented responsive layouts ensuring cross-browser compatibility across major devices.',
      'Improved page load speed by 35% using lazy loading, code splitting, and asset optimization.',
      'Collaborated with cross-functional teams to ship features on schedule.'
    ]
  },
  {
    role: 'Web Developer',
    company: 'MARSES Robotics',
    location: 'Cairo, Egypt',
    period: '08/2022 – 10/2024',
    companyUrl: 'https://marsesrobotics.com',
    highlights: [
      'Developed web applications to control and monitor robotics systems with low-latency UI.',
      'Led front-end stack improvements using Vue 3 and Tailwind CSS to increase modularity and speed up development.',
      'Implemented scalable component architecture to enhance developer experience.'
    ]
  },
  {
    role: 'Frontend Intern',
    company: 'Algoriza',
    location: 'Cairo, Egypt',
    period: '03/2022 – 06/2022',
    companyUrl: 'https://www.linkedin.com/company/algoriza',
    highlights: [
      'Contributed to production features using Vue.js, JavaScript, HTML, and CSS.',
      'Improved code quality standards and followed development best practices.'
    ]
  },
  {
    role: 'Computer Science Student',
    company: 'Helwan University',
    location: 'Cairo, Egypt',
    period: '09/2018 – 06/2022',
    companyUrl: 'https://admission.hnu.edu.eg',
    highlights: [
      'Graduated with a degree in Computer Science from Helwan University.',
      'I developed a strong foundation in software development, algorithms, and problem-solving.',
      'Through academic projects and collaborative work, I strengthened my teamwork skills and built a solid understanding of coding best practices.'
    ]
  }
]
</script>

<template>
  <section id="experience" class="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
    <h2 class="text-3xl font-bold text-white mb-12">Work Experience</h2>
    <div class="space-y-12">
      <div v-for="(job, index) in experiences" :key="index" class="relative pl-8 border-l-2 border-slate-800 hover:border-teal-400 transition">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-400"></div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h3 class="text-xl font-semibold text-white">{{ job.role }} <span class="text-teal-400">@ <a :href="job.companyUrl" target="_blank">{{ job.company }}</a></span></h3>
          <span class="text-sm font-mono text-slate-400">{{ job.period }} | {{ job.location }}</span>
        </div>
        <ul class="list-disc list-inside space-y-2 text-slate-400 mt-4">
          <li v-for="(point, i) in job.highlights" :key="i">{{ point }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
