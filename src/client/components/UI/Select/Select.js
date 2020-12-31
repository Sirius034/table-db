import React from 'react';

import './style.scss'

export const Select = ({ name, onChange, options }) => {
    return (
        <select className="select" name={name} onChange={onChange}>
            {Object.keys(options).map((optionName, i) => (
                <option key={i} value={optionName}>
                    {options[optionName]}
                </option>
            ))}
        </select>
    );
}