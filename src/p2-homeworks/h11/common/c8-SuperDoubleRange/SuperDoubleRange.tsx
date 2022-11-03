import React from 'react'
import SuperRange from "../c7-SuperRange/SuperRange";
import s from './SuperDoubleRange.module.css'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    max: number
    min: number
    setValue1: (num: number) => void
    setValue2: (num: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max, ...props
        // min, max, step, disable, ...
    }
) => {

    const func1 = (n: number) => {
        if (value[1] <= n) return
        props.setValue1(n)
    }
    const func2 = (n: number) => {
        if (value[0] >= n) return
        props.setValue2(n)
    }

    return (
        <div className={s.container}>
            <div className={s.slider}>
                <SuperRange value={value[0]}
                            min={min}
                            max={max}
                            onChangeRange={func1}
                            className={s.firstSlider}
                />

                <SuperRange value={value[1]}
                            min={min}
                            max={max}
                            onChangeRange={func2}
                            className={s.secondSlider}
                />
            </div>
        </div>
    )
}

export default SuperDoubleRange
