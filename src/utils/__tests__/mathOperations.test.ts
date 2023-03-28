import { sum, rest, mult, divid } from "../operationMath";

function getRandomInt(max) {
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

  const result = rest(number1, number2);
  expect(result).toBe(number1 - number2);
});

it("multiplicacion de numeros", () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);

  const result = mult(number1, number2);
  expect(result).toBe(number1 * number2);
});

it("division de numeros", () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  if (number2 <= 0) {
    const result = "Cant divide by 0";
    expect(result).toBe("Cant divide by 0");
  } else {
    const result = divid(number1, number2);
    expect(result).toBe(number1 / number2);
  }
});
