import { useState } from "react";

export default function Cell() {
  const [selected, setSelected] = useState(false);

  if (selected) {
    return <input className="border-2 p-3 bg-blue-500" />;
  }

  return (
    <div
      className="border-2 p-3"
      onClick={() => {
        setSelected(true);
      }}
    >
      cell
    </div>
  );
}
