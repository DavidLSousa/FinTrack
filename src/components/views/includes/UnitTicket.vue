<template>
  <div class="ticket-item flex flex-row items-center bg-gray-100 p-2 rounded">
    <div class="relative mr-4 flex items-center h-full">
      <button @click="openPopup" class="text-gray-500 hover:text-gray-700">
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
          <span class="font-semibold" data-js="ticker">{{ ticket.ticker }}</span> -
          <span data-js="ticket-name">{{ ticket.nameTicker }}</span>
        </span>
      </div>
      <div class="w-1/4 text-center">
        <span class="font-semibold">R$ {{ ticket.averagePrice }}</span>
      </div>
      <div class="w-1/4 text-center">
        <span data-js="number_of_tickets">{{ ticket.numberOfTickers }}</span>
      </div>
      <div class="w-1/4 text-right">
        <span data-js="value_purchased" class="font-semibold"
          >R$ {{ ticket.totalValuePurchased }}</span
        >
      </div>
    </div>
  </div>

  <PopupSellTicket
    v-show="showPopup"
    @close-popup="showPopup = false"
    @closePopup="closePopup"
    :nameTicket="ticket.ticker"
    :currentValue="ticket.numberOfTickers"
    :currentValuePurchased="ticket.totalValuePurchased"
  />
</template>

<script setup>
import { ref } from 'vue'
import PopupSellTicket from './PopupSellTicket.vue'

defineProps({
  ticket: Object,
})

const emit = defineEmits(['reload-tickets'])

const showPopup = ref(false)

function openPopup() {
  showPopup.value = true
}
function closePopup() {
  showPopup.value = false

  emit('reload-tickets')
}
</script>
