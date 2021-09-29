import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import PhoneInput from 'react-phone-input-2'
import { DropzoneArea } from 'material-ui-dropzone'

import { AppBar, Grid, TextField } from '@material-ui/core'
import styled from 'styled-components'
import axios from 'axios'

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
`

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to='https://material-ui.com/'>
        Dassolution.fr
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    zIndex: 999
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}))

export default function EntrepriseParam() {
  const classes = useStyles()
  const [files, setFiles] = useState(null)
  const user = JSON.parse(localStorage.getItem('user'))
  const [nom, setNom] = useState(user.name || '')
  const [email, setEmail] = useState(user.email || '')
  const [address, setAddress] = useState(user.adress || '')
  const [phone, setPhone] = useState(user.phone || '')
  const [siteWeb, setSiteWeb] = useState(user.siteWeb || '')
  const [iban, setIban] = useState('')
  const [bankName, setBankName] = useState('')
  const [numRegister, setNumRegister] = useState('')
  const [tva, setTva] = useState('')
  const [logo, setLogo] = useState(localStorage.getItem('logo'))

  console.log('user :', user)

  const handleFile = e => {
    const file = e[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFiles(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .put('/organisations/' + user.id, {
        nom: nom,
        email: email,
        adresse: address,
        iban: iban,
        site_internet: siteWeb,
        telephone: phone,
        tva: tva,
        num_registre: numRegister,
        nom_banque: bankName
      })
      .then(res => {
        console.log('update:', res.data)
        localStorage.setItem(
          'user',
          JSON.stringify({
            name: res.data.nom,
            adress: res.data.adresse,
            email: res.data.email,
            id: res.data.id,
            phone: res.data.telephone,
            siteWeb: res.data.site_internet
          })
        )
        if (files) {
          localStorage.setItem('logo', files)
          setLogo(files)
        }
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    axios
      .get('/organisations/' + user.id)
      .then(res => {
        console.log(res.data)
        setBankName(res.data.nom_banque)
        setNumRegister(res.data.num_registre)
        setTva(res.data.tva)
        setIban(res.data.iban)
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav>
        <AppBar position='absolute' color='default' className={classes.appBar}>
          <Toolbar style={{ justifyContent: 'center' }}>
            <Typography variant='h6' color='inherit' noWrap>
              Paramétre entreprise
            </Typography>
          </Toolbar>
        </AppBar>
      </Nav>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <React.Fragment>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='nameEnt'
                      name='nameEnt'
                      label="Nom de l'entreprise"
                      value={nom}
                      onChange={e => setNom(e.target.value)}
                      fullWidth
                      autoComplete='given-name'
                      variant='outlined'
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      id='email'
                      name='email'
                      label='Email'
                      type='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      fullWidth
                      autoComplete='family-name'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id='address'
                      name='address'
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      label='Addresse'
                      fullWidth
                      autoComplete='shipping address-line1'
                      variant='outlined'
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='bankName'
                      name='bankName'
                      value={bankName}
                      onChange={e => setBankName(e.target.value)}
                      label='Nom de la banque'
                      fullWidth
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='IBAN'
                      name='IBAN'
                      label='IBAN'
                      value={iban}
                      onChange={e => setIban(e.target.value)}
                      fullWidth
                      autoComplete='shipping address-level2'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='numRegister'
                      name='numRegister'
                      label='numéro de registre'
                      value={numRegister}
                      onChange={e => setNumRegister(e.target.value)}
                      fullWidth
                      autoComplete='shipping postal-code'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='webSite'
                      name='webSite'
                      label='Site internet'
                      value={siteWeb}
                      onChange={e => setSiteWeb(e.target.value)}
                      fullWidth
                      autoComplete='shipping country'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <PhoneInput
                      country={'default'}
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder='Numéro de téléphone'
                      containerStyle={{ width: '20px' }}
                      inputStyle={{
                        width: '465px',
                        height: '56px'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id='tva'
                      name='tva'
                      label='TVA'
                      type='number'
                      value={tva}
                      onChange={e => setTva(e.target.value)}
                      fullWidth
                      autoComplete='shipping country'
                      variant='outlined'
                    />
                  </Grid>
                  {logo && (
                    <Grid
                      item
                      xs={12}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '3px'
                      }}
                    >
                      <p>Logo</p>
                      <img
                        className='imageResize'
                        src={localStorage.getItem('logo')}
                      />
                    </Grid>
                  )}
                  <DropzoneArea
                    onChange={handleFile}
                    acceptedFiles={['image/*']}
                    filesLimit={1}
                    dropzoneText={
                      localStorage.getItem('logo')
                        ? 'Changez le logo de votre entreprise'
                        : 'Ajoutez le logo de votre entreprise'
                    }
                    getFileAddedMessage={e =>
                      'Le fichier ' + e + ' a été ajouté'
                    }
                    getFileRemovedMessage={e =>
                      'Le fichier ' + e + ' a été supprimé'
                    }
                    previewGridClasses={{ container: 'imagePreview' }}
                  />
                </Grid>
              </React.Fragment>
              <div className={classes.buttons}>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.button}
                  type='submit'
                >
                  Valider
                </Button>
              </div>
            </React.Fragment>
          </form>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  )
}
