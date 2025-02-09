function drawTable(data) {
  if (!Array.isArray(data) || data.length === 0) return ''

  // Obtener todas las claves únicas presentes en los objetos
  const keys = [...new Set(data.flatMap(Object.keys))]

  // Convertir la primera letra de cada key en mayúscula
  const formattedKeys = keys.map(
    (key) => key.charAt(0).toUpperCase() + key.slice(1)
  )

  // Calcular el ancho máximo de cada columna
  const columnWidths = keys.map((key) =>
    Math.max(
      key.length,
      ...data.map((row) =>
        row[key] !== undefined ? String(row[key]).length : 0
      )
    )
  )

  // Función para formatear una celda con espacio uniforme
  const formatCell = (text, width) => text.toString().padEnd(width, ' ')

  // Crear la tabla
  const tableLines = []

  // Crear separador
  const separator =
    '+-' + columnWidths.map((width) => '-'.repeat(width)).join('-+-') + '-+'
  tableLines.push(separator)

  // Crear fila de encabezados
  const headerRow =
    '| ' +
    formattedKeys
      .map((key, i) => formatCell(key, columnWidths[i]))
      .join(' | ') +
    ' |'
  tableLines.push(headerRow)

  // Añadir separador después de los encabezados
  tableLines.push(separator)

  // Crear filas de datos
  data.forEach((row) => {
    const dataRow =
      '| ' +
      keys
        .map((key, i) =>
          formatCell(row[key] !== undefined ? row[key] : '', columnWidths[i])
        )
        .join(' | ') +
      ' |'
    tableLines.push(dataRow)
  })

  // Añadir separador final
  tableLines.push(separator)

  // Unir todas las líneas de la tabla
  return tableLines.join('\n')
}

console.log(
  drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ])
)
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(
  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
  ])
)
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
