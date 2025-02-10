function isTreesSynchronized(tree1, tree2) {
  // Función auxiliar para verificar si dos árboles son espejos
  function areMirrors(node1, node2) {
    // Si ambos nodos son null o undefined, son espejos
    if (node1 == null && node2 == null) return true

    // Si uno de los nodos es null/undefined y el otro no, no son espejos
    if (node1 == null || node2 == null) return false

    // Si los valores de los nodos no son iguales, no son espejos
    if (node1.value !== node2.value) return false

    // Verificar recursivamente los subárboles
    return (
      areMirrors(node1.left, node2.right) && areMirrors(node1.right, node2.left)
    )
  }

  // Verificar si los árboles son espejos
  const synchronized = areMirrors(tree1, tree2)

  // Devolver el resultado y el valor de la raíz del primer árbol
  return [synchronized, tree1 ? tree1.value : '']
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

/*
    tree1          tree2
     🎄              🎄
    / \             / \
  ⭐   🎅         🎅   ⭐
  */

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' }) // [false, '🎅']
