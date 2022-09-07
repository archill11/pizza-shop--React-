import {Routes, Route} from "react-router-dom";
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Header } from './components/Header/Header';
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

import styles from './App.module.scss';


function App() {

  
  return (
    <div className={styles.app_wrapper + ' clear'} >
      <Header />

      <Routes>
        <Route path="/" element={ <Catalog /> }/>

        <Route path="cart" element={ <Cart/> }/>
        
        <Route path="*" element={ <NotFound/> }/>
      </Routes>                
    </div>
  );
}

export default App;
