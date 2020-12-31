import React, { useContext } from 'react';
import { DataBaseContext } from '@context/dataBaseContext';

import './style.scss';

// беред данные из контекста
export const Pagination = () => {
    const {
        data, configPagination: { dataPerPage, currentPage },
        setCurrentPage
    } = useContext(DataBaseContext)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginationHandler = (e) => {
        const value = +e.target.innerHTML;
        
        setCurrentPage(value)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    const active = number === currentPage ? 'active' : '';
                    return (
                        <li key={number} className={active} onClick={paginationHandler}>{number}</li>
                    )
                })}
            </ul>
        </nav>
    );
}