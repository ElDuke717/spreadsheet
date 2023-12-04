// Importing the useState hook from React for state management.
import { useState } from 'react';

// Importing the Cell component from the local file.
import Cell from './Cell';

// Defining the Spreadsheet component.
export default function Spreadsheet() {
  // Using the useState hook to initialize the 'data' state variable.
  // This state holds an array of arrays representing rows and cells of the spreadsheet, initially filled with empty strings.
  const [data, setData] = useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ]);

  // Rendering the Spreadsheet component.
  /* possible grid-cols-* values are grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8 grid-cols-9 grid-cols-10 */
  return (
    <div className={`grid grid-cols-${data[0].length}`}>
      {/* Mapping over each row in the data array. 'row' represents a single row, and 'y' is its index. */}
      {data.map((row, y) => {
        // For each row, map over each cell in the row.
        return row.map((cell, x) => {
          // Rendering the Cell component for each cell in the row.
          // Assigning a unique key using the row and column indices to help React identify which items have changed.
          return <Cell key={y + '-' + x} />
        })
      })}
    </div>
  )
}
