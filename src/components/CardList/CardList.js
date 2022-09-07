

import { useEffect } from "react"
import { Sceleton } from "../Sceleton/Sceleton"
import { Card } from "./Card/Card"

import './CardList.scss'




const CardList = (props) => {

    const sceletons = new Array(6).fill(0).map((_, i) => <Sceleton key={i}/>)

    const pizasLIst = props.pizzaData
        .filter(item => item.title.toLowerCase().includes(props.searchVal.toLowerCase().trim(), 0) )
        .map((item, indx) => (
                <Card key={item.id} {...item} />
            )
        )

    return(
        <div className="card_list">
            {props.loading ? sceletons :
             pizasLIst.length > 0 ? pizasLIst : <h2>Ничего не найдено...</h2>}
        </div>
    )
}

export {CardList}