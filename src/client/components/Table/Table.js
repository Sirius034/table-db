import React, { useContext } from 'react';
import { DataBaseContext } from '@context/dataBaseContext';

import './style.scss';

const changeDate = (date) => {
    return date.slice(0, 10).split('-').reverse().join('.');
}

// имеет доступ к context;
export const Table = () => {
    const { data, configPagination: { dataPerPage, currentPage } } = useContext(DataBaseContext);

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const curentData = data.slice(indexOfFirstData, indexOfLastData);

    const createBasis = (obj) => {
        return Object.keys(obj).map((nameField, i) => {
            const value = nameField === 'date_start' ? changeDate(obj[nameField]) : obj[nameField];
            return (
                <td key={i}>{value}</td>
            )
        });
    }

    const trs = curentData.map((obj, i) => {
        return (
            <tr key={i}>
                {createBasis(obj)}
            </tr>
        );
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Дата старта</th>
                    <th>Название Трасы</th>
                    <th>Количество участников</th>
                    <th>Дистанция трассы</th>
                </tr>
            </thead>

            <tbody>
                {trs}
            </tbody>
        </table>
    )
}