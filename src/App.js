import {Routes, Route} from "react-router-dom";

import { Header } from './components/Header/Header';
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Item } from "./pages/Item";

import styles from './App.module.scss';



function App() {

  
  return (
    <div className={styles.app_wrapper + ' clear'} >
      <Header />

      <Routes>
        <Route path="/" element={ <Catalog /> }/>

        <Route path="cart" element={ <Cart/> }/>
        
        <Route path="item/:id" element={ <Item/> }/>
        
        <Route path="*" element={ <NotFound/> }/>
      </Routes>                
    </div>
  );
}

export default App;
