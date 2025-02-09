function prepareGifts(gifts) {
  const regalosUnicosOrdenados = [...new Set(gifts)].sort((a, b) => a - b)
  return regalosUnicosOrdenados
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]
