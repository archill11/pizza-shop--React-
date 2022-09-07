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

const SortingBlock = styled.div`
display: grid;
grid-auto-flow: column;
justify-content: space-between;
height: 120px;
padding: 30px;`



const Catalog = (props) => {
  
  const [pizzaData, setPizzaData] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchVal, searchByVal] = useState('')
  const { categoryVal, sortingVal } = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const windowLocationSearch = useRef(false)
  const firstRender = useRef(true)


  const fetchData = () => {
    (async () => {
      try {
        setLoading(true)
        
        const c = categoryVal === 0 ? '' : `category=${categoryVal}`
        const s = sortingVal ? `&sortBy=${sortingVal}` : ''     
        const itemsResponse = await axios.get('https://6316f07e82797be77feea866.mockapi.io/items?' + c + s )

        setPizzaData(itemsResponse.data) 
        setLoading(false)
      } catch (error) {
        alert('Ошибка при запросе данных')
        console.error(error)
      }
    })()
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
  // eslint-disable-next-line
  }, [categoryVal, sortingVal])
  
  useEffect(() => {
    if (window.location.search) {
      const queryParams = qs.parse(window.location.search.substring(1))
      dispatch(setQueryParams(queryParams))
      windowLocationSearch.current = true
    }
  // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if ( !windowLocationSearch.current ) {
      fetchData()
    }
    windowLocationSearch.current = false
  // eslint-disable-next-line
  }, [categoryVal, sortingVal])



  return (
    <>
      <SortingBlock>
        <Categories categoryVal={categoryVal} />
        <SearchInput placeholder={'Поиск пиццы'} searchVal={searchVal} searchByVal={searchByVal}/>
        <SortingSelect sortingVal={sortingVal}/>
      </SortingBlock>
      <CardList pizzaData={pizzaData} loading={loading} 
        searchVal={searchVal} />
    </>
  )
           
}

export {Catalog}