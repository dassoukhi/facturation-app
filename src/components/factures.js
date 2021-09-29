import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearClient } from '../features/clientSlice'
import { resetAll } from '../features/articleSlice'
import { clearInvoice } from '../features/invoiceSlice'
import ListeFactures from './listeFactures'
import NavFacture from './navFacture'
import NewFacture from './newFacture'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function Factures() {
  const [input, setinput] = useState('')
  const [createStatus, setCreateStatus] = useState(false)
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user'))
  const [invoicesList, setInvoicesList] = useState([])
  const history = useHistory()

  useEffect(() => {
    if (user) {
      axios
        .get('/organisations/' + user.id)
        .then(response => {
          setInvoicesList(response.data.factures)
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
      {createStatus && <NewFacture handleStatus={handleStatus} />}
    </React.Fragment>
  )
}
