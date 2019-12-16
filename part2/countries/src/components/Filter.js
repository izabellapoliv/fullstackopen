import React from 'react';

const Filter = ({ current, onChange }) => {
    return (
        <div>Filter countries: <input value={current} onChange={onChange} /></div>
    )
}

export default Filter
