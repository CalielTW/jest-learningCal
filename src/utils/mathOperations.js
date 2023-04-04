export function sum(a, b) {
  if (a < 0 || b < 0) throw "You cant sum negative numbers";
  return a + b;
}

export function substract(a, b) {
  if (a < 0 || b < 0) throw "You cant rest negative numbers";
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) throw "You cant divide by 0";
  return a / b;
}

export function operation(a, b, operation) {
  const OPERATIONS = {
    sum: sum(a, b),
    substract: substract(a, b),
    divide: divide(a, b),
    multiply: multiply(a, b),
  };

  return OPERATIONS[operation];
}
