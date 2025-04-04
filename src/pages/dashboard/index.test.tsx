import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from ".";

describe("DashboardComponent", () => {
  test("Dashboard component title", () => {
    render(<Dashboard />);
    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent("Dashboard Component");
  });

  test("Verify the p content", () => {
    render(<Dashboard />);

    const p = screen.getByRole("paragraph");
    expect(p).toHaveTextContent("Welcome to the dashboard!");
  });
});
