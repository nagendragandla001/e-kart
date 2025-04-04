import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalType {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalType) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-zinc-800 flex justify-center items-center"
      data-testid="modal"
    >
      <div className="bg-white p-2 border rounded-lg shadow-md relative min-w-xl min-h-80">
        <button
          className="p-1 h-[32px] w-[32px] absolute rounded-full right-2 text-blue-500 cursor-pointer hover:scale-110 hover:border"
          onClick={onClose}
          data-testid="close"
        >
          X
        </button>
        <div className="p-2" data-testid="modal-content">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
