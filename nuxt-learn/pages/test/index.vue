<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-bold">Welcome to the Test Pages</h1>
        <p class="text-lg text-gray-700 mt-4">Click on an ID to view dynamic content.</p>
        <ul>
            <li>
                <NuxtLink to="/test/1">Go to Page with ID 1</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/test/2">Go to Page with ID 2</NuxtLink>
            </li>
        </ul>
    </div>
</template>