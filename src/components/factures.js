import React from 'react'
import { useState } from 'react'
import ListeFactures from './listeFactures'
import NavFacture from './navFacture'
import NewFacture from './newFacture'

export default function Factures() {
  const [input, setinput] = useState('')
  const [createStatus, setCreateStatus] = useState(false)
  const handleStatus = () => {
    setCreateStatus(!createStatus)
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
