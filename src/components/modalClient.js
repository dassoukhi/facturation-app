import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button, Grid, TextField } from '@material-ui/core'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
    borderRadius: '12px'
  }
}))

export default function ModalClient() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [siteWeb, setSiteWeb] = useState('')
  const [adress, setAdress] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant='contained'
        onClick={handleOpen}
        style={{
          width: '250px',
          backgroundColor: '#8FBC8F',
          textTransform: 'none',
          fontSize: '15px'
        }}
      >
        Ajouter client
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer'
                  }}
                  onClick={handleClose}
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
                  Client
                </span>
              </div>
              <div style={{ marginTop: '10px' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id='name'
                      name='name'
                      label='Nom'
                      fullWidth
                      value={name}
                      onChange={e => setName(e.target.value)}
                      size='small'
                      variant='outlined'
                      autoComplete='given-name'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id='email'
                      name='email'
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
                      id='adress'
                      name='adress'
                      label='Adresse'
                      value={adress}
                      onChange={e => setAdress(e.target.value)}
                      variant='outlined'
                      size='small'
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </div>
              <div style={{ marginTop: '20px' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    {/* <TextField
                    required
                    id='phone'
                    name='phone'
                    label='Téléphone'
                    fullWidth
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    size='small'
                    variant='outlined'
                    autoComplete='given-name'
                  /> */}
                    <PhoneInput
                      country={'default'}
                      value={phone}
                      onChange={e => setPhone(e)}
                      placeholder='Numéro de téléphone'
                      containerStyle={{ width: '20px' }}
                      inputStyle={{
                        width: '220px',
                        height: '40px'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='siteWeb'
                      name='siteWeb'
                      label='Site internet'
                      value={siteWeb}
                      onChange={e => setSiteWeb(e.target.value)}
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
                  Ajouter
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
