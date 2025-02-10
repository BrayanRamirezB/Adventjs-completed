function treeHeight(tree) {
  // Si el árbol es null, su altura es 0
  if (tree === null) {
    return 0
  }

  // Calculamos la altura del subárbol izquierdo
  const leftHeight = treeHeight(tree.left)

  // Calculamos la altura del subárbol derecho
  const rightHeight = treeHeight(tree.right)

  // La altura del árbol es 1 más la altura máxima entre los subárboles
  return Math.max(leftHeight, rightHeight) + 1
}

// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Llamada a la función
console.log(treeHeight(tree)) // Devuelve: 3
