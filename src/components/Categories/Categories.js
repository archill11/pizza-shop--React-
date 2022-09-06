

import { useState, useEffect } from 'react'
import './Categories.scss'

const data = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые", ]


const Categories = (props) => {
    const [active, setActive] = useState(0)

    useEffect(() => {
        props.setCategoryVal(active)
    }, [active])

    return(
        <div className="categories cp">
            <ul>
                {data.map((item, indx) => {
                    return (
                        <li onClick={()=>setActive(indx)} className={active === indx ? 'active' : ''} key={indx}>{item}</li>
                    )
                }) }
            </ul>
        </div>
    )
}

export {Categories}