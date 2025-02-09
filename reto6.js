function inBox(box) {
  return box.some((line) => {
    if (line.includes('*')) {
      const chars = line.split('')
      const leftCat = chars.findIndex((elem) => elem === '#')
      const rightCat = chars.findLastIndex((elem) => elem === '#')
      const position = chars.findIndex((elem) => elem === '*')

      // Verifica si '*' está dentro de los límites de '#'
      return position > leftCat && position < rightCat
    }
    return false // Si no hay '*', seguimos con la siguiente línea
  })
}

console.log(inBox(['###', '#*#', '###'])) // ➞ true
