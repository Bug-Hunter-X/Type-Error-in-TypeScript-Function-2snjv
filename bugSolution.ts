function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

let result1 = add(5, 10); // Correct usage
let result2 = addSafe(5, '10'); // Throws an error 
let result3 = addSafe(5,10) // Correct usage