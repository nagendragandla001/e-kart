import { render, screen } from "@testing-library/react";
import React from "react";
import Account from ".";

describe("AccountComponent", () => {
  test("Title of the AccountComponent", () => {
    render(<Account />);

    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent("Account Page");
  });
});
