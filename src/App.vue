<template>
  <main>
    <nav class="w-1/6 bg-gray-200 p-4 fixed h-full flex flex-col">
      <header class="w-full max-w-4xl mx-auto flex justify-center items-center py-8 mb-16">
        <img
          src="./components/icons/logo_beta.png"
          alt="icone"
          class="w-32 rounded-full shadow-lg"
        />
      </header>

      <ul class="flex flex-col justify-center">
        <li class="mb-4">
          <RouterLink
            data-js="link-pages"
            to="/addTicket"
            class="block p-2 bg-white rounded hover:bg-gray-300 font-semibold"
          >
            Adicionar Ativo
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink
            data-js="link-pages"
            to="/allTicket"
            class="block p-2 bg-white rounded hover:bg-gray-300 font-semibold"
          >
            Carteira
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink
            data-js="link-pages"
            to="/dashboard"
            class="block p-2 bg-white rounded hover:bg-gray-300 font-semibold"
          >
            Dashboard
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink
            data-js="link-pages"
            to="/news"
            class="block p-2 bg-white rounded hover:bg-gray-300 font-semibold"
          >
            Notícias
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div
      class="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 ml-[16.66%] w-[83.33%]"
    >
      <router-view />
    </div>
  </main>
</template>

<script setup></script>
