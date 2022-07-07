import React, {useState} from 'react';
import {SuperButton} from '../h4/common/c2-SuperButton/SuperButton';
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId);// stop
    }

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            const date = new Date();
            setDate(date);
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true);// show
    }
    const onMouseLeave = () => {
        setShow(false);// close
    }

    const stringTime = date?.toLocaleTimeString(); // fix with date
    const stringDate = date?.toLocaleDateString(); // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span className={s.time}>{stringTime}</span>
            </div>
            <div className={s.date}>
                {show && stringDate}
            </div>

            <SuperButton onClick={start}>Start</SuperButton>
            <SuperButton onClick={stop}>Stop</SuperButton>

        </div>
    );
}

export default Clock
