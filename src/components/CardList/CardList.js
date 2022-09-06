

import { useEffect } from "react"
import { Sceleton } from "../Sceleton/Sceleton"
// import pizzaData from "../../assets/pizzaData.json"
import { Card } from "./Card/Card"

import './CardList.scss'




const CardList = (props) => {

    //Sorting
    const priceU = (a, b) => a.price - b.price
    const priceD = (a, b) => b.price - a.price
    const rating = (a, b) => b.rating - a.rating
    const sortVal = props.sortingVal === "rating" ? rating : props.sortingVal === "priceD" ? priceD : priceU

    const sceletons = new Array(6).fill(0).map((item, i)=> <Sceleton key={i}/>)

    const pizasLIst = props.pizzaData.sort( sortVal )
        .filter(item => [0, item.category]
        .includes(props.categoryVal, 0))
        .map((item, indx) => {
            return (
                <Card key={item.id} {...item} />
            )
        })


    return(
        <div className="card_list">
            {props.loading ? sceletons : pizasLIst}
        </div>
    )
}

export {CardList}