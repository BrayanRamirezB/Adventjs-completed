function isRobotBack(moves) {
  let x = 0,
    y = 0
  let history = new Set()
  let i = 0

  while (i < moves.length) {
    let move = moves[i]
    let count = 1

    if (move === '*' || move === '!' || move === '?') {
      let modifier = move
      move = moves[++i]

      if (modifier === '*') {
        count = 2
      } else if (modifier === '!') {
        // Invert the move
        if (move === 'L') move = 'R'
        else if (move === 'R') move = 'L'
        else if (move === 'U') move = 'D'
        else if (move === 'D') move = 'U'
      } else if (modifier === '?') {
        if (history.has(move)) {
          i++
          continue
        }
      }
    }

    for (let j = 0; j < count; j++) {
      if (move === 'L') x--
      else if (move === 'R') x++
      else if (move === 'U') y++
      else if (move === 'D') y--

      history.add(move)
    }

    i++
  }

  if (x === 0 && y === 0) {
    return true
  } else {
    return [x, y]
  }
}

console.log(isRobotBack('R')) // [1, 0]
console.log(isRobotBack('RL')) // true
console.log(isRobotBack('RLUD')) // true
console.log(isRobotBack('*RU')) // [2, 1]
console.log(isRobotBack('R*U')) // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R')) // [1, 0]
console.log(isRobotBack('U?D')) // true
console.log(isRobotBack('R!L')) // [2,0]
console.log(isRobotBack('U!D')) // [0,2]
console.log(isRobotBack('R?L')) // true
console.log(isRobotBack('U?U')) // [0,1]
console.log(isRobotBack('*U?U')) // [0,2]
console.log(isRobotBack('U?D?U')) // true

// Ejemplos paso a paso:
console.log(isRobotBack('R!U?U')) // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log(isRobotBack('UU!U?D')) // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
