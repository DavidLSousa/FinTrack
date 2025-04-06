<template>
  <div>
    <div class="flex justify-between">
      <h3 class="font-extrabold text-gray-700">Ticket {{ ticketNumber }}</h3>
      <button
        type="button"
        @click="removeThisTicket"
        class="removeTicket bg-inherit text-red-500 font-semibold py-1 px-3 rounded"
      >
        Remover
      </button>
    </div>
    <div class="flex flex-col md:flex-row md:space-x-4">
      <div class="mt-2 w-full">
        <label class="block text-sm font-medium text-gray-700">Nome do Ticket</label>
        <input
          type="text"
          name="ticketName"
          required
          v-model="ticketData.ticker"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Ex: TAEE11"
        />
      </div>
      <div class="mt-2 w-full">
        <label class="block text-sm font-medium text-gray-700">Quantidade</label>
        <input
          type="number"
          name="quantity"
          required
          v-model="ticketData.numberOfTicker"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Ex: 2"
        />
      </div>
      <div class="mt-2 w-full">
        <label class="block text-sm font-medium text-gray-700">Valor Pago</label>
        <input
          type="number"
          name="value"
          required
          v-model="ticketData.totalValuePurchased"
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Ex: R$ 100,00"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  ticketId: Number,
  ticketNumber: Number,
})

const emit = defineEmits(['remove-ticket', 'update-ticket'])

const ticketData = ref({
  ticker: '',
  numberOfTicker: 0,
  totalValuePurchased: 0,
})

// Emite para o pai sempre que qualquer campo for alterado
watch(ticketData, (newData) => {
  emit('update-ticket', { index: props.ticketId, data: newData })
}, { deep: true })

function removeThisTicket() {
  emit('remove-ticket', props.ticketId)
}
</script>
