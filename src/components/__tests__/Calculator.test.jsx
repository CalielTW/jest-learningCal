import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "../Calculator";
import * as operations from "../../utils/mathOperations";

jest.mock("../../utils/mathOperations");

const { divide, multiply, substract, sum } = operations;

function getRandomInt(max) {
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

let number1;
let number2;

describe("with integers", () => {
  describe("successfully", () => {
    beforeEach(() => {
      number1 = getRandomInt(99) + 1;
      number2 = getRandomInt(99) + 1;
    });

    var createMock = jest.fn();

    it("sum operation", () => {
      const spy = jest.spyOn(operations, "operation");
      operations.operation.mockReturnValue(number1 + number2);

      render(<Calculator />);

      fireEvent.change(screen.getByTestId("a"), { target: { value: number1 } });
      fireEvent.change(screen.getByTestId("b"), { target: { value: number2 } });
      fireEvent.change(screen.getByTestId("result"), {
        target: { dataValue: number1 + number2 },
      });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "sum" },
      });

      expect(spy).toHaveBeenCalled();

      expect(screen.getByTestId("result").textContent).toBe(
        `Result: ${operations.operation(number1, number2, "sum")}`
      );
    });

    it("substract operation", () => {
      const spy = jest.spyOn(operations, "operation");
      operations.operation.mockReturnValue(number1 - number2);

      render(<Calculator />);

      fireEvent.change(screen.getByTestId("a"), { target: { value: number1 } });
      fireEvent.change(screen.getByTestId("b"), { target: { value: number2 } });
      fireEvent.change(screen.getByTestId("result"), {
        target: { dataValue: number1 - number2 },
      });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "substract" },
      });

      expect(spy).toHaveBeenCalled();

      expect(screen.getByTestId("result").textContent).toBe(
        `Result: ${operations.operation(number1, number2, "substract")}`
      );
    });

    it("multiply operation", () => {
      const spy = jest.spyOn(operations, "operation");
      operations.operation.mockReturnValue(number1 * number2);

      render(<Calculator />);

      fireEvent.change(screen.getByTestId("a"), { target: { value: number1 } });
      fireEvent.change(screen.getByTestId("b"), { target: { value: number2 } });
      fireEvent.change(screen.getByTestId("result"), {
        target: { dataValue: number1 * number2 },
      });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "multiply" },
      });

      expect(spy).toHaveBeenCalled();

      expect(screen.getByTestId("result").textContent).toBe(
        `Result: ${operations.operation(number1, number2, "multiply")}`
      );
    });

    it("divide operation", () => {
      const spy = jest.spyOn(operations, "operation");
      operations.operation.mockReturnValue(number1 / number2);

      render(<Calculator />);

      fireEvent.change(screen.getByTestId("a"), { target: { value: number1 } });
      fireEvent.change(screen.getByTestId("b"), { target: { value: number2 } });
      fireEvent.change(screen.getByTestId("result"), {
        target: { dataValue: number1 / number2 },
      });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "divide" },
      });

      expect(spy).toHaveBeenCalled();

      expect(screen.getByTestId("result").textContent).toBe(
        `Result: ${operations.operation(number1, number2, "divide")}`
      );
    });

    it("divide by 0 operation", () => {
      const spy = jest.spyOn(operations, "operation");
      operations.operation.mockReturnValue(number1 / 0);

      render(<Calculator />);

      fireEvent.change(screen.getByTestId("a"), { target: { value: number1 } });
      fireEvent.change(screen.getByTestId("b"), { target: { value: 0 } });
      fireEvent.change(screen.getByTestId("result"), {
        target: { dataValue: number1 / 0 },
      });
      fireEvent.change(screen.getByTestId("operator"), {
        target: { value: "divide" },
      });

      expect(spy).toHaveBeenCalled();

      expect(() => {
        divide(number1, 0);
      }).toThrowError("You cant divide by 0");
    });
  });
});
