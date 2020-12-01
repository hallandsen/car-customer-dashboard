import React from 'react'

import '../styles/DataTable.scss'

const Table = ({ rows, labels, RowComponent }) => {
  console.log('rows', rows)
  return (
    <div className='DataTable'>

      <div className='DataTable__row-header'>
        {Object.keys(labels).map(key => (
          <div key={key}>{labels[key]}</div>
        ))}
      </div>

      <div className='DataTable__rows'>
        {rows.map(row => (
          <RowComponent
            row={row}
            key={row.created}
          />
        ))}
      </div>

    </div>
  )
}

export default Table