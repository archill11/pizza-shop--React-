import sort from '../../assets/img/sort-ascending.svg'
import { useDispatch } from "react-redux";
import { setSortingVal } from '../../redux/categorySlice';

import './SortingSelect.scss'

const SortingSelect = (props) => {

    const dispatch = useDispatch()

    return(
        <label className="custom-select" htmlFor="styledSelect1">
            <img src={sort} height={30} alt="sort" />
            <select onChange={(e)=>dispatch(setSortingVal(e.target.value))} value={props.sortingVal} id="styledSelect1" name="options">
                <option value="rating&order=desc">Популярные</option>
                <option value="price">Подешевле</option>
                <option value="price&order=desc">Подороже</option>
            </select>
        </label>
    )
}

export {SortingSelect}
