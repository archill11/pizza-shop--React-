import React from "react"


import styles from './SizeSelector.module.scss'

type SizeSelectorProps = {size: number, id: string, itemSizes: number[], setSize: (i: number)=> void}

const SizeSelector: React.FC<SizeSelectorProps> = (props) => {
    return(
        <ul className='cp'>
            {props.itemSizes.map((item, indx) => (
                    <li onClick={()=>props.setSize(indx)} className={props.size === indx ? styles.active : ''} key={indx}>
                        {item} {Number(props.id) > 15 ? "л" : "см."} 
                    </li> 
                ))}
        </ul>
    )
}

export {SizeSelector}