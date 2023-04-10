import { RootState } from './store';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BasketState {
  items: Product[]
}

const initialState: BasketState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
      console.log('a')
    },
    removeBasket: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex((item) => item === action.payload)
      if (index >= 0) state.items.splice(index, 1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addBasket, removeBasket } = basketSlice.actions

export const selectBasketItems = (state: RootState) => state.basket.items
export const selectBasketItemsWithId = (state: RootState, id: string) => {
  state.basket.items.filter((item: Product) => item._id === id)
}
export const selectBasketTotal = (state: RootState) =>  {
  state.basket.items.reduce((total: number, item: Product) => (total += item.price), 0)
}
  

export default basketSlice.reducer