import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "./Modal";
import React from "react";

describe("ModalComponent", () => {
  beforeAll(() => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  });

  afterAll(() => {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  test("Mondal should not be visible is isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <p>Hello</p>
      </Modal>
    );

    const modal = screen.queryByTestId("modal");

    expect(modal).not.toBeInTheDocument();
  });

  test("Modal should be visible if isOpen is true", () => {
    const onCloseMock = jest.fn();

    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <p>Hello</p>
      </Modal>
    );

    const modal = screen.getByTestId("modal");
    const modalContent = screen.getByTestId("modal-content");
    const closeBtn = screen.getByTestId("close");

    expect(modal).toBeInTheDocument();
    expect(modalContent).toBeVisible();
    expect(closeBtn).toBeVisible();
    expect(modalContent).toHaveTextContent("Hello");
  });
});
