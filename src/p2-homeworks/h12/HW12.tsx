import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, StateType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const {theme} = useSelector<AppStoreType, StateType>(state => state.theme)
    const dispatch = useDispatch()

    const onChangeHandler = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s.container}>
            <h3>homeworks 12</h3>
            <div className={s[theme]}>
                <span className={s[theme + 'text']}>
            </span>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeHandler}
                />
            </div>
        </div>
    );
}

export default HW12;
