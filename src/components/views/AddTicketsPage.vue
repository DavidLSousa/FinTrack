<template>
  <div class="w-full max-w-md md:max-w-[900px] max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
    <form class="bg-white rounded-lg shadow-lg p-6 mb-2" id="ticketForm" data-js="ticket-form">
      <div id="ticketFields" data-js="ticket-fields" class="flex flex-col mb-2">
        <div
          v-for="numTicket in counterTicket"
          :key="numTicket"
          class="ticket-group mb-4 border border-gray-300 p-4 rounded-md"
        >
          <formTicket :ticketCount="numTicket" />
        </div>
      </div>

      <button
        @click.prevent="submitTickets"
        type="submit"
        class="bg-gradient-to-b from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 text-white font-semibold py-2 px-4 rounded w-full"
      >
        Enviar Tickets
      </button>
    </form>
  </div>

  <button
    @click="addTicket"
    type="button"
    class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded w-full max-w-md mb-4 md:max-w-[900px] mt-4"
  >
    + 1 Ticket
  </button>
</template>

<script setup>
import { ref } from 'vue'
import formTicket from './includes/formTicket.vue'

const counterTicket = ref(1)

function addTicket() {
  counterTicket.value++
}

function submitTickets() {
  console.log('Tickets adicionados:', counterTicket.value)
  // Mandar para API
}
</script>
