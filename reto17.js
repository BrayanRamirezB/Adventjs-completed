function detectBombs(grid) {
  const rows = grid.length
  if (rows === 0) return []
  const cols = grid[0].length
  const result = new Array(rows).fill().map(() => new Array(cols).fill(0))

  // Definir las 8 direcciones posibles para las celdas adyacentes
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let count = 0
      for (const [di, dj] of directions) {
        const ni = i + di
        const nj = j + dj
        if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
          if (grid[ni][nj]) {
            count++
          }
        }
      }
      result[i][j] = count
    }
  }

  return result
}

// Ejemplos de prueba
console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
)

console.log(
  detectBombs([
    [true, false],
    [false, false]
  ])
)

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true]
  ])
)
