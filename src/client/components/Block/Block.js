import React from 'react';
import { Toolbar } from '../Toolbar/Toolbar';
import { Table } from '../Table/Table';
import { Pagination } from '../Pagination/Pagination';

import './style.scss';

export const Block = () => {
    return (
        <div className="block">
            <div className="block__title">
                <h2>Таблица заездов F1</h2>
            </div>

            <div className="block__toolbar">
                <Toolbar />
            </div>

            <div className="block__content">
                <Table />
                <Pagination />
            </div>
        </div>
    );
}