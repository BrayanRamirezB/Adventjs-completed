function execute(code) {
  let pointer = 0
  let stack = 0
  let cicleIndex = 0

  while (pointer < code.length) {
    const char = code[pointer]

    switch (char) {
      case '>':
        pointer++
        break
      case '+':
        stack++
        pointer++
        break
      case '-':
        stack--
        pointer++
        break
      case '[':
        if (stack === 0) {
          pointer += code.indexOf(']', pointer) - pointer
        } else {
          cicleIndex = pointer
          pointer++
        }
        break
      case ']':
        if (stack !== 0) {
          pointer = cicleIndex
        } else {
          pointer++
        }
        break
      case '{':
        if (stack === 0) {
          pointer += code.indexOf('}', pointer) - pointer
        } else {
          pointer++
        }
        break
      default:
        pointer++
    }
  }

  return stack
}

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5
