function findInAgenda(agenda, phone) {
  const entries = agenda.split('\n')
  const results = []

  for (const entry of entries) {
    const phoneRegex = new RegExp(`\\+?\\d{1,2}-\\d{3}-\\d{3}-\\d{3}`)
    const nameRegex = /<([^>]+)>/

    const phoneMatch = entry.match(phoneRegex)
    const nameMatch = entry.match(nameRegex)

    if (phoneMatch && nameMatch) {
      const entryPhone = phoneMatch[0]
      const name = nameMatch[1]
      const address = entry
        .replace(entryPhone, '')
        .replace(`<${name}>`, '')
        .trim()

      if (entryPhone.includes(phone)) {
        results.push({ name, address })
      }
    }
  }

  if (results.length === 1) {
    return results[0]
  } else {
    return null
  }
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, '1'))
// null
// Explicación: Demasiados resultados
