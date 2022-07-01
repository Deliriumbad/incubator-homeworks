import React from 'react';
import {AffairType} from "./HW2";
import s from './Affairs.module.css';


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id:number)=>void
}

export const Affair: React.FC<AffairPropsType> = (props) => {

    const {affair, deleteAffairCallback} = props;

    const deleteCallback = () => {
        deleteAffairCallback(affair._id);
    }

    return (
        <div>
            <div className={s.affair}>
                {affair.name}
            </div>
            <div className={s.button}>
                <button onClick={deleteCallback}>del</button>
            </div>
        </div>
    );
}

