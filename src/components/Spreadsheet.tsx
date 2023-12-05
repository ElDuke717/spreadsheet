// Importing the useState hook from React for state management.
import { useState, useEffect } from 'react';

// Importing the Cell component from the local file.
import Cell from './Cell';

// Defining the Spreadsheet component.
export default function Spreadsheet() {
  // Using the useState hook to initialize the 'data' state variable.
  // This state holds an array of arrays representing rows and cells of the spreadsheet, initially filled with empty strings.
  const [data, setData] = useState([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ]);

  // Function to update the value of a cell in the spreadsheet.
  function updateValue(x: number, y: number, value: string) {
    // Creating a deep clone of the current 'data' state to avoid direct mutation.
    const _data = structuredClone(data);
    // Updating the specified cell with the new value.
    _data[y][x] = value;
    // Updating the 'data' state with the new array.
    setData(_data);

    // Storing the updated data in the browser's local storage if available.
    if (window && window.localStorage) {
      window.localStorage.setItem('spreadsheet', JSON.stringify(_data))
    }
  }

  // useEffect hook to retrieve and set the spreadsheet data from local storage when the component mounts.
  useEffect(() => {
    const data = window.localStorage.getItem('spreadsheet')
    if (data) setData(JSON.parse(data))
  }, []) // Empty dependency array ensures this effect runs only once after the component mounts.

  // Rendering the Spreadsheet component.
  return (
    // Using a grid layout with a number of columns equal to the length of the first row in 'data'.
    <div className={`grid grid-cols-${data[0].length}`}>
      {/* Mapping over each row in the 'data' array. 'row' is a single row, and 'y' is its index. */}
      {data.map((row, y) => (
        // For each row, mapping over each cell.
        row.map((cell, x) => (
          // Rendering a Cell component for each cell.
          // The 'key' prop helps React track which items have changed, are added, or are removed.
          <Cell 
            key={`${y}-${x}`}
            value={cell} 
            x={x}
            y={y}
            updateValue={updateValue}
          />
        ))
      ))}
    </div>
  )
}