function drawRace(indices, length) {
  let pista = ''

  indices.forEach((index, i) => {
    const spaces = ' '.repeat(indices.length - i - 1)
    const lane =
      index === 0
        ? '~'.repeat(length) + ` /${i + 1}`
        : index > 0
        ? '~'.repeat(index) +
          'r' +
          '~'.repeat(length - index - 1) +
          ` /${i + 1}`
        : '~'.repeat(length + index) +
          'r' +
          '~'.repeat(-1 - index) +
          ` /${i + 1}`

    pista += spaces + lane
    if (i < indices.length - 1) {
      pista += '\n'
    }
  })

  return pista
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
