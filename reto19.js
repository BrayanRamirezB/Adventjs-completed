const boxRepresentations = {
  1: [' _ ', '|_|'],
  2: [' ___ ', '|___|'],
  5: [' _____ ', '|     |', '|_____|'],
  10: [' _________ ', '|         |', '|_________|']
}

function distributeWeight(weight) {
  if (weight <= 0) return

  if (boxRepresentations[weight] !== undefined) {
    return boxRepresentations[weight].join('\n')
  }

  let goal = weight
  let current = []

  while (goal > 0) {
    let box = goal >= 10 ? 10 : goal >= 5 ? 5 : goal >= 2 ? 2 : 1
    goal -= box
    current.push(box)
  }

  current.reverse()

  return current
    .map((box, i) => {
      let boxStr = boxRepresentations[box].join('\n')

      if (i === 0) {
        return boxStr
      }

      let prevBox = current[i - 1]

      let offset =
        boxRepresentations[box].at(-1).length -
        boxRepresentations[prevBox].at(-1).length -
        (box === prevBox ? 0 : 1)

      return '_'.repeat(offset) + '\n' + boxStr.slice(boxStr.indexOf('\n') + 1)
    })
    .join('')
}

console.log(distributeWeight(1))
// Devuelve:
//  _
// |_|
console.log()

console.log(distributeWeight(2))
// Devuelve:
//  ___
// |___|
console.log()

console.log(distributeWeight(3))
// Devuelve:
//  _
// |_|_
// |___|
console.log()

console.log(distributeWeight(4))
// Devuelve:
//  ___
// |___|
// |___|
console.log()

console.log(distributeWeight(5))
// Devuelve:
//  _____
// |     |
// |_____|
console.log()

console.log(distributeWeight(6))
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
