function findMissingNumbers(nums) {
  const ordenedNums = nums.sort()
  let numbers = []
  let missingNumber = 1

  for (let i = 0; i < ordenedNums.length; ) {
    if (missingNumber === ordenedNums[i]) {
      missingNumber++
      i++
    } else if (missingNumber < ordenedNums[i]) {
      numbers.push(missingNumber)
      missingNumber++
    } else {
      i++
    }
  }

  return numbers
}

findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findMissingNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]
