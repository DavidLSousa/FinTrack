<template>
  <div class="fixed inset-0 flex items-center justify-center z-[1000]">
    <div @click="$emit('closePopup')" class="absolute inset-0 bg-black opacity-75"></div>

    <div class="relative bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md z-[1100]">
      <h3 class="text-xl font-semibold text-gray-800 mb-4 text-center">
        Vender Ações da
        <span class="text-blue-600 font-bold">
          {{ nameTicket }}
        </span>
      </h3>

      <form id="saleForm" class="space-y-4" @submit.prevent="submitSale">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Número de ações vendidas
          </label>
          <input
            type="number"
            name="soldQuantity"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Digite a quantidade"
            min="1"
            :max="currentValue"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"> Valor total da venda </label>
          <input
            type="number"
            name="totalSaleValue"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Digite o valor"
            min="0.01"
            step="0.01"
            :max="currentValuePurchased"
            required
          />
        </div>

        <div class="flex justify-between space-x-3">
          <button
            @click="$emit('closePopup')"
            type="button"
            class="w-1/2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="w-1/2 px-4 py-2 text-white rounded-lg bg-blue-500 font-medium hover:bg-blue-600 transition"
          >
            Vender
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  nameTicket: String,
  currentValue: Number,
  currentValuePurchased: Number,
})

const emit = defineEmits(['closePopup'])

async function submitSale() {

  const data = JSON.stringify({
    ticker: props.nameTicket,
    numberOfTicker: Number(document.querySelector('input[name="soldQuantity"]').value),
    totalValuePurchased: Number(document.querySelector('input[name="totalSaleValue"]').value),
  })

  try {
    await fetch('http://localhost:8080/ticker', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })

    console.log('Venda realizada com sucesso!')

  } catch (error) {
    console.error('Erro ao realizar a venda:', error.message)
  }

  document.getElementById('saleForm').reset()
  emit('closePopup')

}
</script>
