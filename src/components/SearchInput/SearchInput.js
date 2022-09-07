
import serch from '../../assets/img/search.svg'

import styles from './SearchInput.module.scss';



const SearchInput = (props) => {

  const mo = (e) => {
    e.target.value = ''
    e.target.placeholder = ''
    e.target.blur() 
  }
  const mi = (e) => {
    e.target.value = props.searchVal
    e.target.placeholder = props.placeholder
  }

  return (
    <div className={styles.box}>
    <form name="search">
        <input value={props.searchVal} className={styles.input} name="txt" type="text" 
          onMouseOut={mo} onMouseEnter={mi} onChange={(e) => props.searchByVal(e.target.value)}/>
    </form>
    <i>
      <img src={serch} height={25} alt="search"></img>  
    </i>

</div>
    
  );
}

export {SearchInput};