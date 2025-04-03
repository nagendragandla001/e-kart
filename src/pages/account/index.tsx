import { memo, useState } from "react";

const ComponentB = ({ onUpdate }: { onUpdate: (val: string) => void }) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <h1>Component B</h1>
      <div className="flex gap-4">
        <input
          value={inputVal}
          placeholder="enter here"
          className="border rounded px-2"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          className="btn px-4 py-1 bg-orange-400 cursor-pointer rounded text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={!inputVal}
          onClick={() => onUpdate(inputVal)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const ComponentC = memo(({ content }: { content: string }) => {
  return <div>{content}</div>;
});

const ComponentA = () => {
  const [status, setStatus] = useState("SHOW_B");
  const [content, setContent] = useState("");

  const handleUpdate = (val: string) => {
    setContent(val);
    setStatus("SHOW_C");
  };

  switch (status) {
    case "SHOW_B":
      return <ComponentB onUpdate={handleUpdate} />;
    case "SHOW_C":
      return <ComponentC content={content} />;
    default:
      return null;
  }
};

function Account() {
  return (
    <div>
      <ComponentA />
    </div>
  );
}

export default Account;
