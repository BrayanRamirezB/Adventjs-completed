function calculatePrice(ornaments) {
  const prices = { '*': 1, o: 5, '^': 10, '#': 50, '@': 100 }

  if (!ornaments.length || !prices[ornaments[0]]) return undefined

  let totalPrice = prices[ornaments[0]]

  for (let i = 1; i < ornaments.length; i++) {
    const prevValue = prices[ornaments[i - 1]]
    const currValue = prices[ornaments[i]]

    if (currValue === undefined) return undefined

    totalPrice += prevValue >= currValue ? currValue : currValue - 2 * prevValue
  }

  return totalPrice
}

console.log(calculatePrice('***')) // 3   (1 + 1 + 1)
console.log(calculatePrice('*o')) // 4   (5 - 1)
console.log(calculatePrice('o*')) // 6   (5 + 1)
console.log(calculatePrice('*o*')) // 5  (-1 + 5 + 1)
console.log(calculatePrice('**o*')) // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice('o***')) // 8   (5 + 3)
console.log(calculatePrice('*o@')) // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#')) // 49  (-1 + 50)
console.log(calculatePrice('@@@')) // 300 (100 + 100 + 100)
console.log(calculatePrice('#@')) // 50  (-50 + 100)
console.log(calculatePrice('#@Z')) // undefined (Z es desconocido)
