import React, { useState } from "react";
import Modal from "./Modal";
import InputButtonComponent from "./InputButtonComponent";

function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-semibold" data-testid="title">
        Home component
      </h1>
      <button
        data-testid="openmodal"
        className="px-2 py-2 border rounded cursor-pointer hover:bg-gray-200"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      <InputButtonComponent />

      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <h1 className="text-lg font-semibold">Modal component</h1>
        <p className="text-sm">This is a modal</p>
        <button
          className="px-2 bg-red-500 text-white"
          onClick={() => setOpen(false)}
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
}

export default Home;
