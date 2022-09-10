import React from "react"
import { useSelector } from "react-redux"
import { Item } from "../../redux/products/types"
import { RootState } from "../../redux/store"
import { Sceleton } from "../Sceleton/Sceleton"
import { Card } from "./Card/Card"

import styles from'./CardList.module.scss'


type CardListProps = {searchVal: string }

const CardList: React.FC<CardListProps> = (props) => {

    const { status, items } = useSelector((state: RootState) => state.products)

    const sceletons = new Array(6).fill(0).map((_, i) => <Sceleton key={i}/>)

    let pizasLIst = items
                    .filter((item: Item) => item.title.toLowerCase().includes(props.searchVal.toLowerCase().trim(), 0) )
                    .map((item: Item, indx:number) => (
                            <Card key={item.id} {...item} />
                        )
                    )

    return(
        <div className={styles.card_list}>
            {status === 'loading' ? sceletons :
             status === 'success' ? pizasLIst : <h2>Ничего не найдено...</h2>}
        </div>
    )
}

export {CardList}