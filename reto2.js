function createFrame(names) {
  // Encontrar la longitud del nombre más largo
  const maxLength = Math.max(...names.map((name) => name.length))

  // Calcular la longitud total del marco (nombre más largo + 2 márgenes)
  const frameWidth = maxLength + 2

  // Crear la parte superior e inferior del marco
  const border = '*'.repeat(frameWidth + 2)

  // Crear el contenido del marco
  const framedNames = names.map((name) => `* ${name.padEnd(maxLength, ' ')} *`)

  // Combinar todo para generar el marco completo
  return [border, ...framedNames, border].join('\n')
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))
