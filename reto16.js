function removeSnow(s) {
  if (s.length === 0) return s

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && s[i] === stack[stack.length - 1]) {
      stack.pop() // Elimina el último carácter si es igual al actual
    } else {
      stack.push(s[i]) // Agrega el carácter actual al stack
    }
  }

  return stack.join('') // Convierte el array en un string
}

console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')) // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')) // -> "a"
// No hay montículos repetidos
