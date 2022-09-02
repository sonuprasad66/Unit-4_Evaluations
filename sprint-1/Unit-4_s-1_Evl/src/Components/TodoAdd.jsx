import {useState} from "react";

let TodoAdd = ({handleAdd}) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Enter Somthings"
      />
      <button
        onClick={() => {
          handleAdd(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export {TodoAdd};
