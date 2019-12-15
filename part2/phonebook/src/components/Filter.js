import React from 'react'

const Filter = ({ filter, onChange }) => {
    return (
        <div>
            filter by name:
        <input value={filter} onChange={onChange} />
        </div>
    )
}

export default Filter
