import { useState } from 'react'
import Cell from './Cell'

export default function Spreadsheet() {
  const [data, setData] = useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ])

	/* possible grid-cols-* values are grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8 grid-cols-9 grid-cols-10 */
  return (
    <div className={`grid grid-cols-${data[0].length}`}>
      {data.map((row, y) => {
        return row.map((cell, x) => {
          return <Cell key={y + '-' + x} />
        })
      })}
    </div>
  )
}