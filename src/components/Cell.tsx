import { useState, useEffect } from "react";

type Props = {
  initialValue: string;
  x: number;
  y: number;
  updateValue: (x: number, y: number, value: string) => void;
};

export default function Cell({ value, x, y, updateValue }: Props) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    window.document.addEventListener("unselectAll", () => {
      setSelected(false);
    });
  }, []);

  if (selected) {
    return (
      <input
        className="border-2 p-3 bg-blue-200"
        value={value}
        onChange={(e) => {
          updateValue(x, y, e.target.value);
        }}
      />
    );
  }

  return (
    <div
      className="border-2 p-3"
      onClick={() => {
        window.document.dispatchEvent(new Event("unselectAll"));
        setSelected(true);
      }}
    >
      {value || <span className="text-gray-200">-</span>}
    </div>
  );
}
