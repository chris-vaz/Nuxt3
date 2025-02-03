<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-bold">Dynamic Page for ID: {{ route.params.id }}</h1>
        <p class="text-lg text-gray-700 mt-4">This is a dynamic page. The ID is captured from the URL.</p>
        <p class="text-green-700 mt-2">{{ message }}</p>
        <button @click="fetchData" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Fetch Data
        </button>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useHelloTest } from '~/composables/HelloTest'

const route = useRoute()
const { message, fetchData } = useHelloTest()
</script>