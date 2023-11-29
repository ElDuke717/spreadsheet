import { useState } from 'react'

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

  return (
    <div>
      Spreadsheet
    </div>
  )
}