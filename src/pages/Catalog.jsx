import React from "react"
import styled from 'styled-components'
import { CardList } from "../components/CardList/CardList"
import { Categories } from "../components/Categories/Categories"
import { SortingSelect } from "../components/SortingSelect/SortingSelect"

// import styles from './Catalog.module.scss';

const SortingBlock = styled.div`
display: grid;
grid-auto-flow: column;
justify-content: space-between;
height: 120px;
padding: 30px;`


const Catalog = (props) => (
            <>

              <SortingBlock>
                <Categories setCategoryVal={props.setCategoryVal}/>
                <SortingSelect setSortingVal={props.setSortingVal}/>
              </SortingBlock>

              <CardList pizzaData={props.pizzaData} loading={props.loading} 
                sortingVal={props.sortingVal} categoryVal={props.categoryVal}/>
            </>
)

export {Catalog}