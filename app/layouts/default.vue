<template>
  <div class="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <footer class="py-6 border-t border-slate-900 text-center text-slate-500 text-xs">
      &copy; {{ new Date().getFullYear() }} Ahmed Roshdy. All rights reserved.
    </footer>
  </div>
</template>
