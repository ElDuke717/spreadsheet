import { useState, useEffect } from "react";


export default function Cell() {
  const [selected, setSelected] = useState(false);

  useEffect( () => {
  window.document.addEventListener('unselectAll', () => {
    setSelected(false);
  })
}, []);

  if (selected) {
    return <input className="border-2 p-3 bg-blue-500" />;
  }

  return (
    <div
      className="border-2 p-3"
      onClick={() => {
        window.document.dispatchEvent(new Event('unselectAll'));
        setSelected(true);
      }}
    >
      cell
    </div>
  );
}
