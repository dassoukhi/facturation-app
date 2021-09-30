import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/userSlice'
import themeReducer from './features/themeSlice'
import invoiceSlice from './features/invoiceSlice'
import clientSlice from './features/clientSlice'
import articleSlice from './features/articleSlice'
import listInvoicesSlice from './features/listInvoicesSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    invoice: invoiceSlice,
    article: articleSlice,
    client: clientSlice,
    listInvoices: listInvoicesSlice
  }
})

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
