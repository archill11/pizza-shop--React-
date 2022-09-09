
import styles from './TypeSelector.module.scss'



const TypeSelector = (props) => {
    const types = ["тонкое", "традиционное"]

    return(
        <ul className='cp'>
            {props.itemTipes.map((item, indx) => (
                    <li onClick={()=> props.setActiveType(indx)} 
                    className={props.activeType === indx ? styles.active : ''} key={indx}>{types[item]} </li>
                ))}
        </ul>
    )
}

export {TypeSelector}