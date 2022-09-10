import serch from '../../assets/img/search.svg'
import close from '../../assets/img/close_delete.svg'
import debounce from 'lodash.debounce';
import React, { useCallback, useRef, useState } from 'react';

import styles from './SearchInput.module.scss';

type SearchInputProps = {searchVal: string, placeholder: string, searchByVal: (txt: string) => void  }


const SearchInput: React.FC<SearchInputProps> = (props) => {
  const [viewSearchVal, setViewSearchVal] = useState('')

  const searchInpt = useRef<HTMLInputElement>(null)
  const clearInpt = () => {
    props.searchByVal('')
    setViewSearchVal('')
    searchInpt.current?.focus()
  }

  const callSearch = useCallback( debounce((txt: string)=> { props.searchByVal(txt) }, 250), [])
  
  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setViewSearchVal(e.target.value)
    callSearch(e.target.value)
  }
  const mo = (e: React.MouseEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).blur() 
  }
  

  return (
    <div className={styles.box} >
      <form name="search">
          <input ref={searchInpt} value={viewSearchVal} placeholder={props.placeholder} className={styles.input} name="txt" type="text" 
              onChange={(e) => search(e)}
              onMouseOut={mo}/>
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