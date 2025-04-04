import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputButtonComponent from "./InputButtonComponent";
import "@testing-library/jest-dom";

describe("InputButtonComponent", () => {
  test("Button should be disabled if input value is less than 4", () => {
    render(<InputButtonComponent />);

    const inputEle = screen.getByTestId("input-element");
    const submitBtn = screen.getByTestId("submit");

    expect(submitBtn).toBeDisabled();

    fireEvent.change(inputEle, { target: { value: "abc" } });

    expect(submitBtn).toBeDisabled();

    fireEvent.change(inputEle, { target: { value: "abcd " } });
    expect(submitBtn).toBeEnabled();
  });
});
