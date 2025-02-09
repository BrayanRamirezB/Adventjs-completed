function organizeInventory(inventory) {
  // Si el array está vacío, devolvemos un objeto vacío
  if (inventory.length === 0) return {}

  return inventory.reduce((acc, item) => {
    const { name, quantity, category } = item

    // Si la categoría no existe en el acumulador, la inicializamos
    if (!acc[category]) {
      acc[category] = {}
    }

    // Si el juguete no existe en la categoría, lo inicializamos con su cantidad
    // Si ya existe, sumamos la cantidad
    acc[category][name] = (acc[category][name] || 0) + quantity

    return acc
  }, {})
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory))
