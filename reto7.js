function fixPackages(packages) {
  const stack = []
  let result = ''

  for (let i = 0; i < packages.length; i++) {
    const char = packages[i]

    if (char === '(') {
      stack.push(result) // Guarda el resultado actual en la pila
      result = '' // Reinicia el resultado para la subcadena dentro de los paréntesis
    } else if (char === ')') {
      result = stack.pop() + [...result].reverse().join('') // Invierte la subcadena y la concatena con el resultado anterior
    } else {
      result += char // Agrega el carácter al resultado actual
    }
  }

  return result
}

console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
