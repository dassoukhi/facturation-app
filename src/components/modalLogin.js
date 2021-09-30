/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import MessageError from './messageError'
import { useHistory } from 'react-router'
import CircularProgress from '@material-ui/core/CircularProgress'
import API from '../services/api'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '12px',
    outline: 'none',
    justifyItems: 'center',
    alignItems: 'center',
    width: 'calc(40px + 60vw)'
  }
}))

export default function ModalLogin({ openLogin, handleCloseLogin }) {
  const classes = useStyles()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isError, setIsError] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const user = localStorage.getItem('user')
  console.log('user Login : ', user)

  const submitConnexion = e => {
    setLoading(true)
    e.preventDefault()
    axios
      .post(API + '/organisations/login', { email: email, password: password })
      .then(response => {
        console.log(JSON.stringify(response.data))
        localStorage.setItem('user', JSON.stringify(response.data))
        setLoading(false)
        history.push('/factures')
      })
      .catch(err => {
        if (err.response) {
          setIsError(true)
          setMessageError(err.response.data.error)
          setLoading(false)
          console.log(err.response.data.error)
        }
      })
  }

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={openLogin}
        onClose={handleCloseLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openLogin}>
          <div className={classes.paper}>
            <form onSubmit={submitConnexion}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer'
                  }}
                  onClick={e => {
                    e.preventDefault()
                    handleCloseLogin()
                  }}
                >
                  X
                </button>
              </div>

              <div
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  height: 'calc(10px + 5.5vw)'
                }}
              >
                <span
                  style={{
                    fontSize: 'calc(5px + 2.5vw)',
                    fontFamily: 'initial'
                  }}
                >
                  Connectez à votre compte
                </span>
              </div>
              {isError && <MessageError message={messageError} />}
              {loading && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress />
                </div>
              )}
              <div
                style={{
                  marginTop: 'calc(5px + 0.5vw)',
                  display: 'flex',
                  justifyContent: 'center',
                  justifyItems: 'center'
                }}
              >
                <TextField
                  required
                  name='emailModal'
                  label='Email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  variant='outlined'
                  size='small'
                  style={{ width: 'calc(65px + 40vw)' }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  marginTop: 'calc(5px + 1.5vw)',
                  justifyContent: 'center',
                  justifyItems: 'center'
                }}
              >
                <TextField
                  required
                  name='passwordModal'
                  label='Mot de passe'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  variant='outlined'
                  size='small'
                  style={{ width: 'calc(65px + 40vw)' }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 'calc(10px + 2vw)'
                }}
              >
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  style={{
                    backgroundColor: '#2E99FF',
                    textTransform: 'none',
                    fontSize: '15px'
                  }}
                >
                  Connexion
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
