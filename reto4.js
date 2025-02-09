function createXmasTree(height, char) {
  let tree = ''
  const width = height * 2 - 1 // La base del árbol tendrá esta anchura.

  // Generar las capas del árbol
  for (let i = 0; i < height; i++) {
    const levelCharCount = i * 2 + 1 // Número de caracteres en la fila actual
    const padding = (width - levelCharCount) / 2 // Espacios en blanco (_)
    tree +=
      '_'.repeat(padding) +
      char.repeat(levelCharCount) +
      '_'.repeat(padding) +
      '\n'
  }

  // Agregar el tronco
  const trunk = '_'.repeat((width - 1) / 2) + '#' + '_'.repeat((width - 1) / 2)
  tree += trunk + '\n' + trunk

  return tree
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
  */
