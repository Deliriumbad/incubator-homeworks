import React, {useState} from 'react';
import {Affairs} from './Affairs';
import s from './Affairs.module.css';

// types
export type AffairPriorityType = 'high' |  'middle' | 'low';
export type AffairType = {
    _id:number
    name:string
    priority:string
}
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType):AffairType[] => {
    if (filter === 'all') return affairs;
    /*else if (filter === 'high') return affairs.filter(el => el.priority === 'high')
    else if (filter === 'middle') return affairs.filter(el => el.priority === 'middle')
    else if (filter === 'low') return affairs.filter(el => el.priority === 'low')
    else {
    }
    return []*/
    else return affairs.filter(el => el.priority === filter);
}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(el => el._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredAffairs = filterAffairs(affairs, filter);

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div className={s.container}>
            <h3>homeworks 2</h3>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    );
}

export default HW2;
