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
import ToastMessage from './toastMessage'
import notify from './notify'

const TextForgotPassword =
  'Entrez votre adresse e-mail ci-dessous et nous vous enverrons un lien pour réinitialiser votre mot de passe.'

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
    alignItems: 'center'
  },
  textShow: {
    fontSize: '25px',
    fontFamily: 'initial',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  },
  inputStyle: {
    width: '300px',
    [theme.breakpoints.down('xs')]: {
      width: '240px'
    }
  },
  textForgotDiv: {
    display: 'flex',
    width: 300,
    paddingBottom: 20,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '260px'
    }
  },
  textForgotSapn: {
    fontSize: 12,
    color: '#7a7c7f'
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
  const [forgot, setForgot] = useState(false)
  const user = localStorage.getItem('user')
  console.log('user Login : ', user)

  const submitConnexion = e => {
    e.preventDefault()
    if (forgot) {
      axios
        .post(API + '/organisations/forgot', { email: email })
        .then(res => {
          notify(1)
          console.log('sended :', res.data.ok)
        })
        .catch(err => console.error(err))
    } else {
      setLoading(true)
      axios
        .post(API + '/organisations/login', {
          email: email,
          password: password
        })
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
  }

  const isForgotPassword = () => {
    console.log('forgot')
    setForgot(!forgot)
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginLeft: 20,
                  marginBottom: 10,
                  padding: 0,
                  width: '100%'
                }}
              >
                <button
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    color: 'black'
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
                  height: '35px',
                  marginBottom: 15
                }}
              >
                {forgot ? (
                  <span className={classes.textShow}>
                    Réinitialiser le mot de passe
                  </span>
                ) : (
                  <span className={classes.textShow}>
                    Connectez à votre compte
                  </span>
                )}
              </div>
              {isError && <MessageError message={messageError} />}
              {loading && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: '20px'
                  }}
                >
                  <CircularProgress />
                </div>
              )}
              {forgot && (
                <div className={classes.textForgotDiv}>
                  <span className={classes.textForgotSapn}>
                    {TextForgotPassword}
                  </span>
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  justifyItems: 'center'
                }}
              >
                <TextField
                  className={classes.inputStyle}
                  required
                  name='emailModal'
                  label='Email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  variant='outlined'
                  size='small'
                />
              </div>
              {!forgot && (
                <div
                  style={{
                    display: 'flex',
                    marginTop: '15px',
                    justifyContent: 'center',
                    justifyItems: 'center'
                  }}
                >
                  <TextField
                    required
                    className={classes.inputStyle}
                    name='passwordModal'
                    label='Mot de passe'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    variant='outlined'
                    size='small'
                  />
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px'
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
                  {forgot ? 'Envoyer' : 'Connexion'}
                </Button>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px'
                }}
              >
                <a
                  href='#'
                  onClick={isForgotPassword}
                  style={{ textDecoration: 'none' }}
                >
                  {!forgot ? 'Mot de passe oublié?' : 'Se connecter?'}
                </a>
                <ToastMessage />
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
