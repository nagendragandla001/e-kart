import React, { useState } from "react";

const InputButtonComponent = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="flex flex-row gap-4">
      <input
        className="w-[200px] rounded p-2 border flex-auto"
        data-testid="input-element"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        className="px-4 py-2 border rounded cursor-pointer hover:bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        data-testid="submit"
        disabled={inputVal.length < 4}
      >
        submit
      </button>
    </div>
  );
};

export default InputButtonComponent;
