import serch from '../../assets/img/search.svg'
import close from '../../assets/img/close_delete.svg'
import debounce from 'lodash.debounce';
import { useCallback, useRef, useState } from 'react';

import styles from './SearchInput.module.scss';


const SearchInput = (props) => {
  const [viewSearchVal, setViewSearchVal] = useState('')

  const searchInpt = useRef()
  const clearInpt = () => {
    props.searchByVal('')
    setViewSearchVal('')
    searchInpt.current.focus()
  }

  const callSearch = useCallback( debounce((txt)=> { props.searchByVal(txt) }, 250), [])
  
  const search = (e) => {
    setViewSearchVal(e.target.value)
    callSearch(e.target.value)
  }


  const mo = (e) => {
    e.target.placeholder = ''
    e.target.blur() 
  }
  const mi = (e) => {
    e.target.value = props.searchVal
    e.target.placeholder = props.placeholder
  }

  return (
    <div className={styles.box} >
      <form name="search">
          <input ref={searchInpt} value={viewSearchVal} className={styles.input} name="txt" type="text" 
              onMouseOut={mo} onMouseEnter={mi}
              onChange={(e) => search(e)}/>
      </form>
      <i>
        <img src={serch} height={25} alt="search"></img>  
      </i>
      <div className={styles.close + " cp"} onClick={()=> clearInpt()} >
        <img src={close} height={25} alt="close"></img>  
      </div>
    </div>
    
  );
}

export {SearchInput};