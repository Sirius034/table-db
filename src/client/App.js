import React, { useContext, useEffect } from 'react';
import { DataBaseContext } from '@context/dataBaseContext';
import { Layout } from './components/Layout/Layout';

export const App = () => {
    const { fetchData } = useContext(DataBaseContext);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="app">
            <Layout />
        </div>
    );
}