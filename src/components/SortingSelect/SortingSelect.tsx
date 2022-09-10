import sort from '../../assets/img/sort-ascending.svg'
import { useDispatch } from "react-redux";

import './SortingSelect.scss'
import { setSortingVal } from '../../redux/category/slice';

type SortingSelectProps = {sortingVal: string}

const SortingSelect: React.FC<SortingSelectProps> = (props) => {

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
