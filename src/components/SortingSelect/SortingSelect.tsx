import sort from '../../assets/img/sort-ascending.svg'
import { useDispatch } from "react-redux";

import './SortingSelect.scss'
import { setSortingVal } from '../../redux/category/slice';

type SortingSelectProps = {sortingVal: string}

const SortingSelect: React.FC<SortingSelectProps> = (props) => {

    const dispatch = useDispatch()

    return(
        <label className="custom-select" htmlFor="styledSelect1">
            <img src={sort} alt="sort" />
            <select onChange={(e)=>dispatch(setSortingVal(e.target.value))} value={props.sortingVal} id="styledSelect1" name="options">
                <option value="rating">Популярные</option>
                <option value="price">Подешевле</option>
                <option value="priceDesc">Подороже</option>
            </select>
        </label>
    )
}

export {SortingSelect}
