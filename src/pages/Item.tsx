
import styled from 'styled-components'
import { DetailedInfo } from "../components/DetailedInfo/DetailedInfo"


const ItemWrapper = styled.div`
padding-bottom: 50px;
display: grid;
grid-auto-flow: column;
justify-content: start;
gap: 50px;
@media (max-width: 815px) {
    gap: 25px;
};
@media (max-width: 550px) {
    grid-auto-flow: row;
    padding-left: 25px;
};
`



const Item = () => {
    return(
        <ItemWrapper>
            <DetailedInfo/>
        </ItemWrapper>
    )
}

export {Item}