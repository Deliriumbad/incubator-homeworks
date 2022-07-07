import React, {useState} from 'react';
import {homeWorkReducer} from './bll/homeWorkReducer';
import {SuperButton} from '../h4/common/c2-SuperButton/SuperButton';
import s from './HW8.module.css';

export type UserType = {
    _id: number
    name: string
    age: number
}

export type InitialPeopleType = Array<UserType>

const initialPeople: InitialPeopleType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<InitialPeopleType>(initialPeople);

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.items}>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ));

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}));
    const sortCheck = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}));

    return (
        <div className={s.container}>
            <h3>homeworks 8</h3>
            {finalPeople}
            <div className={s.buttons}>
                <SuperButton onClick={sortUp}>Sort up</SuperButton>
                <SuperButton onClick={sortDown}>Sort down</SuperButton>
                <SuperButton onClick={sortCheck}>Check 18</SuperButton>
            </div>
        </div>
    );
}
export default HW8;
