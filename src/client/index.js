import React from 'react';
import ReactDOM from 'react-dom';
import { DataBaseState } from './context/DataBaseState';
import { App } from './App';

import './index.scss';

ReactDOM.render(
    <DataBaseState>
        <App />
    </DataBaseState>,
    document.getElementById('root')
);