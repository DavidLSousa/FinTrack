<template>
  <section
    class="bg-white rounded-lg shadow-lg p-6 mb-2 w-full max-w-md md:max-w-[900px] max-h-[calc(100vh-12rem)] overflow-y-auto"
  >
    <div class="flex flex-col mb-2">
      <div class="ticket-header mb-4 border-b border-gray-300 pb-2">
        <div class="flex flex-row items-center">
          <div class="w-7 mr-4"></div>
          <!-- Espaço para o botão "..." -->
          <div class="flex-1 flex flex-row justify-between font-extrabold text-gray-700">
            <div class="w-1/4">Ativo</div>
            <div class="w-1/4 text-center">Preço Médio</div>
            <div class="w-1/4 text-center">Quantidade</div>
            <div class="w-1/4 text-right">Valor Investido</div>
          </div>
        </div>
      </div>

      <div id="ticketList" class="flex flex-col space-y-2">
        <!-- View para cada ticket que vem do DB -->

        <!-- Mock abaixo: -->
        <div class="ticket-item flex flex-row items-center bg-gray-100 p-2 rounded">
          <div class="relative mr-4 flex items-center h-full">
            <button class="text-gray-500 hover:text-gray-700" data-js="sale-tickets">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
            </button>
          </div>

          <!-- tickets -->
          <div class="flex-1 flex flex-row justify-between items-center">
            <div class="w-1/4 flex flex-col">
              <span class="text-sm text-gray-600">
                <span class="font-semibold" data-js="ticker">TAEE11 </span> -
                <span data-js="ticket-name">Taesa</span>
              </span>
            </div>
            <div class="w-1/4 text-center">
              <span class="font-semibold">R$ 5 </span>
            </div>
            <div class="w-1/4 text-center">
              <span data-js="number_of_tickets">3</span>
            </div>
            <div class="w-1/4 text-right">
              <span data-js="value_purchased" class="font-semibold">R$ 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
