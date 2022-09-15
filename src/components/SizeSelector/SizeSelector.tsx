import React from "react"


import styles from './SizeSelector.module.scss'

type SizeSelectorProps = {size: number, id: string, itemSizes: number[], category: number , setSize: (i: number)=> void}

const SizeSelector: React.FC<SizeSelectorProps> = (props) => {
    return(
        <ul className='cp'>
            {props.itemSizes.map((item, indx) => (
                    <li onClick={()=>props.setSize(indx)} className={props.size === indx ? styles.active : ''} key={indx}>
                        {item} {props.category < 6 ? "см." : "л"} 
                    </li> 
                ))}
        </ul>
    )
}

export {SizeSelector}