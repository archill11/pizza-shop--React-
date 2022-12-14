import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from 'styled-components'
import qs from "qs";
import debounce from 'lodash.debounce';
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { CardList } from "../components/CardList/CardList"
import { Categories } from "../components/Categories/Categories"
import { SortingSelect } from "../components/SortingSelect/SortingSelect"
import { SearchInput } from "../components/SearchInput/SearchInput"
import { AppDispatch, RootState } from "../redux/store";
import { setQueryParams } from "../redux/category/slice";
import { filterSliceState } from "../redux/category/types";
import { fethProducts } from "../redux/products/asyncActions";

const SortingBlock = styled.div`
display: grid;
grid-auto-flow: column;
justify-content: space-between;
height: 120px;
padding: 30px;
@media (max-width: 650px) {
  grid-auto-flow: row;
  height: 184px;
  padding: 15px;
  gap: 5px;
}
`


const Catalog: React.FC = () => {
  const [limit, setLimit] = useState(6)
  const [searchVal, searchByVal] = useState('')
  const { category, sortProperty } = useSelector((state: RootState) => state.filter)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const windowLocationSearch = useRef(false)
  const firstRender = useRef(true)



  const fetchData = () => {
  
    const l: string = String(limit)
    const s: string | '' = sortProperty ? `&sortBy=${sortProperty}` : ''     
    const c: string | '' = category === 0 ? '' : `&category=${category}`
    dispatch(fethProducts([l, s, c]))
    
    // window.scrollTo(0, 0)
  }


  const scrollHandler =  debounce((event: Event)=> {
    const targetDiv: HTMLDocument = event.target as HTMLDocument
    if (targetDiv.documentElement.scrollHeight - (targetDiv.documentElement.scrollTop + window.innerHeight) < 5 && limit < 20 ) {
      window.scrollTo(0,  targetDiv.documentElement.scrollHeight - 100)
      setLimit(limit => limit + 6 )
    }
  }, 400)
  


  useEffect(() => {
    const win: Window = window; 
    win.addEventListener('scroll', scrollHandler,)
    return function() {
      win.removeEventListener('scroll', scrollHandler)
    }
  }, [limit])

  useEffect(() => {
    if (!firstRender.current) {
      const queryString = qs.stringify({
        sortProperty,
        category,
      })
      navigate(`?${queryString}`)
    }
    firstRender.current = false
  }, [category, sortProperty])
  
  useEffect(() => {
    if (window.location.search) {
      const queryParams = (qs.parse(window.location.search.substring(1)) as unknown) as filterSliceState
      console.log(queryParams);
      dispatch(setQueryParams(queryParams))
      windowLocationSearch.current = true
    }
  }, [])

  useEffect(() => {
    if ( !windowLocationSearch.current || !firstRender.current ) {      
      fetchData()
    }
    windowLocationSearch.current = false
  }, [category, sortProperty, limit])



  return (
    <>
      <SortingBlock>
        <Categories categoryVal={category} />
        <SearchInput placeholder={'??????????...'} searchVal={searchVal} searchByVal={searchByVal}/>
        <SortingSelect sortingVal={sortProperty}/>
      </SortingBlock>
      <CardList searchVal={searchVal} />
    </>
  )
           
}

export {Catalog}