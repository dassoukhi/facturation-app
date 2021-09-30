import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = []

export const listInvoicesSlice = createSlice({
  name: 'listInvoices',
  initialState: { value: initialStateValue },
  reducers: {
    clearListeInvoice: state => {
      state.value = initialStateValue
    },
    getListInvoices: (state, action) => {
      state.value = action.payload
    },
    deleteItem: (state, action) => {
      const current = state.value.filter(e => e.id !== action.payload)
      state.value = current
    }
  }
})

export const { clearListeInvoice, getListInvoices, deleteItem } =
  listInvoicesSlice.actions

export default listInvoicesSlice.reducer
