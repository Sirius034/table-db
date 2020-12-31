import React from 'react';

import './style.scss';

export const Input = ({ type = 'text', value, placeholder, onChange }) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className="input"
            onChange={onChange} />
    );
}