import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders component Calculator", () => {
  render(<App />);
  const calculatorComponent = screen.getByRole("Calculator");
  expect(calculatorComponent).toBeInTheDocument();
});
