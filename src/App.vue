<script setup>
import MainPage from './components/MainPage.vue'

import AddTicketsPage from './components/AddTicketsPage.vue'
</script>

<template>
  <main>
    <MainPage />
  </main>

  <div class="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <AddTicketsPage />
  </div>
</template>
