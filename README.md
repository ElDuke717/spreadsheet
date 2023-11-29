# React Spreadsheet

This project is a simple spreadsheet application built using React. It is a work in progress.

## How the Spreadsheet Works

```javascript
// Importing the useState hook from React for state management.
import { useState } from "react";

// Importing the Cell component from the local file.
import Cell from "./Cell";

// Defining the Spreadsheet component.
export default function Spreadsheet() {
  // Using the useState hook to initialize the 'data' state variable.
  // This state holds an array of arrays representing rows and cells of the spreadsheet, initially filled with empty strings.
  const [data, setData] = useState([
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]);

  // Rendering the Spreadsheet component.
  return (
    <div>
      {/* Mapping over each row in the data array. 'row' represents a single row, and 'y' is its index. */}
      {data.map((row, y) => {
        // For each row, map over each cell in the row.
        return row.map((cell, x) => {
          // Rendering the Cell component for each cell in the row.
          // Assigning a unique key using the row and column indices to help React identify which items have changed.
          return <Cell key={y + "-" + x} />;
        });
      })}
    </div>
  );
}
```

This code defines a React component named `Spreadsheet`. It uses the `useState` hook to manage its state, which consists of an 8x4 grid of cells. Each cell is represented as an empty string in the initial state. The component renders a `div` containing a number of `Cell` components, equal to the number of cells in the grid. Each `Cell` is assigned a unique key for efficient rendering.
