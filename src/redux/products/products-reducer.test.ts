import { productsSliceState, status } from "./types"
import  productsReducer from "./slice"
import { fethProducts } from "./asyncActions"

const products = [{
  _id: '6322dba0b0734480247d2285',
  id: '8',
  imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg',
  title: 'Четыре сезона',
  compound: 'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, томатный соус',
  types: [
    0,
    1
  ],
  sizes: [
    26,
    30,
    40
  ],
  price: [
    395,
    430,
    493
  ],
  category: 5,
  rating: 10
}]

let iniState: productsSliceState = { items: [], status: status.LOADING }

describe("get products list slie", () => {

  it('shoud change status on "loading"', () => {
    const action = {
      type: fethProducts.pending.type,
    }

    const state = productsReducer(iniState, action) 

    expect(state).toEqual({
      items: [],
      status: status.LOADING
    })
  })

  it('shoud change items with status "success"', () => {
    const action = {
      type: fethProducts.fulfilled.type,
      payload: products
    }

    const state = productsReducer(iniState, action) 
    
    expect(state).toEqual({
      items: products,
      status: status.SUCCESS
    })
  })

  it('shoud change items on "[]" with status" error"', () => {
    const action = {
      type: fethProducts.rejected.type,
      payload: products
    }

    const state = productsReducer(iniState, action) 

    expect(state).toEqual({
      items: [],
      status: status.LOADING
    })
  })
  
})