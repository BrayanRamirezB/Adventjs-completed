function generateGiftSets(gifts) {
  const result = []

  // Función auxiliar para generar combinaciones
  function backtrack(start, path) {
    if (path.length > 0) {
      result.push([...path]) // Agrega la combinación actual al resultado
    }

    for (let i = start; i < gifts.length; i++) {
      path.push(gifts[i]) // Agrega el elemento actual al camino
      backtrack(i + 1, path) // Llama recursivamente para el siguiente elemento
      path.pop() // Retrocede (backtrack)
    }
  }

  backtrack(0, [])

  // Ordenar el resultado por el tamaño de los arreglos
  result.sort((a, b) => a.length - b.length)

  return result
}

generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
