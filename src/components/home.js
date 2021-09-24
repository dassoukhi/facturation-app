/* eslint-disable react/no-unescaped-entities */
import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import ModalLogin from './modalLogin'
import ModalRegister from './modalRegister'

const Home = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const history = useHistory()
  const user = localStorage.getItem('user')
  if (user) {
    history.push('/factures')
    console.log('user in Home : ', user)
  }

  const handleCloseLogin = () => {
    setOpenLogin(false)
  }
  const handleCloseRegister = () => {
    setOpenRegister(false)
  }
  return (
    <div className='homePage'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '',
          marginBottom: '30px'
        }}
      >
        <h1>Dass~olution</h1>

        <h3>Module facturation</h3>
        <div
          style={{
            width: '50%',
            alignSelf: 'center'
          }}
        >
          <p>
            Une solution complète pour créer et éditer vos devis et factures
            professionnels personnalisables avec logo de votre entreprise, vous
            aurez une vision globale de vos échéances en cours pour un meilleur
            suivi et tout votre fichier client à portée de main pour le
            contacter, le relancer en 1 seul clic.
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          justifyItems: 'center',
          alignItems: 'center',
          marginTop: '-20px',
          height: '90px'
        }}
      >
        <div>
          <Button
            variant='contained'
            onClick={() => setOpenLogin(true)}
            style={{
              width: '250px',
              backgroundColor: '#4682B4',
              color: '#fff',
              textTransform: 'none',
              fontSize: '15px'
            }}
          >
            Se connecter
          </Button>
        </div>
        <div>
          <Button
            variant='contained'
            onClick={() => setOpenRegister(true)}
            style={{
              width: '250px',
              backgroundColor: '#98FB98',
              color: '#000',
              textTransform: 'none',
              fontSize: '15px'
            }}
          >
            S'inscrire
          </Button>
        </div>
      </div>
      {openLogin && (
        <ModalLogin openLogin={openLogin} handleCloseLogin={handleCloseLogin} />
      )}
      {openRegister && (
        <ModalRegister
          openRegister={openRegister}
          handleCloseRegister={handleCloseRegister}
        />
      )}
    </div>
  )
}

export default Home
