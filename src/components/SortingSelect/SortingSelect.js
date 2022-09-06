import sort from '../../assets/img/sort-ascending.svg'

import './SortingSelect.scss'

const SortingSelect = (props) => {
    return(
        <label className="custom-select" htmlFor="styledSelect1">
            <img src={sort} height={30} alt="sort" />
            <select onChange={(e)=>props.setSortingVal(e.target.value)} id="styledSelect1" name="options">
                <option value="rating">Популярные</option>
                <option value="priceU">Подешевле</option>
                <option value="priceD">Подороже</option>
            </select>
        </label>
    )
}

export {SortingSelect}