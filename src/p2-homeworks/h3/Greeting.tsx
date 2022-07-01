import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onFocusHandler: () => void
    onBlurHandler: () => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    placeholder: string
}

// презентационная компонента (для верстальщика)
export const Greeting: React.FC<GreetingPropsType> = (props) => {

    const {name, setNameCallback,  addUser, error, totalUsers, onFocusHandler, onKeyPressHandler, onBlurHandler, placeholder} = props;

    const errorTextClass = error ? `${s.errorText} ${s.active}` : `${s.errorText}`;

    return (
        <div className={s.wrapper}>
            <input value={name}
                   onChange={setNameCallback}
                   onFocus={onFocusHandler}
                   onKeyPress={onKeyPressHandler}
                   onBlur={onBlurHandler}
                   placeholder={placeholder}
            />
            <button onClick={addUser} className={s.button}>Add</button>
            <span className={s.counter}>{totalUsers}</span>
            <div className={errorTextClass}>{error}</div>
        </div>
    );
}
