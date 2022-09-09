
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import { DetailedInfo } from "../components/DetailedInfo/DetailedInfo"


const ItemWrapper = styled.div`
display: grid;
grid-auto-flow: column;
justify-content: start;
gap: 50px`



const Item = (props) => {
    return(
        <ItemWrapper>
            <DetailedInfo/>
        </ItemWrapper>
    )
}

export {Item}