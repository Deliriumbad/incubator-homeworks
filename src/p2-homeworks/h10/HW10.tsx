import React from 'react';
import {SuperButton} from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css';

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(true));

        setTimeout(()=>{
            dispatch(loadingAC(false));
        }, 2000);
    };

    return (
        <div className={s.container}>
            <h3>homeworks 10</h3>
            {isLoading
                ? (
                    <div style={{height: '62px'}}>
                        <img src={'https://cdn-icons-png.flaticon.com/512/154/154376.png'} />
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>Set loading</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
