import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  numFacture: '',
  dateDebut: '',
  dateEcheance: '',
  devise: '',
  total: '',
  HT: '',
  taxe: ''
}

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: { value: initialStateValue },
  reducers: {
    addInvoice: (state, action) => {
      state.value = action.payload
    },
    clearInvoice: state => {
      state.value = initialStateValue
    }
  }
})

export const { addInvoice, clearInvoice } = invoiceSlice.actions

export default invoiceSlice.reducer
