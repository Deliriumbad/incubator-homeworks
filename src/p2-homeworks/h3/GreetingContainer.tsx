import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Greeting} from './Greeting';
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
export const GreetingContainer: React.FC<GreetingContainerPropsType> = (props) => { // деструктуризация пропсов

   const {users, addUserCallback} = props;

    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [placeholder, setPlaceholder] = useState<string>('Enter your name');


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {

        const name = e.currentTarget.value.trim();

        setName(name);
        setError('');

            if (!name) {
                setError('Name is require!');
            }

    }
    const addUser = () => {
        if (name) {
            addUserCallback(name);
            setName('');
            alert(`Hello ${name} !`);
        } else {
            setError('Name is require!');
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser();
        }
    }

    const onFocusHandler = () => {
        setError('');
        setPlaceholder('');
    }

    const onBlurHandler = () => {
        setPlaceholder('Enter your name');
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onFocusHandler={onFocusHandler}
            onKeyPressHandler={onKeyPressHandler}
            onBlurHandler={onBlurHandler}
            placeholder={placeholder}
        />
    );
}

