import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = [
  { id: 0, description: '', quantite: 0, prix: 0.0, tota: 0.0, taxe: 0 }
]

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: { value: initialStateValue },
  reducers: {
    addArticle: (state, action) => {
      state.value.push(action.payload)
    },

    deleteArticle: (state, action) => {
      const current = state.value.filter(e => e.id !== action.payload)
      console.log('after filter', current)
      state.value = current
    },
    resetAll: state => {
      state.value = initialStateValue
    }
  }
})

export const { addArticle, deleteArticle, resetAll } = invoiceSlice.actions

export default invoiceSlice.reducer
