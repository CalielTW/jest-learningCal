export function sum(a: number, b: number) {
  if (a < 0 || b < 0) throw "You cant sum negative numbers";
  return a + b;
}

export function substract(a: number, b: number) {
  if (a < 0 || b < 0) throw "You cant rest negative numbers";
  return a - b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function divide(a: number, b: number) {
  if (b === 0) throw "You cant divide by 0";
  return a / b;
}

interface OperationId<Number> {
  [id: string]: number;
}

export function operation(a: number, b: number, operation: any) {
  const OPERATIONS: OperationId<string> = {
    sum: sum(a, b),
    substract: substract(a, b),
    divide: divide(a, b),
    multiply: multiply(a, b),
  };

  return OPERATIONS[operation];
}
