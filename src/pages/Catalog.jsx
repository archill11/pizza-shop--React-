import React, { useEffect, useRef, useState } from "react"
import styled from 'styled-components'
import axios from 'axios';
import qs from "qs";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CardList } from "../components/CardList/CardList"
import { Categories } from "../components/Categories/Categories"
import { SortingSelect } from "../components/SortingSelect/SortingSelect"
import { SearchInput } from "../components/SearchInput/SearchInput"
import { setQueryParams } from "../redux/categorySlice";
import { fethProducts, setProducts } from "../redux/productsSlice";

const SortingBlock = styled.div`
display: grid;
grid-auto-flow: column;
justify-content: space-between;
height: 120px;
padding: 30px;`



const Catalog = (props) => {
  
  const [searchVal, searchByVal] = useState('')
  const { categoryVal, sortingVal } = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const windowLocationSearch = useRef(false)
  const firstRender = useRef(true)


  const fetchData = () => {
   
    const c = categoryVal === 0 ? '' : `category=${categoryVal}`
    const s = sortingVal ? `&sortBy=${sortingVal}` : ''     
    dispatch(fethProducts([c, s]))
 
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (!firstRender.current) {
      const queryString = qs.stringify({
        sortProperty: sortingVal,
        category: categoryVal,
      })
      navigate(`?${queryString}`)
    }
    firstRender.current = false
  }, [categoryVal, sortingVal])
  
  useEffect(() => {
    if (window.location.search) {
      const queryParams = qs.parse(window.location.search.substring(1))
      dispatch(setQueryParams(queryParams))
      windowLocationSearch.current = true
    }
  }, [])

  useEffect(() => {
    if ( !windowLocationSearch.current ) {
      fetchData()
    }
    windowLocationSearch.current = false
  }, [categoryVal, sortingVal])



  return (
    <>
      <SortingBlock>
        <Categories categoryVal={categoryVal} />
        <SearchInput placeholder={'Поиск пиццы'} searchVal={searchVal} searchByVal={searchByVal}/>
        <SortingSelect sortingVal={sortingVal}/>
      </SortingBlock>
      <CardList searchVal={searchVal} />
    </>
  )
           
}

export {Catalog}