import React from 'react';

import './style.scss';

export const Button = ({ children, onClick }) => {
    return (
        <button className="button" onClick={onClick}>{children}</button>
    );
}