import React, { useEffect, useRef, useState } from "react"
import styled from 'styled-components'
import qs from "qs";
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
padding: 30px;`


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
    const c: string | '' = category === 0 ? '' : `category=${category}`
    const s: string | '' = sortProperty ? `&sortBy=${sortProperty}` : ''     
    dispatch(fethProducts([l, c, s]))
 
    // window.scrollTo(0, 0)
  }

  
  const scrollHandler = (event: Event)=> {
    const targetDiv: HTMLDocument = event.target as HTMLDocument
    if (targetDiv.documentElement.scrollHeight - (targetDiv.documentElement.scrollTop + window.innerHeight) < 2 && limit < 20 ) {
      setLimit(limit => limit + 6 )
    }
    
  }

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
        <SearchInput placeholder={'Поиск...'} searchVal={searchVal} searchByVal={searchByVal}/>
        <SortingSelect sortingVal={sortProperty}/>
      </SortingBlock>
      <CardList searchVal={searchVal} />
    </>
  )
           
}

export {Catalog}