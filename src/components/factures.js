import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearClient } from '../features/clientSlice'
import { resetAll } from '../features/articleSlice'
import { clearInvoice } from '../features/invoiceSlice'
import ListeFactures from './listeFactures'
import NavFacture from './navFacture'
import NewFacture from './newFacture'
import axios from 'axios'
import { useHistory } from 'react-router'
import API from '../services/api'
import { getListInvoices } from '../features/listInvoicesSlice'

export default function Factures() {
  const invoicesList = useSelector(state => state.listInvoices.value)
  const [input, setinput] = useState('')
  const [createStatus, setCreateStatus] = useState(false)
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user'))
  const history = useHistory()

  useEffect(() => {
    if (user) {
      axios
        .get(API + '/organisations/' + user.id)
        .then(response => {
          dispatch(getListInvoices(response.data.factures))
        })
        .catch(err => console.error(err))
    } else {
      console.log('user not exist')
      history.push('/')
    }
    dispatch(clearClient())
    dispatch(resetAll())
    dispatch(clearInvoice())
  }, [])

  const handleStatus = () => {
    setCreateStatus(!createStatus)
    dispatch(resetAll())
    dispatch(clearClient())
    dispatch(clearInvoice())
  }

  const handleChange = e => {
    setinput(e.target.value)
  }

  let invoiceFilter = invoicesList.filter(invoice => {
    return invoice.num_facture.toLowerCase().startsWith(input.toLowerCase())
  })
  return (
    <React.Fragment>
      {!createStatus && (
        <NavFacture
          search={input}
          setSearch={handleChange}
          handleStatus={handleStatus}
        />
      )}
      {!createStatus && <ListeFactures invoicesList={invoiceFilter} />}
      {createStatus && (
        <NewFacture handleStatus={handleStatus} length={invoicesList.length} />
      )}
    </React.Fragment>
  )
}
