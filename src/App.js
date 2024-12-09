import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    const handle = (event) => {
      console.log(event.target);
    };

    document.addEventListener("click", handle, true);

    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex mx-2">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default App;
