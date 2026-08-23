<script setup>
import logoUrl from '~/assets/images/logo.png'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ahmed Roshdy',
  jobTitle: 'Frontend Developer',
  email: 'mailto:ahmed.roshdy.web@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'Egypt'
  },
  sameAs: [
    'https://github.com/Ahmed-Roshdy-1',
    'https://www.linkedin.com/in/ahmed-roshdy-dev/'
  ],
  knowsAbout: ['Vue.js', 'Nuxt', 'React', 'JavaScript', 'TypeScript', 'Web performance']
}

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Ahmed Roshdy | Frontend Developer',
  meta: [
    { name: 'description', content: 'Portfolio of Ahmed Roshdy, a frontend developer specializing in Vue.js, Nuxt, React, and high-performance web experiences.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Ahmed Roshdy | Frontend Developer' },
    { property: 'og:description', content: 'Frontend developer specializing in Vue.js, Nuxt, React, and high-performance web experiences.' },
    { property: 'og:url', content: '/' },
    { property: 'og:image', content: logoUrl },
    { property: 'og:image:alt', content: 'Ahmed Roshdy logo' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Ahmed Roshdy | Frontend Developer' },
    { name: 'twitter:description', content: 'Frontend developer specializing in Vue.js, Nuxt, React, and high-performance web experiences.' },
    { name: 'twitter:image', content: logoUrl }
  ],
  link: [
    { rel: 'canonical', href: '/' },
    { rel: 'icon', type: 'image/png', href: logoUrl }
  ],
  script: [
    { type: 'application/ld+json', children: JSON.stringify(structuredData) }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950">
    <Navbar />
    <main>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <footer class="py-6 border-t border-slate-900 text-center text-slate-500 text-xs">
      &copy; {{ new Date().getFullYear() }} Ahmed Roshdy. All rights reserved.
    </footer>
  </div>
</template>
