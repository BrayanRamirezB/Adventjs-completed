function decodeFilename(filename) {
  const match = filename.match(/^\d+_([\w-]+\.\w+)/)
  return match ? match[1] : null
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'))
// ➞ "elf-roster.csv"
