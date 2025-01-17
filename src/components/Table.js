import React from 'react'

import '../styles/DataTable.scss'

const Table = ({ rows, labels, RowComponent, type }) => {
  const renderLabels = Object.keys(labels).map(key => (
    <div key={key}>{labels[key]}</div>
  ))

  return (
    <div className='DataTable'>

      <div className='DataTable__row-header'>
        {renderLabels}
      </div>

      <div className='DataTable__rows'>
        {rows.map(row => (
          <RowComponent
            row={row}
            key={`${row.created}-${type}`}
          />
        ))}
      </div>

    </div>
  )
}

export default Table