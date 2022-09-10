
import { useDispatch } from "react-redux";
import React from 'react'
import { setCategoryVal } from "../../redux/category/slice";

import './Categories.scss'

const data: string[] = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые", "Напитки" ]

type CategoriesProps = {categoryVal: number}

const Categories: React.FC<CategoriesProps> = (props) => {
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