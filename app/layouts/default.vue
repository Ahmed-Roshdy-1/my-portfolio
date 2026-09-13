<template>
  <div class="min-h-screen mx-auto flex flex-col justify-between text-slate-100 font-sans antialiased selection:bg-primary selection:text-slate-950">
    <Navbar />
    <main class="flex-1 max-w-[1400px] mx-auto">
      <slot />
    </main>
    <footer class="py-6 border-t border-slate-900 text-center text-slate-500 text-xs">
      &copy; {{ new Date().getFullYear() }} Ahmed Roshdy. All rights reserved.
    </footer>
  </div>
</template>
