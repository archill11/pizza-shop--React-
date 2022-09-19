
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { setCategoryVal } from "../../redux/category/slice";
import { fethCategoryes } from "../../redux/category/asyncActions";

import './Categories.scss'
import { AppDispatch, RootState } from "../../redux/store";


type CategoriesProps = {categoryVal: number}

const Categories: React.FC<CategoriesProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>()
  const { allCategoryes } = useSelector((state: RootState) => state.filter)
  
  React.useEffect(()=> {
    dispatch(fethCategoryes())
  },[])

  return(
    <div className="categories cp">
      <ul>
        {allCategoryes.length !== 0 && allCategoryes.map((item, indx) => (
          <li onClick={()=> dispatch(setCategoryVal(indx))} className={props.categoryVal === indx ? 'active' : ''} key={indx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export {Categories}