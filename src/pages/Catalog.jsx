import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import axios from 'axios';
import { CardList } from "../components/CardList/CardList"
import { Categories } from "../components/Categories/Categories"
import { SortingSelect } from "../components/SortingSelect/SortingSelect"
import { SearchInput } from "../components/SearchInput/SearchInput"
import { useSelector } from "react-redux"

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

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        
        const c = categoryVal === 0 ? '' : `category=${categoryVal}`
        const s = `&sortBy=${sortingVal}`         
        const itemsResponse = await axios.get('https://6316f07e82797be77feea866.mockapi.io/items?' + c + s )

        setPizzaData(itemsResponse.data) 
        setLoading(false)
      } catch (error) {
        alert('Ошибка при запросе данных')
        console.error(error)
      }
    })()
    window.scrollTo(0, 0)
  }, [categoryVal, sortingVal])


  return (
    <>
      <SortingBlock>
        <Categories categoryVal={categoryVal} />
        <SearchInput placeholder={'Поиск пиццы'} searchVal={searchVal} searchByVal={searchByVal}/>
        <SortingSelect sortingVal={sortingVal}/>
      </SortingBlock>
      <CardList pizzaData={pizzaData} loading={loading} 
        searchVal={searchVal} 
        />
    </>
  )
           
}

export {Catalog}