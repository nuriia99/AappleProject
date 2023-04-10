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
      const index = state.items.findIndex((product) => action.payload._id === product._id)
      if(index === -1) state.items.push( {...action.payload, timesSelected: 1 } )
      else state.items[index].timesSelected++
    },
    removeBasket: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex((item) => item._id === action.payload.id)
      if (index >= 0) {
        if(state.items[index].timesSelected === 1) state.items.splice(index, 1)
        else state.items[index].timesSelected--
      }
    },
    increaseTimesSelected: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex((item) => item._id === action.payload.id)
      if (index >= 0) {
        state.items[index].timesSelected++
      }
    },
    decreaseTimesSelected: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex((item) => item._id === action.payload.id)
      if (index >= 0) {
        state.items[index].timesSelected--
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBasket, removeBasket, increaseTimesSelected, decreaseTimesSelected } = basketSlice.actions

export const selectBasketItems = (state: RootState) => state.basket.items
export const selectBasketTotal = (state: RootState) =>  {
  return state.basket.items.reduce((total: number, item: Product) => (total += item.price * item.timesSelected), 0)
}
  

export default basketSlice.reducer