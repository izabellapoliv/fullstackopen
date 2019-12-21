import React from 'react';

const Filter = ({ current, onChange }) => {
    return (
        <div>Search countries: <input value={current} onChange={onChange} /></div>
    )
}

export default Filter
