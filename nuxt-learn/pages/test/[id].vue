<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-bold">Dynamic Page for ID: {{ route.params.id }}</h1>
        <p class="text-lg text-gray-700 mt-4">This is a dynamic page. The ID is captured from the URL.</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>