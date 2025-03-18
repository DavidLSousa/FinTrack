<template>
  <div class="fixed inset-0 flex items-center justify-center z-[1000]">
    <div @click="$emit('closePopup')" class="absolute inset-0 bg-black opacity-75"></div>

    <div class="relative bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md z-[1100]">
      <h3 class="text-xl font-semibold text-gray-800 mb-4 text-center">
        Vender Ações da <span class="text-blue-600 font-bold">NOME</span>
      </h3>

      <form id="saleForm" class="space-y-4">
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
            @click="submitSale"
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
defineProps({
  currentValue: Number,
  currentValuePurchased: Number,
})

function submitSale() {
  console.log('Venda realizada com sucesso!')
  // Achar API para editar DB
}
</script>
