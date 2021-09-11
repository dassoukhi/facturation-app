import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearClient } from '../features/clientSlice'
import { resetAll } from '../features/articleSlice'
import { clearInvoice } from '../features/invoiceSlice'
import ListeFactures from './listeFactures'
import NavFacture from './navFacture'
import NewFacture from './newFacture'

export default function Factures() {
  const [input, setinput] = useState('')
  const [createStatus, setCreateStatus] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
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

  return (
    <React.Fragment>
      {!createStatus && (
        <NavFacture
          search={input}
          setSearch={setinput}
          handleStatus={handleStatus}
        />
      )}
      {!createStatus && <ListeFactures search={input} />}
      {createStatus && <NewFacture handleStatus={handleStatus} />}
    </React.Fragment>
  )
}
