import { ReactNode } from "react";
import ReactDOM from "react-dom";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  console.log("Modal isOpen", isOpen);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-80 flex justify-center items-center">
      <div className="bg-white p-2 border rounded shadow-md relative w-md">
        <button
          className="px-2 py-1 absolute right-2 text-blue-500 cursor-pointer hover:scale-110"
          onClick={onClose}
        >
          Close
        </button>
        <div className="p-2">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
