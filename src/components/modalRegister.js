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
        .post(API + '/organisations/register', {
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
                  height: '60px'
                }}
              >
                <span className={classes.textShow}>Créez votre compte</span>
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
                  name='nameModal'
                  label='Nom'
                  fullWidth
                  value={name}
                  onChange={e => setName(e.target.value)}
                  size='small'
                  variant='outlined'
                  autoComplete='given-name'
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
              <div
                style={{
                  marginTop: 'calc(5px + 0.5vw)',
                  display: 'flex',
                  justifyContent: 'center',
                  justifyItems: 'center'
                }}
              >
                <TextField
                  className={classes.inputStyle}
                  required
                  name='password'
                  label='Mot de passe'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  variant='outlined'
                  size='small'
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
                  className={classes.inputStyle}
                  required
                  name='password'
                  label='Confirmer mot de passe'
                  type='password'
                  value={passwordSame}
                  onChange={e => setPasswordSame(e.target.value)}
                  variant='outlined'
                  size='small'
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
