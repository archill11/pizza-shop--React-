
import styles from './TypeSelector.module.scss'


type TypeSelectorProps = {activeType: number, itemTipes: number[], setActiveType: (i: number) => void}

const TypeSelector: React.FC<TypeSelectorProps> = (props) => {
    const types: string[] = ["тонкое", "традиционное"]

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