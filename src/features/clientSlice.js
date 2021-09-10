import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  name: '',
  adress: '',
  email: '',
  phone: '',
  siteWeb: ''
}

export const clientSlice = createSlice({
  name: 'client',
  initialState: { value: initialStateValue },
  reducers: {
    addClient: (state, action) => {
      state.value = action.payload
    },
    clearClient: state => {
      state.value = initialStateValue
    }
  }
})

export const { addClient, clearClient } = clientSlice.actions

export default clientSlice.reducer
