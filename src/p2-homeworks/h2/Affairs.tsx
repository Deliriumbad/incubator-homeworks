import React from 'react';
import {Affair} from './Affair';
import {AffairType, FilterType} from './HW2';
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback: (id:number)=>void
}

export const Affairs: React.FC<AffairsPropsType> = (props)  => {

    const {data, setFilter,  deleteAffairCallback} = props;

    const mappedAffairs = data.map( ( a: AffairType ) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ));

    const setAll = () => setFilter('all');
    const setHigh = () => setFilter('high');
    const setMiddle = () => setFilter('middle');
    const setLow = () => setFilter('low');

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll} className={s.filterButton}>All</button>
            <button onClick={setHigh} className={s.filterButton}>High</button>
            <button onClick={setMiddle} className={s.filterButton}>Middle</button>
            <button onClick={setLow} className={s.filterButton}>Low</button>
        </div>
    );
}

