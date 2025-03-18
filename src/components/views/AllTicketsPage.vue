<template>
  <section
    class="bg-white rounded-lg shadow-lg p-6 mb-2 w-full max-w-md md:max-w-[900px] max-h-[calc(100vh-12rem)] overflow-y-auto"
  >
    <div class="flex flex-col mb-2">
      <div class="ticket-header mb-4 border-b border-gray-300 pb-2">
        <div class="flex flex-row items-center">
          <div class="w-7 mr-4"></div>

          <div class="flex-1 flex flex-row justify-between font-extrabold text-gray-700">
            <div class="w-1/4">Ativo</div>
            <div class="w-1/4 text-center">Preço Médio</div>
            <div class="w-1/4 text-center">Quantidade</div>
            <div class="w-1/4 text-right">Valor Investido</div>
          </div>
        </div>
      </div>

      <div id="ticketList" class="flex flex-col space-y-2">
        <UnitTicket v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UnitTicket from './includes/UnitTicket.vue'
const tickets = ref([])

async function loadApiData() {
  try {
    // const url = 'http'
    // const response = await fetch(url)
    // const data = await response.json()
    // tickets.value = data

    tickets.value = [
      {
        ticket: 'AAPL',
        nameTicket: 'Apple Inc.',
        average_price: 150.75,
        number_of_tickets: 10,
        total_value_purchased: 1507.5,
      },
      {
        ticket: 'TSLA',
        nameTicket: 'Tesla Inc.',
        average_price: 680.2,
        number_of_tickets: 5,
        total_value_purchased: 3401.0,
      },
      {
        ticket: 'MSFT',
        nameTicket: 'Microsoft Corp.',
        average_price: 299.99,
        number_of_tickets: 8,
        total_value_purchased: 2399.92,
      },
    ]
  } catch (error) {
    console.error('Erro ao carregar dados:', error)
  }
}

onMounted(() => {
  loadApiData()
})
</script>
