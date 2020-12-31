import React, { useReducer } from 'react';
import { DataBaseContext } from './dataBaseContext';
import { dataBaseReducer } from './dataBaseReducer';

import { initialState } from './initialState';
import { databaseQuery } from './utils';
import { SET_CURRENT_PAGE, FETCH_DATA } from './type';

export const DataBaseState = ({ children }) => {
    const [state, dispatch] = useReducer(dataBaseReducer, initialState);

    const setCurrentPage = (currentPage) => {
        const configPagination = { ...state.configPagination, currentPage };

        dispatch({
            type: SET_CURRENT_PAGE,
            configPagination
        })
    }

    const dataProcessing = (response) => {
        return response.map(el => {
            const { id, ...other } = el;
            return other;
        });
    }

    const fetchData = async () => {
        const response = await databaseQuery({ url: '/getData' });
        const data = dataProcessing(response);

        dispatch({ type: FETCH_DATA, data });
    }

    const dataSearch = async (value, tableField, conditions) => {
        const response = await databaseQuery({ url: `/getData/query?tableField=${tableField}&condition=${conditions}&text=${value}` });
        const data = dataProcessing(response);

        dispatch({ type: FETCH_DATA, data });
    }

    const { data, configPagination } = state;
    return (
        <DataBaseContext.Provider value={{
            data, configPagination,
            setCurrentPage, dataSearch, fetchData
        }}>
            {children}
        </DataBaseContext.Provider>
    );
}