
import styled from 'styled-components'
import { DetailedInfo } from "../components/DetailedInfo/DetailedInfo"


const ItemWrapper = styled.div`
display: grid;
grid-auto-flow: column;
justify-content: start;
gap: 50px`



const Item = () => {
    return(
        <ItemWrapper>
            <DetailedInfo/>
        </ItemWrapper>
    )
}

export {Item}