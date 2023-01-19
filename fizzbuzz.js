// Divible by 3 => Fizz
// Divible by 5 => Buzz
// Divisible by 15 => fizzBuzz
// Not divisible by 3 or 5 => entrada, retorna o mesmo nr 
// If not a number return NaN

const result = fizzBuzz(22);
console.log(result);

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return 'Not a number';

  if ((input % 3 === 0 && input % 5 === 0)) return 'FizzBuzz';

  if (input % 3 === 0) return 'Fizz';

  if (input % 5 === 0) return 'Buzz';

  return input;
}
