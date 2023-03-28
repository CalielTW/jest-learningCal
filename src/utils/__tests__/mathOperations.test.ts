import { sum, substract, multiply, divide } from "../mathOperations";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

it("suma de numeros", () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);

  const result = sum(number1, number2);
  expect(result).toBe(number1 + number2);
});

it("resta de numeros", () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);

  const result = substract(number1, number2);
  expect(result).toBe(number1 - number2);
});

it("multiplicacion de numeros", () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);

  const result = multiply(number1, number2);
  expect(result).toBe(number1 * number2);
});

it("division de numeros", () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const result = divide(number1, number2);
  expect(result).toBe(number1 / number2);
});
