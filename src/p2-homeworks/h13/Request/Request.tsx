import React, {ChangeEvent, useState} from "react";
import {SuperButton} from "../../h4/common/c2-SuperButton/SuperButton";
import {SuperCheckbox} from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI} from "../API/RequestsAPI";

export const Request = () => {

    const [isChecked, setIsChecked] = useState(false)
    const [response, setResponse] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }

    const onClickHandler = () => {
        RequestAPI.sendRequest(isChecked)
            .then(res => {
                setResponse(res.errorText)
            })
            .catch(error => {
                setResponse(error.response ? error.response.data.errorText : error.message)
            })
    }

    return (
        <div>
            <SuperButton onClick={onClickHandler}>SUBMIT</SuperButton>
            <SuperCheckbox checked={isChecked} onChange={onChangeHandler}/>
            <div>
                <span>Response: {response}</span>
            </div>
        </div>
    );
};



