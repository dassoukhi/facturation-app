/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button, Grid, TextField } from '@material-ui/core'

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
    width: '500px'
  }
}))

export default function ModalLogin({ openLogin, handleCloseLogin }) {
  const classes = useStyles()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const submitConnexion = e => {
    e.preventDefault()

    handleCloseLogin()
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
                  display: 'flex',
                  height: '50px'
                }}
              >
                <span style={{ fontSize: '30px', fontFamily: 'initial' }}>
                  Connectez à votre compte
                </span>
              </div>
              <div style={{ marginTop: '20px' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      name='emailModal'
                      label='Email'
                      type='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      variant='outlined'
                      size='small'
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </div>
              <div style={{ marginTop: '20px' }}>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      name='passwordModal'
                      label='Mot de passe'
                      type='password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      variant='outlined'
                      size='small'
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '30px'
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
