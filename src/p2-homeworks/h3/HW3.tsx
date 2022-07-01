import React, {useState} from 'react';
import {GreetingContainer} from './GreetingContainer';
import {v1} from "uuid";
import s from './Greeting.module.css';

export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]);

    const addUserCallback = (name: string) => {
        const user = {_id: v1(), name};
        setUsers([...users, user]);
    }

    return (
        <div className={s.container}>
            <h3>homeworks 3</h3>
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}
            />
        </div>
    );
}

export default HW3;
