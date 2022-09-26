//@ts-nocheck
import {Routes, Route} from "react-router-dom";
import React from "react"
import { Header } from './components/Header/Header';
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Item } from "./pages/Item";
import  {Payment} from "./pages/Payment/Payment";

import styles from './App.module.scss';
import { Auth } from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/auth/slice";



const App: React.FC = () => {

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <div className={styles.app_wrapper + ' clear'} >
      <Header />
      
      <Routes>
        <Route path="/" element={ <Catalog /> }/>

        <Route path="item/:id" element={ <Item/> }/>
        
        <Route path="cart" element={ <Cart/> }/>
        <Route path="pay" element={ <Payment/> }/>
        
        <Route path="auth" element={ <Auth/> }/>
        
        <Route path="*" element={ <NotFound/> }/>
      </Routes>                
    </div>
  );
}

export default App;
