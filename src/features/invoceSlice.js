import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = [
  { id: 0, description: '', quantite: 0, prix: 0.0, total: 0.0, taxe: 0 }
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
    },
    changeDescript: (state, action) => {
      const current = [...state.value]
      let index = current.findIndex(e => e.id === action.payload.id)
      if (index >= 0) {
        current[index].description = action.payload.value
      }
      state.value = current
    },
    changeQuantite: (state, action) => {
      const current = [...state.value]
      let index = current.findIndex(e => e.id === action.payload.id)
      if (index >= 0) {
        current[index].quantite = action.payload.value
      }
      state.value = current
    },
    changePrix: (state, action) => {
      const current = [...state.value]
      let index = current.findIndex(e => e.id === action.payload.id)
      if (index >= 0) {
        current[index].prix = action.payload.value
      }
      state.value = current
    },
    changeTotal: (state, action) => {
      const current = [...state.value]
      let index = current.findIndex(e => e.id === action.payload.id)
      if (index >= 0) {
        current[index].total = action.payload.value
      }
      state.value = current
    },
    changeTaxe: (state, action) => {
      const current = [...state.value]
      let index = current.findIndex(e => e.id === action.payload.id)
      if (index >= 0) {
        current[index].taxe = action.payload.value
      }
      state.value = current
    }
  }
})

export const {
  addArticle,
  deleteArticle,
  resetAll,
  changeDescript,
  changeQuantite,
  changePrix,
  changeTotal,
  changeTaxe
} = invoiceSlice.actions

export default invoiceSlice.reducer
