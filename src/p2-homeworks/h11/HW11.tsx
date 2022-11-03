import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onSuperRangeHandler = (num: number) => {
        if (num >= value2) return
        setValue1(num)
    }

    const onSuperDoubleRangeHandler = (nums: Array<number>) => {
        setValue1(nums[0])
        setValue2(nums[1])
    }

    return (
        <div className={s.container}>
            <h3>homeworks 11</h3>
            <div>
                <div className={s.values}>
                    <span className={s.range1}>{value1}</span>
                </div>
                <hr className={s.line}/>
                <SuperRange
                    max={100}
                    min={0}
                    value={value1}
                    onChangeRange={onSuperRangeHandler}
                />
            </div>

            <div className={s.values}>
                <span className={s.range1}>{value1} &mdash; </span>
                <span className={s.range2}>{value2}</span>
            </div>
                <SuperDoubleRange
                    max={100}
                    min={0}
                    value={[value1, value2]}
                    onChangeRange={onSuperDoubleRangeHandler}
                    setValue1={setValue1}
                    setValue2={setValue2}
                />
        </div>
    )
}
export default HW11
