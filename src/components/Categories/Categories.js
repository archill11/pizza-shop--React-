
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react'
import { setCategoryVal } from '../../redux/categorySlice' 

import './Categories.scss'


const data = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые", "Напитки" ]


const Categories = (props) => {
    const dispatch = useDispatch()

    return(
        <div className="categories cp">
            <ul>
                {data.map((item, indx) => (
                        <li onClick={()=> dispatch(setCategoryVal(indx))} className={props.categoryVal === indx ? 'active' : ''} key={indx}>{item}</li>
                    )
                )}
            </ul>
        </div>
    )
}

export {Categories}