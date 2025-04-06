<!-- <template>
  <div class="w-full max-w-md md:max-w-[900px] max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
    <form class="bg-white rounded-lg shadow-lg p-6 mb-2" id="ticketForm" data-js="ticket-form">
      <div id="ticketFields" data-js="ticket-fields" class="flex flex-col mb-2">
        <div
          v-for="(ticket, index) in tickets"
          :key="index"
          class="ticket-group mb-4 border border-gray-300 p-4 rounded-md"
        >
          <FormTicket :ticketId="index" :ticketNumber="index + 1" @remove-ticket="removeTicket" />
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
import FormTicket from './includes/FormTicket.vue'

const tickets = ref([{}])

function addTicket() {
  tickets.value.push({})
}

function removeTicket(index) {
  if (tickets.value.length === 1) return

  tickets.value.splice(index, 1)
}

// Submissão dos tickets
async function submitTickets() {

  console.log(tickets.value)

  try {
    const response = await fetch('http://localhost:8080/ticker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tickets.value),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
  } catch (error) {
    console.error('Erro ao enviar tickets:', error)
  }
}

</script> -->

<template>
  <div class="w-full max-w-md md:max-w-[900px] max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
    <form class="bg-white rounded-lg shadow-lg p-6 mb-2" id="ticketForm" data-js="ticket-form">
      <div id="ticketFields" data-js="ticket-fields" class="flex flex-col mb-2">
        <div
          v-for="(ticket, index) in tickets"
          :key="index"
          class="ticket-group mb-4 border border-gray-300 p-4 rounded-md"
        >
          <FormTicket
            :ticketId="index"
            :ticketNumber="index + 1"
            @remove-ticket="removeTicket"
            @update-ticket="updateTicket"
          />
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
import FormTicket from './includes/FormTicket.vue'

const tickets = ref([{}])

function addTicket() {
  tickets.value.push({})
}

function removeTicket(index) {
  if (tickets.value.length === 1) return
  tickets.value.splice(index, 1)
}

// Atualiza o ticket específico com os dados emitidos do filho
function updateTicket({ index, data }) {
  tickets.value[index] = data
}

async function submitTickets() {
  const data = JSON.stringify(tickets.value)
  console.log(data)

  try {
    const response = await fetch('http://localhost:8080/ticker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }
  } catch (error) {
    console.error('Erro ao enviar tickets:', error)
  }

  window.location.reload()

}
</script>
