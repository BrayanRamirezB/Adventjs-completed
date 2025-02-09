function organizeShoes(shoes) {
  const pairs = {} // Objeto para contar las botas izquierdas y derechas por tamaño
  const result = [] // Lista para almacenar los tamaños que tienen pares

  // Contar las botas por tipo y tamaño
  for (const shoe of shoes) {
    const { type, size } = shoe
    if (!pairs[size]) {
      pairs[size] = { I: 0, R: 0 }
    }
    pairs[size][type]++
  }

  // Determinar los pares disponibles
  for (const size in pairs) {
    const left = pairs[size].I
    const right = pairs[size].R
    const minPairs = Math.min(left, right)

    // Agregar el tamaño tantas veces como pares posibles
    for (let i = 0; i < minPairs; i++) {
      result.push(Number(size))
    }
  }

  return result
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))
// [38, 42]
