import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "../Calculator";
import { divide, multiply, substract, sum } from "../../utils/mathOperations";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

it("all in screen", () => {
  render(<Calculator />);
  const calculator = screen.getByTestId("calculator");
  const a = screen.getByTestId("a");
  const b = screen.getByTestId("b");
  const result = screen.getByTestId("result");
  expect(a).toBeInTheDocument();
  expect(b).toBeInTheDocument();
  expect(result).toBeInTheDocument();
  expect(calculator).toBeInTheDocument();
});

let number1: number;
let number2: number;

describe("with integers", () => {
  describe("successfully", () => {
    beforeEach(() => {
      number1 = getRandomInt(99) + 1;
      number2 = getRandomInt(99) + 1;
    });

    it("sum", () => {
      render(<Calculator />);

      fireEvent.change(screen.getByTestId("a"), { target: { value: number1 } });
      fireEvent.change(screen.getByTestId("b"), { target: { value: number2 } });

      expect(sum(number1, number2)).toBe(number1 + number2);
    });
  });
});

it("substract operation", () => {
  render(<Calculator />);
  const a = screen.getByTestId("a");
  const b = screen.getByTestId("b");
  const number1 = getRandomInt(99) + 1;
  const number2 = getRandomInt(99) + 1;
  fireEvent.change(a, { target: { value: number1 } });
  fireEvent.change(b, { target: { value: number2 } });
  const resta = substract(number1, number2);
  expect(resta).toBe(number1 - number2);
});

it("multiply operation", () => {
  render(<Calculator />);
  const a = screen.getByTestId("a");
  const b = screen.getByTestId("b");
  const number1 = getRandomInt(99) + 1;
  const number2 = getRandomInt(99) + 1;
  fireEvent.change(a, { target: { value: number1 } });
  fireEvent.change(b, { target: { value: number2 } });
  const multiplicacion = multiply(number1, number2);
  expect(multiplicacion).toBe(number1 * number2);
});

it("divide operation", () => {
  render(<Calculator />);
  const a = screen.getByTestId("a");
  const b = screen.getByTestId("b");
  const number1 = getRandomInt(99) + 1;
  const number2 = getRandomInt(99) + 1;
  fireEvent.change(a, { target: { value: number1 } });
  fireEvent.change(b, { target: { value: number2 } });
  const division = divide(number1, number2);
  expect(division).toBe(number1 / number2);
});

it("divide by 0 operation", () => {
  render(<Calculator />);
  const a = screen.getByTestId("a");
  const number1 = getRandomInt(99) + 1;
  fireEvent.change(a, { target: { value: number1 } });
  expect(() => {
    divide(number1, 0);
  }).toThrowError("You cant divide by 0");
});
