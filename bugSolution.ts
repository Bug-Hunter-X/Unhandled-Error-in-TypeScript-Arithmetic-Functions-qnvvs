function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result: number;

try {
  result = add(5, 3); // 8
  result = subtract(10, 4); // 6
  result = multiply(7, 2); // 14
  result = divide(20, 0); // Throws an error
} catch (error: any) {
  console.error('An error occurred:', error.message);
  result = 0; // Or handle the error appropriately
}

console.log(result); // 0