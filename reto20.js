function fixGiftList(received, expected) {
  const countGifts = (list) => {
    return list.reduce((acc, gift) => {
      acc[gift] = (acc[gift] || 0) + 1
      return acc
    }, {})
  }

  const receivedCount = countGifts(received)
  const expectedCount = countGifts(expected)
  const missing = {}
  const extra = {}

  for (const gift in expectedCount) {
    if ((receivedCount[gift] || 0) < expectedCount[gift]) {
      missing[gift] = expectedCount[gift] - (receivedCount[gift] || 0)
    }
  }

  for (const gift in receivedCount) {
    if ((expectedCount[gift] || 0) < receivedCount[gift]) {
      extra[gift] = receivedCount[gift] - (expectedCount[gift] || 0)
    }
  }

  return { missing, extra }
}

fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
