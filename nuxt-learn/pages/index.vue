<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold text-blue-600">Welcome to Your Nuxt 3 App!</h1>
    <p class="text-gray-700 mt-4">
      Tailwind CSS is working perfectly. 🚀
    </p>
    <NuxtLink to="/test">
      <button class="px-4 py-2 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
        Click Me
      </button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'

const nuxt = useNuxtApp();
console.log("Nuxt app instance:", nuxt);
</script>