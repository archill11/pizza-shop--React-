
import styles from './SizeSelector.module.scss'


const SizeSelector = (props) => {
   

    return(
        <ul className='cp'>
            {props.itemSizes.map((item, indx) => (
                    <li onClick={()=>props.setSize(indx)} className={props.size === indx ? styles.active : ''} key={indx}>{item} {props.id > 15 ? "л" : "см."} </li> 
                ))}
        </ul>
    )
}

export {SizeSelector}