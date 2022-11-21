/**
 * Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 */

const fizzbuz = number => {
  if (typeof number !== 'number') {
    throw new Error('parameter provided must be a number')
  }
  if (Number.isNaN(number)) {
    throw new Error('parameter provided must be a number')
  }
  const multiple = { 3: 'fizz', 5: 'buzz' }
  let result = ''
  Object.entries(multiple).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) {
      result += word
    }
  })

  return result === '' ? number : result
}

export default fizzbuz
