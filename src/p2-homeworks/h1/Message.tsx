import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: React.FC<MessagePropsType> = (props) => {

    const {avatar, name, message, time} = props;

    return (
        <div className={s.wrapper}>
            <div className={s.avatarWrapper}>
                <div className={s.avatar}>
                    <img src={avatar}/>
                </div>
            </div>
            <div className={s.contentWrapper}>
                <div className={s.name}>
                    {name}
                </div>
                <div className={s.message}>
                    {message}
                </div>
                <div className={s.time}>
                    {time}
                </div>
            </div>
        </div>
    );
}

