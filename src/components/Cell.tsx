// Import useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Define the type for props that this component will accept
type Props = {
  initialValue: string; // initial value for the cell
  x: number; // x-coordinate (or row index)
  y: number; // y-coordinate (or column index)
  updateValue: (x: number, y: number, value: string) => void; // function to update the cell value
};

// Define the Cell component
export default function Cell({ value, x, y, updateValue }: Props) {
  // State for tracking whether the cell is selected or not
  const [selected, setSelected] = useState(false);

  // useEffect hook to add an event listener to the window object
  useEffect(() => {
    // Add a listener for the 'unselectAll' event
    window.document.addEventListener("unselectAll", () => {
      // Set 'selected' state to false when 'unselectAll' event is dispatched
      setSelected(false);
    });
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  // If the cell is selected, return an input element
  if (selected) {
    return (
      <input
        className="border-2 p-3 bg-blue-200" // Styling classes for the input
        value={value} // Set the input value to the value passed in props
        onChange={(e) => {
          // Update the cell value on change
          updateValue(x, y, e.target.value);
        }}
      />
    );
  }

  // Default return when the cell is not selected
  return (
    <div
      className="border-2 p-3" // Styling classes for the div
      onClick={() => {
        // Dispatch 'unselectAll' event and set the current cell as selected on click
        window.document.dispatchEvent(new Event("unselectAll"));
        setSelected(true);
      }}
    >
      {/* Display the cell value or a placeholder if the value is empty */}
      {value || <span className="text-gray-200">-</span>}
    </div>
  );
}
