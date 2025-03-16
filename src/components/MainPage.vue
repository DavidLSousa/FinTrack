<template>
  <nav class="w-1/6 bg-gray-200 p-4 fixed h-full flex flex-col">
    <header class="w-full max-w-4xl mx-auto flex justify-center items-center py-8 mb-16">
      <img src="../static/images/icon_preto.png" alt="icone" class="w-32 rounded-full shadow-lg" />
    </header>

    <ul class="flex flex-col justify-center">
      <li class="mb-4">
        <a
          data-js="link-pages"
          href="tickets/add"
          target="contentFrame"
          class="block p-2 bg-white rounded hover:bg-gray-300 font-semibold"
        >
          Adicionar Ativo
        </a>
      </li>
      <li class="mb-4">
        <a
          data-js="link-pages"
          href="tickets/all"
          target="contentFrame"
          class="block p-2 bg-white rounded hover:bg-gray-300 font-semibold"
        >
          Carteira
        </a>
      </li>
      <li class="mb-4">
        <a
          data-js="link-pages"
          href="dashboard"
          target="contentFrame"
          class="block p-2 bg-white rounded hover:bg-gray-300 font-semibold"
        >
          Dashboard
        </a>
      </li>
      <li class="mb-4">
        <a
          data-js="link-pages"
          href="news"
          target="contentFrame"
          class="block p-2 bg-white rounded hover:bg-gray-300 font-semibold"
        >
          Notícias
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({})
</script>
