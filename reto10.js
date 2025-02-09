function compile(instructions) {
  let registros = {}

  const getValue = (val) => (isNaN(val) ? registros[val] ?? 0 : Number(val))

  for (let i = 0; i < instructions.length; i++) {
    let [command, x, y] = instructions[i].split(' ')

    if (!(x in registros) && isNaN(x)) registros[x] = 0
    if (y !== undefined && !(y in registros) && isNaN(y)) registros[y] = 0

    if (command === 'MOV') {
      registros[y] = getValue(x)
    } else if (command === 'INC') {
      registros[x]++
    } else if (command === 'DEC') {
      registros[x]--
    } else if (command === 'JMP' && registros[x] === 0) {
      i = Number(y) - 1
    }
  }

  return registros.A
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2

/**
   Ejecución paso a paso:
   0: MOV -1 C -> El registro C recibe el valor -1
   1: INC C    -> El registro C pasa a ser 0
   2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
   1: INC C    -> El registro C pasa a ser 1
   2: JMP C 1  -> C es 1, ignoramos la instrucción
   3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
   4: INC A    -> El registro A pasa a ser 2
   */

const instructions2 = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1' // salta a la instrucción en el índice 1 si 'C' es 0
]

console.log(compile(instructions2)) // -> 2
