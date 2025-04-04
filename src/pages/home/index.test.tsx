import React from "react";
import { render, screen } from "@testing-library/react";
import Home from ".";
import InputButtonComponent from "./InputButtonComponent";

jest.mock("./InputButtonComponent", () =>
  jest.fn(() => <div data-testid="inputbutton">Input Button</div>)
);

describe("HomeComponent", () => {
  test("Page title should be visible as Home component", () => {
    render(<Home />);
    const h1 = screen.getByTestId("title");
    expect(h1).toHaveTextContent("Home component");
  });

  test("Open Modal button", () => {
    render(<Home />);
    const btn = screen.getByTestId("openmodal");
    expect(btn).toBeVisible();
  });

  test("Render InputButtonComponent", () => {
    render(<Home />);

    const inputBtn = screen.getByTestId("inputbutton");
    expect(inputBtn).toBeInTheDocument();
  });
});
