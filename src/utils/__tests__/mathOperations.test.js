import { sum, substract, multiply, divide } from "../mathOperations";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

it("suma de numeros", () => {
  const number1 = getRandomInt(99) + 1;
  const number2 = getRandomInt(99) + 1;

  const result = sum(number1, number2);
  expect(result).toBe(number1 + number2);
});

it("suma de numeros negativos", () => {
  const number1 = getRandomInt(99) + 1;
  const number2 = -(getRandomInt(99) + 1);

  expect(() => {
    sum(number1, number2);
  }).toThrowError("You cant sum negative numbers");
});

it("resta de numeros", () => {
  const number1 = getRandomInt(99) + 1;
  const number2 = getRandomInt(99) + 1;

  const result = substract(number1, number2);
  expect(result).toBe(number1 - number2);
});

it("resta de numeros negativos", () => {
  const number1 = getRandomInt(99) + 1;
  const number2 = -(getRandomInt(99) + 1);

  expect(() => {
    substract(number1, number2);
  }).toThrowError("You cant rest negative numbers");
});

it("multiplicacion de numeros", () => {
  const number1 = getRandomInt(99) + 1;
  const number2 = getRandomInt(99) + 1;

  const result = multiply(number1, number2);
  expect(result).toBe(number1 * number2);
});

it("division de numeros", () => {
  const number1 = getRandomInt(99) + 1;
  const number2 = getRandomInt(99) + 1;
  const result = divide(number1, number2);
  expect(result).toBe(number1 / number2);
});

it("division de numeros en caso de 0", () => {
  const number1 = getRandomInt(99) + 1;
  expect(() => {
    divide(number1, 0);
  }).toThrowError("You cant divide by 0");
});
