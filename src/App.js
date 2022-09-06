import {Routes, Route} from "react-router-dom";
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";


import styles from './App.module.scss';
import { NotFound } from "./pages/NotFound";


function App() {

  const [sortingVal, setSortingVal] = useState('rating')
  const [categoryVal, setCategoryVal] = useState(0)
  const [pizzaData, setPizzaData] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    (async () => {
      try {
        // const cartResponse = await axios.get('https://6311eb0df5cba498da884e3e.mockapi.io/cart')
        // const FavResponse = await axios.get('https://6311eb0df5cba498da884e3e.mockapi.io/favorites')
        const itemsResponse = await axios.get('https://6316f07e82797be77feea866.mockapi.io/items')

        // setCartItems(cartResponse.data) 
        // setFavItems(FavResponse.data) 
        setPizzaData(itemsResponse.data) 
        
        setLoading(false)
      } catch (error) {
        alert('Ошибка при запросе данных')
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className={styles.app_wrapper + ' clear'} >
      <Header />

      <Routes>

        <Route path="/" element={ 
          <Catalog  
            setCategoryVal={setCategoryVal}
            setSortingVal={setSortingVal}
            pizzaData={pizzaData}
            loading={loading}
            sortingVal={sortingVal}
            categoryVal={categoryVal}
          /> 
        }/>

        <Route path="cart" element={
            <Cart/>
            // <NotFound/>
        }/>
          
      </Routes>                
    </div>
  );
}

export default App;
