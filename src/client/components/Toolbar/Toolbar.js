import React, { useContext, useState } from 'react';
import { DataBaseContext } from '@context/dataBaseContext'
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { Select } from '../UI/Select/Select';

import './style.scss';

export const Toolbar = () => {
    const [tableField, setTableField] = useState('name_track');
    const [conditions, setConditions] = useState('сontain');
    const [value, setValue] = useState('');
    const { dataSearch } = useContext(DataBaseContext);

    const changeSelectHandler = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        
        switch (field) {
            case 'select_conditions':
                return setConditions(value);
            case 'select_field':
                return setTableField(value);
        }
    }

    const changeInputHandler = (e) => {
        setValue(e.target.value);
    }
    
    const clickHandler = () => {
        dataSearch(value, tableField, conditions);
    }
    
    return (
        <div className="toolbar">
            <div className="toolbar__fields">
                <div className="toolbar__field">
                    <span className="field-title">Поле таблицы</span>
                    <Select
                        name="select_field"
                        onChange={changeSelectHandler}
                        options={{
                            name_track: 'Название Трасы', number_of_participants: 'Количество участников',
                            track_distance: 'Дистанция трассы'
                        }}
                    />
                </div>

                <div className="toolbar__field">
                    <span className="field-title">Условия фильтрации</span>
                    <Select
                        name="select_conditions"
                        onChange={changeSelectHandler}
                        options={{
                            сontain: 'Содержит', equally: 'Равно',
                            more: 'Больше', less: 'Mеньше'
                        }}
                    />
                </div>

                <div className="toolbar__field">
                    <span className="field-title">Поле ввода</span>
                    <Input type="text"
                        placeholder="Значение для фильтрации"
                        onChange={changeInputHandler}
                        value={value} />
                </div>
            </div>

            <div className="toolbar__buttons">
                <Button onClick={clickHandler}>Выполнить</Button>
            </div>
        </div>
    );
}