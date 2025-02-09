function moveTrain(board, mov) {
  // Encontrar la posición del tren '@'
  const rowIndex = board.findIndex((row) => row.includes('@'))
  if (rowIndex === -1) return 'crash' // Si no hay tren, se considera un choque

  const colIndex = board[rowIndex].indexOf('@')

  // Definir movimientos con verificaciones de límites
  const directions = {
    U: board[rowIndex - 1]?.[colIndex], // Hacia arriba
    D: board[rowIndex + 1]?.[colIndex], // Hacia abajo
    L: board[rowIndex]?.[colIndex - 1], // Izquierda
    R: board[rowIndex]?.[colIndex + 1] // Derecha
  }

  if (directions[mov] === '*') return 'eat'
  if (directions[mov] === 'o' || directions[mov] === undefined) return 'crash'

  return 'none'
}

const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
