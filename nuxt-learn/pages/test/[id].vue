<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-3xl font-bold">Dynamic Page for ID: {{ route.params.id }}</h1>
      <p class="text-lg text-gray-700 mt-4">This is a dynamic page. The ID is captured from the URL.</p>
  
      <!-- Search Filter -->
      <div class="mt-4">
        <input v-model="searchQuery" placeholder="Search products..."
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
  
      <!-- Product List -->
      <Suspense>
        <template #default>
          <div v-if="error" class="text-red-500 mt-4">
            Error: {{ error.message }}
          </div>
  
          <div v-else-if="isFetching" class="text-blue-500 mt-4">
            Fetching data...
          </div>
  
          <div v-else class="mt-4">
            <h2 class="text-xl font-bold mb-2">Product List</h2>
            <div v-for="product in paginatedProducts" :key="product.id" class="border p-4 mb-2 rounded-md">
              <p class="text-lg font-semibold">{{ product.title }}</p>
              <p class="text-gray-600">{{ product.description }}</p>
              <p class="text-green-500">Price: ${{ product.price }}</p>
            </div>
          </div>
        </template>
  
        <template #fallback>
          <p class="text-blue-500 mt-4">Loading Products...</p>
        </template>
      </Suspense>
  
      <!-- Pagination Controls -->
      <div class="flex justify-between mt-4">
        <button :disabled="currentPage === 1" @click="currentPage--"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400">
          Previous
        </button>
        <p class="text-lg">Page {{ currentPage }} of {{ totalPages }}</p>
        <button :disabled="currentPage === totalPages" @click="currentPage++"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400">
          Next
        </button>
      </div>
  
      <button @click="refetch" class="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Refetch Data
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { ref, computed, watchEffect } from 'vue';
  
  // Use Lazy Fetch
  const route = useRoute();
  const searchQuery = ref('');
  const currentPage = ref(1);
  const itemsPerPage = 5;
  
  const { data, error, pending: isFetching, refresh: refetch } = await useLazyFetch(() => {
    return `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage.value - 1) * itemsPerPage}`;
  });
  
  // Extract products and apply filtering
  const filteredProducts = computed(() => {
    return data.value?.products?.filter(product =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    ) || [];
  });
  
  // Pagination Logic
  const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));
  
  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredProducts.value.slice(start, start + itemsPerPage);
  });
  
  // Fetch new data when the page changes
  watchEffect(() => {
    refetch();
  });
  </script>
  