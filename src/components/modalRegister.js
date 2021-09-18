/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button, CircularProgress, TextField } from '@material-ui/core'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import MessageError from './messageError'
import { useHistory } from 'react-router'
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
    width: 'calc(60px + 60vw)'
  }
}))

export default function ModalRegister({ openRegister, handleCloseRegister }) {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordSame, setPasswordSame] = useState('')
  const [isError, setIsError] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const user = localStorage.getItem('user')
  console.log('user resgister : ', user)

  const submitClient = e => {
    setLoading(true)
    e.preventDefault()
    if (password === passwordSame) {
      axios
        .post('/organisations/register', {
          nom: name,
          email: email,
          password: password
        })
        .then(response => {
          console.log(response.data)
          console.log(JSON.stringify(response.data))
          try {
            localStorage.setItem('user', JSON.stringify(response.data))
            setLoading(false)
            history.push('/factures')
          } catch (error) {
            alert(error)
          }
        })
        .catch(err => {
          setLoading(false)
          setIsError(true)
          setMessageError(err.response.data.error)
          console.log(err.response.data)
        })
    } else {
      setLoading(false)
      setIsError(true)
      setMessageError('Les mots de passe doivent être identiques')
    }
  }

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={openRegister}
        onClose={handleCloseRegister}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openRegister}>
          <div className={classes.paper}>
            <form onSubmit={submitClient}>
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
                    handleCloseRegister()
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
                  Créez votre compte
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
                  name='nameModal'
                  label='Nom'
                  fullWidth
                  value={name}
                  onChange={e => setName(e.target.value)}
                  size='small'
                  variant='outlined'
                  autoComplete='given-name'
                  style={{ width: 'calc(65px + 40vw)' }}
                />
              </div>
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
                  marginTop: 'calc(5px + 0.5vw)',
                  display: 'flex',
                  justifyContent: 'center',
                  justifyItems: 'center'
                }}
              >
                <TextField
                  required
                  name='password'
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
                  marginTop: 'calc(5px + 0.5vw)',
                  display: 'flex',
                  justifyContent: 'center',
                  justifyItems: 'center'
                }}
              >
                <TextField
                  required
                  name='password'
                  label='Confirmer mot de passe'
                  type='password'
                  value={passwordSame}
                  onChange={e => setPasswordSame(e.target.value)}
                  variant='outlined'
                  size='small'
                  style={{ width: 'calc(65px + 40vw)' }}
                />
              </div>

              <div
                style={{
                  marginTop: 'calc(5px + 0.5vw)',
                  display: 'flex',
                  justifyContent: 'center',
                  justifyItems: 'center'
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
                  S'inscrire
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
