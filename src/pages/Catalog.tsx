import React, { useEffect, useRef, useState } from "react"
import styled from 'styled-components'
import qs from "qs";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { CardList } from "../components/CardList/CardList"
import { Categories } from "../components/Categories/Categories"
import { SortingSelect } from "../components/SortingSelect/SortingSelect"
import { SearchInput } from "../components/SearchInput/SearchInput"
import { filterSliceState, setQueryParams } from "../redux/categorySlice";
import { fethProducts } from "../redux/productsSlice";
import { AppDispatch, RootState } from "../redux/store";

const SortingBlock = styled.div`
display: grid;
grid-auto-flow: column;
justify-content: space-between;
height: 120px;
padding: 30px;`


const Catalog: React.FC = () => {
  
  const [searchVal, searchByVal] = useState('')
  const { category, sortProperty } = useSelector((state: RootState) => state.filter)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const windowLocationSearch = useRef(false)
  const firstRender = useRef(true)


  const fetchData = () => {
   
    const c: string | '' = category === 0 ? '' : `category=${category}`
    const s: string | '' = sortProperty ? `&sortBy=${sortProperty}` : ''     
    dispatch(fethProducts([c, s]))
 
    window.scrollTo(0, 0)
  }

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
    if ( !windowLocationSearch.current ) {
      fetchData()
    }
    windowLocationSearch.current = false
  }, [category, sortProperty])



  return (
    <>
      <SortingBlock>
        <Categories categoryVal={category} />
        <SearchInput placeholder={'Поиск пиццы'} searchVal={searchVal} searchByVal={searchByVal}/>
        <SortingSelect sortingVal={sortProperty}/>
      </SortingBlock>
      <CardList searchVal={searchVal} />
    </>
  )
           
}

export {Catalog}