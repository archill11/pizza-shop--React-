

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Sceleton } from "../Sceleton/Sceleton"
import { Card } from "./Card/Card"

import './CardList.scss'



const CardList = (props) => {

    const { status, items } = useSelector(state => state.products)

    const sceletons = new Array(6).fill(0).map((_, i) => <Sceleton key={i}/>)

    let pizasLIst = items
                    .filter(item => item.title.toLowerCase().includes(props.searchVal.toLowerCase().trim(), 0) )
                    .map((item, indx) => (
                            <Card key={item.id} {...item} />
                        )
                    )

    return(
        <div className="card_list">
            {status === 'loading' ? sceletons :
             status === 'success' ? pizasLIst : <h2>Ничего не найдено...</h2>}
        </div>
    )
}

export {CardList}