import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetAll } from '../features/invoceSlice'
import ListeFactures from './listeFactures'
import NavFacture from './navFacture'
import NewFacture from './newFacture'

export default function Factures() {
  const [input, setinput] = useState('')
  const [createStatus, setCreateStatus] = useState(false)
  const dispatch = useDispatch()

  const handleStatus = () => {
    setCreateStatus(!createStatus)
    dispatch(resetAll())
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
